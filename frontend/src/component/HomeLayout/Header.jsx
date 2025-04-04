import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Header = () => {
  // State to track which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  // Sample dropdown content
  const dropdownContent = {
    products: [
      { name: "Product 1", to: "/product-1" },
      { name: "Product 2", to: "/product-2" },
      { name: "Product 3", to: "/product-3" },
    ],
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
          <div className="h-6 w-6 bg-black rounded-md flex items-center justify-center">
            <div className="h-2 w-2 bg-white rounded-sm"></div>
          </div>
          <span className="font-medium text-gray-900">Untitled UI</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-900 text-sm font-medium">
            Home
          </Link>

          <Link to="/about" className="text-gray-900 text-sm font-medium">
            About
          </Link>

          <Link to="/contact" className="text-gray-900 text-sm font-medium">
            Contact
          </Link>

          <Link to="/pricing" className="text-gray-900 text-sm font-medium">
            Pricing
          </Link>

          {/* Blog Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setOpenDropdown("blog")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center space-x-1 text-gray-900 text-sm font-medium cursor-pointer">
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
        </nav>

        {/* Authentication buttons */}
        <div className="flex items-center space-x-2">
          <Link
            to="/login"
            className="text-sm text-gray-700 font-medium px-4 py-2 rounded-md hover:bg-gray-50 transition duration-300"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="text-sm text-white font-medium px-4 py-2 bg-gray-900 rounded-md hover:bg-gray-800 transition duration-300"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
