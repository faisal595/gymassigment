import React from "react";
//import { StyledButton } from "../styles/Button.styled";
import {
 
  
  
  MobileImg,
  
  
  MobileMenuImage,
  
  MobileStyledNav,
} from "../styles/MobileNav.styled";
import Image from "../../assets/program1-img.png";

const MobileNav = ({ isOpen }) => {
  return (
    <MobileStyledNav isOpen={isOpen}>
      
     
      
      <MobileMenuImage>
        <MobileImg src={Image} />
      </MobileMenuImage>
      
    </MobileStyledNav>
  );
};

export default MobileNav;
