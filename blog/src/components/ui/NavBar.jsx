import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import logo from "../../assets/myLogo2.png";

const NavBar = () => {
  return (
    <Navbar shouldHideOnScroll height={60}>
      <NavbarContent justify="start" className="gap-2">
        <NavbarItem>
          <img src={logo} style={{ height: "60px", width: "auto" }} />
        </NavbarItem>
        <NavbarItem className="text-3xl">WeiQaQ</NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link href="#" className="text-2xl">
            Features
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
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
