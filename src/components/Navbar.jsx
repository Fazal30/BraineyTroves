import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import logo from "../assets/BTC LOGO.png"; // Make sure to save the provided logo image in this path

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Determine if we're on a light background page
  const isLightBackground = location.pathname === "/services" || location.pathname === "/contactus";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = () => {
    setMenu(!menu);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About Us" },
    { path: "/contactus", label: "Contact Us" },
  ];

  // Function to determine text color based on scroll state and background
  const getTextColor = () => {
    if (scrolled) {
      return "text-gray-900";
    }
    return isLightBackground ? "text-gray-900" : "text-white";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : isLightBackground
          ? "bg-white/50 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex flex-row justify-between p-5 md:px-32 px-5">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex flex-col items-center md:flex-row md:items-center cursor-pointer"
        >
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Brainy Troves Logo" 
              className="h-14 w-auto"
            />
          </Link>
        </motion.div>

        <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative group ${
                location.pathname === link.path
                  ? scrolled || isLightBackground ? "text-amber-500" : "text-amber-400"
                  : getTextColor()
              } transition-colors duration-300 hover:text-amber-500`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path ? "w-full" : ""
                }`}
              />
            </Link>
          ))}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Chat on WhatsApp"
            href="https://wa.me/919620996689"
            target="_blank"
            className={`px-6 py-2 border-2 rounded-full font-semibold transition-all duration-300 ${
              scrolled || isLightBackground
                ? "border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white"
                : "border-white text-white hover:bg-white hover:text-gray-900"
            }`}
          >
            Let's Talk
          </motion.a>
        </nav>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden flex items-center cursor-pointer"
        >
          {menu ? (
            <AiOutlineClose
              size={25}
              className={scrolled || isLightBackground ? "text-gray-900" : "text-white"}
              onClick={handleChange}
            />
          ) : (
            <AiOutlineMenuUnfold
              size={25}
              className={scrolled || isLightBackground ? "text-gray-900" : "text-white"}
              onClick={handleChange}
            />
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden flex flex-col absolute bg-white/90 backdrop-blur-sm left-0 w-full py-8 gap-6 border-t border-gray-100 shadow-lg"
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                whileHover={{ x: 10 }}
                className="px-8"
              >
                <Link
                  to={link.path}
                  className={`text-xl font-medium ${
                    location.pathname === link.path
                      ? "text-amber-500"
                      : "text-gray-700"
                  } hover:text-amber-500 transition-colors duration-300`}
                  onClick={() => setMenu(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ x: 10 }}
              className="px-8"
            >
              <a
                href="https://wa.me/919620996689"
                target="_blank"
                className="inline-block px-6 py-2 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white transition-all rounded-full font-semibold"
                onClick={() => setMenu(false)}
              >
                Let's Talk
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
