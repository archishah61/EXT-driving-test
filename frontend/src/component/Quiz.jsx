/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, XCircle, AlertCircle, ChevronRight, Award, Activity, Clock, HelpCircle } from "lucide-react"

// Custom Progress component
const Progress = ({ value, className, ...props }) => {
    return (
        <div className={`w-full bg-slate-200 rounded-full overflow-hidden ${className}`} {...props}>
            <div className="bg-emerald-500 h-full transition-all duration-300 ease-in-out" style={{ width: `${value}%` }} />
        </div>
    )
}

// Confetti animation component
const Confetti = ({ active }) => {
    const confettiRef = useRef(null);

    if (!active) return null;

    // Generate confetti pieces
    const pieces = Array.from({ length: 50 }).map((_, i) => {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomLeft = Math.random() * 100;
        const randomAnimationDuration = 1 + Math.random() * 2;

        return (
            <div
                key={i}
                className="absolute w-2 h-2 rounded-sm"
                style={{
                    backgroundColor: randomColor,
                    left: `${randomLeft}%`,
                    top: '-10px',
                    animation: `confettiFall ${randomAnimationDuration}s linear forwards`,
                    opacity: 0,
                    animationDelay: `${Math.random() * 3}s`
                }}
            />
        );
    });

    return (
        <div
            ref={confettiRef}
            className="absolute inset-0 overflow-hidden pointer-events-none z-10"
            style={{
                '@keyframes confettiFall': {
                    '0%': { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                    '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: 0 }
                }
            }}
        >
            {pieces}
        </div>
    );
};

export default function Quiz() {
    // Quiz state
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [score, setScore] = useState({ correct: 0, incorrect: 0 })
    const [userAnswers, setUserAnswers] = useState([])
    const [isAnswerSelected, setIsAnswerSelected] = useState(false)
    const [showFeedback, setShowFeedback] = useState(false)
    const [quizComplete, setQuizComplete] = useState(false)
    const [showConfetti, setShowConfetti] = useState(false)

    // Timer state
    const [timeRemaining, setTimeRemaining] = useState(30) // 30 seconds per question
    const [isPaused, setIsPaused] = useState(false)
    const [timerColor, setTimerColor] = useState("text-slate-700")

    // Hover state for animation
    const [hoveredOption, setHoveredOption] = useState(null)

    // Sample questions data - in a real app, you would fetch this from an API
    const questions = [
        {
            id: 1,
            question: "What does this sign mean?",
            image: "/placeholder.svg?height=300&width=400",
            options: [
                {
                    id: "a",
                    text: "Road under construction",
                    isCorrect: false,
                    explanation: "This is incorrect. This sign does not indicate construction.",
                },
                {
                    id: "b",
                    text: "Two-way traffic",
                    isCorrect: false,
                    explanation: "This is incorrect. Two-way traffic is indicated by a different sign.",
                },
                {
                    id: "c",
                    text: "Divided highway begins",
                    isCorrect: true,
                    explanation: "Correct! This sign indicates that a divided highway begins ahead.",
                },
                {
                    id: "d",
                    text: "Divided highway ends",
                    isCorrect: false,
                    explanation: "This is incorrect. The highway division is beginning, not ending.",
                },
            ],
        },
        {
            id: 2,
            question: "When should you use your high beam headlights?",
            options: [
                {
                    id: "a",
                    text: "On busy city streets",
                    isCorrect: false,
                    explanation: "This is incorrect. High beams can blind other drivers in busy areas.",
                },
                {
                    id: "b",
                    text: "When driving in foggy conditions",
                    isCorrect: false,
                    explanation: "This is incorrect. High beams reflect off fog and reduce visibility.",
                },
                {
                    id: "c",
                    text: "When following another vehicle closely",
                    isCorrect: false,
                    explanation: "This is incorrect. High beams can blind drivers through their mirrors.",
                },
                {
                    id: "d",
                    text: "On open roads with no oncoming traffic",
                    isCorrect: true,
                    explanation: "Correct! High beams should be used when there are no vehicles ahead or approaching.",
                },
            ],
        },
        {
            id: 3,
            question: "What is the speed limit in a school zone when children are present?",
            options: [
                {
                    id: "a",
                    text: "15 mph",
                    isCorrect: true,
                    explanation: "Correct! The speed limit is reduced to 15 mph in school zones when children are present.",
                },
                {
                    id: "b",
                    text: "25 mph",
                    isCorrect: false,
                    explanation: "This is incorrect. The speed limit is lower than 25 mph.",
                },
                {
                    id: "c",
                    text: "35 mph",
                    isCorrect: false,
                    explanation: "This is incorrect. This is too fast for a school zone.",
                },
                {
                    id: "d",
                    text: "45 mph",
                    isCorrect: false,
                    explanation: "This is incorrect. This speed would be dangerous in a school zone.",
                },
            ],
        },
    ]

    // Timer effect
    useEffect(() => {
        // Reset timer when moving to a new question
        setTimeRemaining(30)
        setTimerColor("text-slate-700")

        // Only start timer if not paused and quiz not complete
        if (!isPaused && !quizComplete && !isAnswerSelected) {
            const timer = setInterval(() => {
                setTimeRemaining((prev) => {
                    // Update timer color based on time remaining
                    if (prev <= 10) setTimerColor("text-rose-600")
                    else if (prev <= 20) setTimerColor("text-amber-500")

                    // Auto-select incorrect if time runs out
                    if (prev <= 1) {
                        handleTimeOut()
                        return 0
                    }
                    return prev - 1
                })
            }, 1000)

            return () => clearInterval(timer)
        }
    }, [currentQuestionIndex, isPaused, quizComplete, isAnswerSelected])

    // Function to handle time out
    const handleTimeOut = () => {
        if (isAnswerSelected) return

        const currentQuestion = questions[currentQuestionIndex]

        // Update score (count as incorrect)
        setScore((prev) => ({
            ...prev,
            incorrect: prev.incorrect + 1,
        }))

        // Store as timeout answer
        const newUserAnswers = [...userAnswers]
        newUserAnswers[currentQuestionIndex] = {
            questionId: currentQuestion.id,
            selectedOption: "timeout",
            isCorrect: false,
        }
        setUserAnswers(newUserAnswers)
        setIsAnswerSelected(true)

        // Show feedback
        setTimeout(() => {
            setShowFeedback(true)
        }, 300)
    }

    // Function to handle answer selection
    const handleAnswerSelect = (optionId) => {
        if (isAnswerSelected) return

        const currentQuestion = questions[currentQuestionIndex]
        const selectedOption = currentQuestion.options.find((opt) => opt.id === optionId)
        const isCorrect = selectedOption.isCorrect

        // Update score
        setScore((prev) => ({
            correct: isCorrect ? prev.correct + 1 : prev.correct,
            incorrect: !isCorrect ? prev.incorrect + 1 : prev.incorrect,
        }))

        // Store user's answer
        const newUserAnswers = [...userAnswers]
        newUserAnswers[currentQuestionIndex] = {
            questionId: currentQuestion.id,
            selectedOption: optionId,
            isCorrect,
        }
        setUserAnswers(newUserAnswers)
        setIsAnswerSelected(true)

        // Show feedback with a slight delay
        setTimeout(() => {
            setShowFeedback(true)
        }, 300)

        // Play confetti animation if correct
        if (isCorrect) {
            setShowConfetti(true)
            setTimeout(() => setShowConfetti(false), 3000)
        }
    }

    // Function to move to the next question
    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setShowFeedback(false)
            setIsAnswerSelected(false)
            setHoveredOption(null)

            // Delay to allow exit animation
            setTimeout(() => {
                setCurrentQuestionIndex((prev) => prev + 1)
            }, 300)
        } else {
            // Quiz complete
            setQuizComplete(true)
        }
    }

    // Function to restart the quiz
    const restartQuiz = () => {
        setCurrentQuestionIndex(0)
        setScore({ correct: 0, incorrect: 0 })
        setUserAnswers([])
        setIsAnswerSelected(false)
        setShowFeedback(false)
        setQuizComplete(false)
        setTimeRemaining(30)
        setIsPaused(false)
    }

    // Function to toggle timer pause
    const togglePause = () => {
        setIsPaused(!isPaused)
    }

    // Current question data
    const currentQuestion = questions[currentQuestionIndex]
    const currentUserAnswer = userAnswers[currentQuestionIndex]

    // Calculate progress percentage
    const progressPercentage = ((currentQuestionIndex + (isAnswerSelected ? 1 : 0)) / questions.length) * 100

    // Calculate pass status
    const totalAnswered = score.correct + score.incorrect
    const scorePercentage = totalAnswered > 0 ? (score.correct / totalAnswered) * 100 : 0
    const isPassing = scorePercentage >= 80
    const maxMistakesAllowed = Math.floor(questions.length * 0.2) // 80% pass rate means 20% mistakes allowed
    const mistakesRemaining = maxMistakesAllowed - score.incorrect

    // Format time for display
    const formatTime = (seconds) => {
        return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`
    }

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8 relative">
            {/* Background animation */}
            <div className="absolute inset-0 z-0 opacity-5">
                <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl animate-blob"></div>
                <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            {/* Confetti animation */}
            <Confetti active={showConfetti} />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Quiz Complete View */}
                {quizComplete ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-xl shadow-lg border border-slate-100 p-8 max-w-2xl mx-auto text-center"
                    >
                        <div className="mb-6">
                            {isPassing ? (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                    className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4"
                                >
                                    <CheckCircle className="h-12 w-12 text-emerald-500" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                    className="w-24 h-24 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4"
                                >
                                    <XCircle className="h-12 w-12 text-rose-500" />
                                </motion.div>
                            )}

                            <h2 className="text-3xl font-bold mb-2">
                                {isPassing ? "Quiz Passed!" : "Quiz Failed"}
                            </h2>
                            <p className="text-slate-600 mb-6">
                                You scored {score.correct} out of {questions.length} questions correctly.
                            </p>

                            <div className="h-8 w-full bg-slate-100 rounded-full overflow-hidden mb-8">
                                <motion.div
                                    className={`h-full flex items-center justify-end pr-2 ${isPassing ? "bg-emerald-500" : "bg-rose-500"}`}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${scorePercentage}%` }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                >
                                    {scorePercentage > 15 && (
                                        <span className="text-xs font-medium text-white">{Math.round(scorePercentage)}%</span>
                                    )}
                                </motion.div>
                            </div>

                            <motion.button
                                onClick={restartQuiz}
                                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-lg mx-auto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Refresh className="h-5 w-5" />
                                Try Again
                            </motion.button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col md:flex-row gap-6"
                    >
                        {/* Progress section (left side) */}
                        <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 w-full md:w-1/3 h-fit">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Activity className="h-5 w-5 text-emerald-500" />
                                Your Progress
                            </h2>

                            {/* Timer section */}
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Clock className={`h-5 w-5 ${timerColor}`} />
                                    <motion.span
                                        className={`text-xl font-mono font-bold ${timerColor}`}
                                        key={timeRemaining}
                                        initial={{ scale: 1 }}
                                        animate={{
                                            scale: timeRemaining <= 5 && !isAnswerSelected ? [1, 1.2, 1] : 1
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {formatTime(timeRemaining)}
                                    </motion.span>
                                </div>
                                <motion.button
                                    onClick={togglePause}
                                    className={`px-3 py-1 rounded-full text-xs font-medium ${isPaused ? "bg-rose-100 text-rose-600" : "bg-slate-100 text-slate-600"}`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {isPaused ? "Resume" : "Pause"}
                                </motion.button>
                            </div>

                            {/* Progress bar */}
                            <div className="mb-6">
                                <div className="flex justify-between text-sm text-slate-500 mb-2">
                                    <span>
                                        Question {currentQuestionIndex + 1} of {questions.length}
                                    </span>
                                    <span>{Math.round(progressPercentage)}% Complete</span>
                                </div>
                                <Progress value={progressPercentage} className="h-2" />
                            </div>

                            {/* Question number grid */}
                            <div className="grid grid-cols-4 gap-2 mb-6">
                                {questions.map((_, index) => {
                                    const questionNum = index + 1
                                    const userAnswer = userAnswers[index]
                                    let bgColor = "bg-slate-100" // Default unvisited
                                    let textColor = "text-slate-600"
                                    let borderColor = "border-transparent"
                                    let icon = null

                                    if (index === currentQuestionIndex) {
                                        bgColor = "bg-emerald-50"
                                        textColor = "text-emerald-600"
                                        borderColor = "border-emerald-200"
                                    } else if (userAnswer) {
                                        if (userAnswer.isCorrect) {
                                            bgColor = "bg-emerald-50"
                                            textColor = "text-emerald-600"
                                            icon = <CheckCircle className="h-3 w-3" />
                                        } else {
                                            bgColor = "bg-rose-50"
                                            textColor = "text-rose-600"
                                            icon = <XCircle className="h-3 w-3" />
                                        }
                                    }

                                    return (
                                        <motion.div
                                            key={questionNum}
                                            className={`h-10 w-full flex items-center justify-center rounded-md text-sm ${bgColor} ${textColor} border ${borderColor}`}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <span>{questionNum}</span>
                                            {icon && <span className="ml-1">{icon}</span>}
                                        </motion.div>
                                    )
                                })}
                            </div>

                            {/* Score section */}
                            <div className="mb-6">
                                <div className="flex justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                                        <span className="text-sm font-medium">{score.correct} Correct</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="h-3 w-3 rounded-full bg-rose-500"></div>
                                        <span className="text-sm font-medium">{score.incorrect} Incorrect</span>
                                    </div>
                                </div>

                                {/* Score visualization */}
                                <div className="h-8 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-emerald-500 flex items-center justify-end pr-2"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${scorePercentage}%` }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {scorePercentage > 15 && (
                                            <span className="text-xs font-medium text-white">{Math.round(scorePercentage)}%</span>
                                        )}
                                    </motion.div>
                                </div>
                            </div>

                            {/* Pass criteria */}
                            <div className="bg-slate-50 rounded-lg p-4 mb-4">
                                <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
                                    <Award className="h-4 w-4 text-amber-500" />
                                    Pass Criteria
                                </h3>
                                <div className="text-sm text-slate-600 space-y-2">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-slate-400" />
                                        <span>{maxMistakesAllowed} mistakes allowed to pass</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-slate-400" />
                                        <span>Pass mark: 80%</span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <AlertCircle className={`h-4 w-4 ${mistakesRemaining >= 0 ? "text-emerald-500" : "text-rose-500"}`} />
                                        <span className={mistakesRemaining >= 0 ? "text-emerald-600" : "text-rose-600"}>
                                            {mistakesRemaining >= 0
                                                ? `${mistakesRemaining} mistakes remaining`
                                                : `Exceeded by ${Math.abs(mistakesRemaining)} mistakes`}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Challenge bank section */}
                            <div className="flex items-center justify-between border-t pt-4">
                                <div className="flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-slate-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-slate-600">Challenge Bank™</span>
                                </div>
                                <motion.span
                                    className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-sm font-medium"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    1
                                </motion.span>
                            </div>
                        </div>

                        {/* Quiz content (right side) */}
                        <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 w-full md:w-2/3 relative">
                            {/* Question display */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentQuestionIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                                Question {currentQuestion.id} of {questions.length}
                                            </span>
                                            {/* Time warning badge */}
                                            {timeRemaining <= 10 && !isAnswerSelected && (
                                                <motion.span
                                                    className="bg-rose-100 text-rose-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1"
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ type: "spring", stiffness: 500, damping: 10 }}
                                                >
                                                    <Clock className="h-3 w-3" />
                                                    Time running out!
                                                </motion.span>
                                            )}
                                        </div>
                                        <h2 className="text-2xl font-bold mb-4">{currentQuestion.question}</h2>

                                        {/* Display image if available */}
                                        {currentQuestion.image && (
                                            <motion.div
                                                className="mt-4 mb-6 overflow-hidden rounded-lg"
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                            >
                                                <img
                                                    src={currentQuestion.image || "/placeholder.svg"}
                                                    alt="Question visual"
                                                    className="w-full object-cover rounded-lg shadow-sm"
                                                />
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Answer options */}
                                    <div className="space-y-4 mb-8">
                                        {currentQuestion.options.map((option, index) => {
                                            const isSelected = currentUserAnswer && currentUserAnswer.selectedOption === option.id
                                            const isHovered = hoveredOption === option.id
                                            let optionClass = "flex items-center gap-3 p-4 rounded-lg border border-slate-200 transition-all duration-200"

                                            if (isHovered && !currentUserAnswer) {
                                                optionClass += " border-emerald-200 bg-emerald-50"
                                            } else if (!currentUserAnswer) {
                                                optionClass += " hover:border-emerald-200 hover:bg-emerald-50"
                                            }

                                            let circleClass = "flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center"
                                            const checkmarkContent = option.id.toUpperCase()
                                            let textClass = "font-medium"

                                            if (currentUserAnswer) {
                                                // If an answer is selected
                                                if (option.isCorrect) {
                                                    optionClass = "flex items-center gap-3 p-4 rounded-lg border-2 border-emerald-500 bg-emerald-50"
                                                    circleClass += " bg-emerald-500 text-white"
                                                    textClass += " text-emerald-700"
                                                } else if (isSelected && !option.isCorrect) {
                                                    optionClass = "flex items-center gap-3 p-4 rounded-lg border-2 border-rose-500 bg-rose-50"
                                                    circleClass += " bg-rose-500 text-white"
                                                    textClass += " text-rose-700"
                                                } else {
                                                    circleClass += " bg-white border border-slate-300 text-slate-500"
                                                }
                                            } else {
                                                circleClass += " bg-white border border-slate-300 text-slate-500"
                                            }

                                            return (
                                                <motion.div
                                                    key={option.id}
                                                    className={optionClass}
                                                    onClick={() => handleAnswerSelect(option.id)}
                                                    onMouseEnter={() => setHoveredOption(option.id)}
                                                    onMouseLeave={() => setHoveredOption(null)}
                                                    style={{ cursor: currentUserAnswer ? "default" : "pointer" }}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3, delay: 0.1 * index }}
                                                    whileHover={!currentUserAnswer ? { scale: 1.01 } : {}}
                                                >
                                                    <span className={circleClass}>{checkmarkContent}</span>
                                                    <div className="flex-1">
                                                        <p className={textClass}>{option.text}</p>

                                                        {/* Explanation with animation */}
                                                        <AnimatePresence>
                                                            {showFeedback && currentUserAnswer && (isSelected || option.isCorrect) && (
                                                                <motion.p
                                                                    className={`text-sm mt-2 ${option.isCorrect ? "text-emerald-600" : "text-rose-600"}`}
                                                                    initial={{ opacity: 0, height: 0 }}
                                                                    animate={{ opacity: 1, height: "auto" }}
                                                                    exit={{ opacity: 0, height: 0 }}
                                                                    transition={{ duration: 0.3 }}
                                                                >
                                                                    {option.explanation}
                                                                </motion.p>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>

                                                    {/* Show result icon */}
                                                    {currentUserAnswer && (
                                                        <motion.div
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: 1 }}
                                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                        >
                                                            {option.isCorrect ? (
                                                                <CheckCircle className="h-6 w-6 text-emerald-500" />
                                                            ) : isSelected ? (
                                                                <XCircle className="h-6 w-6 text-rose-500" />
                                                            ) : null}
                                                        </motion.div>
                                                    )}
                                                </motion.div>
                                            )
                                        })}

                                        {/* Time out message */}
                                        {currentUserAnswer && currentUserAnswer.selectedOption === "timeout" && (
                                            <motion.div
                                                className="flex items-center gap-3 p-4 rounded-lg border-2 border-amber-500 bg-amber-50"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <AlertCircle className="h-6 w-6 text-amber-500" />
                                                <div className="flex-1">
                                                    <p className="font-medium text-amber-700">Time's up!</p>
                                                    <p className="text-sm text-amber-600 mt-1">
                                                        You ran out of time. The correct answer has been highlighted above.
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Help and next button */}
                                    <div className="flex items-center justify-between mt-6">
                                        <motion.button
                                            className="flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <HelpCircle className="h-5 w-5" />
                                            <span className="text-sm font-medium">Get a hint</span>
                                        </motion.button>

                                        {isAnswerSelected && (
                                            <motion.button
                                                onClick={handleNextQuestion}
                                                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-lg"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3 }}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {currentQuestionIndex < questions.length - 1 ? (
                                                    <>
                                                        Next Question
                                                        <ChevronRight className="h-5 w-5" />
                                                    </>
                                                ) : (
                                                    "See Results"
                                                )}
                                            </motion.button>
                                        )}
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* New Feature: Question Timer Circle */}
                            <motion.div
                                className="absolute top-6 right-6"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                            >
                                <div className="relative w-16 h-16">
                                    <svg className="w-full h-full" viewBox="0 0 36 36">
                                        {/* Background circle */}
                                        <circle
                                            cx="18" cy="18" r="16"
                                            fill="none"
                                            stroke="#e2e8f0"
                                            strokeWidth="2"
                                        />

                                        {/* Timer progress circle */}
                                        <motion.circle
                                            cx="18" cy="18" r="16"
                                            fill="none"
                                            stroke={
                                                timeRemaining > 20 ? "#10b981" :
                                                    timeRemaining > 10 ? "#f59e0b" :
                                                        "#ef4444"
                                            }
                                            strokeWidth="2"
                                            strokeDasharray="100"
                                            strokeDashoffset={100 - ((timeRemaining / 30) * 100)}
                                            strokeLinecap="round"
                                            transform="rotate(-90 18 18)"
                                            initial={{ strokeDashoffset: 0 }}
                                            animate={{ strokeDashoffset: 100 - ((timeRemaining / 30) * 100) }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.span
                                            className={`text-lg font-bold ${timeRemaining > 20 ? "text-emerald-500" :
                                                timeRemaining > 10 ? "text-amber-500" :
                                                    "text-rose-500"
                                                }`}
                                            key={timeRemaining}
                                            initial={{ scale: 1 }}
                                            animate={{
                                                scale: timeRemaining <= 5 && !isAnswerSelected ? [1, 1.3, 1] : 1
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {timeRemaining}
                                        </motion.span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Animated background patterns */}
                            <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
                                <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 10L50 10L50 50L10 50Z" fill="currentColor" />
                                    <path d="M60 10L100 10L100 50L60 50Z" fill="currentColor" />
                                    <path d="M10 60L50 60L50 100L10 100Z" fill="currentColor" />
                                    <path d="M60 60L100 60L100 100L60 100Z" fill="currentColor" />
                                    <path d="M110 10L150 10L150 50L110 50Z" fill="currentColor" />
                                    <path d="M110 60L150 60L150 100L110 100Z" fill="currentColor" />
                                    <path d="M10 110L50 110L50 150L10 150Z" fill="currentColor" />
                                    <path d="M60 110L100 110L100 150L60 150Z" fill="currentColor" />
                                    <path d="M110 110L150 110L150 150L110 150Z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Quick help floating button */}
                <motion.button
                    className="fixed bottom-8 right-8 bg-white shadow-lg rounded-full p-3 flex items-center justify-center text-slate-600 hover:text-emerald-500 transition-colors"
                    whileHover={{ scale: 1.1, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                    whileTap={{ scale: 0.95 }}
                >
                    <HelpCircle className="h-6 w-6" />
                </motion.button>

                {/* Global CSS */}
                <style jsx global>{`
                @keyframes confettiFall {
                    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
                }
                
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                
                .animate-blob {
                    animation: blob 7s infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
            </div>
        </div>
    )
}