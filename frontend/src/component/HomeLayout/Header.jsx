import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Header = () => {
  // State to track which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  // Sample dropdown content
  const dropdownContent = {
    resources: [
      { name: "Documentation", to: "/docs" },
      { name: "Guides", to: "/guides" },
      { name: "API Reference", to: "/api-reference" },
    ],
    blog: [
      { name: "Latest Posts", to: "/blog/latest" },
      { name: "Categories", to: "/blog/categories" },
      { name: "Featured", to: "/blog/featured" },
    ],
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 4L4 8L8 12L12 8L8 4Z" fill="#4CAF50" />
              <path d="M16 4L12 8L16 12L20 8L16 4Z" fill="white" stroke="#333" strokeWidth="1" />
              <path d="M8 12L4 16L8 20L12 16L8 12Z" fill="white" stroke="#333" strokeWidth="1" />
              <path d="M16 12L12 16L16 20L20 16L16 12Z" fill="#4CAF50" />
            </svg>
          </div>
          <span className="font-bold text-gray-800 text-lg">Nexcent</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 text-sm hover:text-green-600 transition-colors">
            Home
          </Link>

          <Link href="/about" className="text-gray-700 text-sm hover:text-green-600 transition-colors">
            About
          </Link>

          <a href="/contact" className="text-gray-700 text-sm hover:text-green-600 transition-colors">
            Contact Us
          </a>
  
          {/* Blog Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setOpenDropdown("blog")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center space-x-1 text-gray-700 text-sm hover:text-green-600 transition-colors cursor-pointer">
              <span>Blog</span>
              <ChevronDown
                size={16}
                className={`text-gray-500 transition-transform duration-300 group-hover:transform group-hover:rotate-180`}
              />
            </div>
            <div
              className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 transition-all duration-300 ease-in-out ${
                openDropdown === "blog"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {dropdownContent.blog.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

              {/* Blog Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setOpenDropdown("resources")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center space-x-1 text-gray-700 text-sm hover:text-green-600 transition-colors cursor-pointer">
              <span>Resources</span>
              <ChevronDown
                size={16}
                className={`text-gray-500 transition-transform duration-300 group-hover:transform group-hover:rotate-180`}
              />
            </div>
            <div
              className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 transition-all duration-300 ease-in-out ${
                openDropdown === "resources"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {dropdownContent.resources.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Authentication button */}
        <div className="flex items-center">
          <a
            href="#"
            className="text-sm text-white font-medium px-4 py-2 bg-green-600 rounded-md hover:bg-green-700 transition duration-300"
          >
            Register Now →
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
