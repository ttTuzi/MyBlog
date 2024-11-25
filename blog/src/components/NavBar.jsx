import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { motion } from "framer-motion";

import logo from "../assets/myLogo2.png";
import linkedinLogo from "../assets/linkedinLogo.png";
import githubLogo from "../assets/githubLogo.png";

const NavBar = () => {
  return (
    <Navbar shouldHideOnScroll height={60}>
      <NavbarContent justify="start" className="gap-2">
        <NavbarItem>
          <Link href="/MyBlog">
            <img src={logo} style={{ height: "60px", width: "auto" }} />
          </Link>
        </NavbarItem>
        <Link href="/MyBlog">
          <NavbarItem className="text-3xl">WeiQaQ</NavbarItem>
        </Link>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link href="about" className="text-2xl">
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-2xl">
            My Project
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-2xl">
            Game
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-2xl">
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
            style={{ display: "inline-block" }} // ensures scaling affects only the image and link
          >
            <img
              src={githubLogo}
              alt="LinkedIn Profile"
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
            style={{ display: "inline-block" }} // ensures scaling affects only the image and link
          >
            <img
              src={linkedinLogo}
              alt="LinkedIn Profile"
              style={{ height: "30px", width: "auto" }}
            />
          </motion.a>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
