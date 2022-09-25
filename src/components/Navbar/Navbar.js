import React, { useState } from "react";
import { StyledButton } from "../styles/Button.styled";
import {
  Logo,
  StyledNavbar,
  Menu,
  NavLists,
  NavList,
  NavLink,
} from "../styles/Navbar.styled";
import MobileNav from "./MobileNavigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileNav isOpen={isOpen} toggleHandler={toggleHandler} />
      <StyledNavbar>
        <Logo>GYM</Logo>
        <Menu onClick={toggleHandler} />
        <NavLists>
          <NavList>
            <NavLink
              to="/"
              smooth={true}
              duration={650}
              delay={0}
              spyThrottle={0}
            >
              Home
            </NavLink>
          </NavList>
          <NavList>
            <NavLink
              to="programs"
              smooth={true}
              duration={650}
              delay={0}
              spyThrottle={0}
            >
              Programs
            </NavLink>
          </NavList>
          <NavList>
            <NavLink
              to="about"
              smooth={true}
              duration={650}
              delay={0}
              spyThrottle={0}
            >
              About Us 
            </NavLink>
          </NavList>
          <NavList>
            <NavLink
              to="memberships"
              smooth={true}
              duration={650}
              delay={0}
              spyThrottle={0}
            >
              Memberships
            </NavLink>
          </NavList>
          <NavList>
            <NavLink
              to="testimonials"
              smooth={true}
              duration={650}
              delay={0}
              spyThrottle={0}
            >
             
            </NavLink>
          </NavList>
          
        </NavLists>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
