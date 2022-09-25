import React from "react";
import {
  SectionDescription,
  SectionTitle,
} from "../styles/SectionHeaders.styled";
import { Section } from "../styles/Sections.styled";
import {
  
  TestimonialDetails,
  
  TestimonialQuoteIcon,
  
  TestimonialSection,
  
  
} from "../styles/Testimonials.styed";




const Testimonials = () => {
  const iconStyle = {
    color: "#fff",
    size: "1.25rem",
  };

  return (
    <Section id="testimonials">
      <TestimonialSection>
        <TestimonialDetails>
          <SectionTitle textDefault={true}>testimonials</SectionTitle>
          <SectionDescription textDefault={true}>
            Here are various testimonials from some of our members spread all
            over the world.
          </SectionDescription>
         </TestimonialDetails>
       
            <TestimonialQuoteIcon />
            </TestimonialSection>
    </Section>
  );
};

export default Testimonials;
