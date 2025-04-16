import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";

import logo from "../assets/myLogo2.png";
import linkedinLogo from "../assets/linkedinLogo.png";
import githubLogo from "../assets/githubLogo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <Navbar shouldHideOnScroll height={60}>
      <NavbarContent justify="start" className="gap-2">
        <NavbarItem>
          <Link to="/MyBlog/">
            <img
              src={logo}
              style={{ height: "60px", width: "auto" }}
              alt="Logo"
            />
          </Link>
        </NavbarItem>
        <Link to="/MyBlog/">
          <NavbarItem className="text-3xl">WeiQaQ</NavbarItem>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link to="/MyBlog/about" className="text-2xl">
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/MyBlog/projects" className="text-2xl">
            My Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="#" className="text-2xl">
            Game
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="#" className="text-2xl">
            Book
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <motion.a
            href="https://github.com/ttTuzi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            style={{ display: "inline-block" }}
          >
            <img
              src={githubLogo}
              alt="GitHub Profile"
              style={{ height: "30px", width: "auto" }}
            />
          </motion.a>
        </NavbarItem>
        <NavbarItem>
          <motion.a
            href="https://www.linkedin.com/in/wei-liang-296413258/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            style={{ display: "inline-block" }}
          >
            <img
              src={linkedinLogo}
              alt="LinkedIn Profile"
              style={{ height: "30px", width: "auto" }}
            />
          </motion.a>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu Button */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md text-foreground hover:bg-accent focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-16 left-0 right-0 bg-background border-b border-border">
          <div className="px-4 py-2 space-y-2">
            <Link
              to="/MyBlog/about"
              className="block text-xl py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Me
            </Link>
            <Link
              to="/MyBlog/projects"
              className="block text-xl py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              My Projects
            </Link>
            <Link
              to="#"
              className="block text-xl py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Game
            </Link>
            <Link
              to="#"
              className="block text-xl py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Book
            </Link>
          </div>
        </div>
      )}
    </Navbar>
  );
};

export default NavBar;
