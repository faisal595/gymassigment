import React from "react";
import {
  
  CardImage,
  CardImg,
  SectionCardDetails,
  SectionCardTitle,

  StyledCard,
  SubTitle,
} from "../styles/Card.styled";
import { HiOutlineArrowNarrowRight as Arrow } from "react-icons/hi";

export const AboutCard = ({ img, title, subTitle, details, imgStart }) => {
  return (
    <StyledCard imgStart={imgStart}>
      <CardImage imgStart={imgStart}>
        <CardImg src={img} alt={title} />
      </CardImage>
      
        <SubTitle>{subTitle}</SubTitle>
        <SectionCardTitle>{title}</SectionCardTitle>
        <SectionCardDetails>{details}</SectionCardDetails>
        
           <Arrow />
        

    </StyledCard>
  );
};

export default AboutCard;
