const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Configure storage engine with dynamic destination and filename
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Base uploads folder
    let folder = path.join(__dirname, "../", "uploads");
    // Decide subfolder based on the field name or file type.
    if (file.fieldname === "questionImage") {
      folder = path.join(folder, "assignments", "file");
    }


    // Ensure that the folder exists (create it if not)
    fs.mkdirSync(folder, { recursive: true });

    cb(null, folder);
  },
  filename: (req, file, cb) => {
    // Create a unique filename: fieldname-timestamp-random.ext
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

// Initialize multer
const upload = multer({ storage });

module.exports = upload;
