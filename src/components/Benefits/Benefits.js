import React from "react";
import {
  Benefit,
  BenefitsImg,
  BenefitsList,
  CheckIcon,
  SectionBenefits,
  BenefitsDetails,
  
} from "../styles/Benefits.styled";
import {
  SectionDescription,
  SectionTitle,
} from "../styles/SectionHeaders.styled";
import { Section } from "../styles/Sections.styled";
import { benefitsData } from "../../benefitsData";
import BenefitImg from "../../assets/benefits-img.png";

const Benefits = () => {
  return (
    <Section>
      <SectionBenefits>
        <BenefitsDetails>
          <SectionTitle textDefault={true}>the benefits</SectionTitle>
          <SectionDescription textDefault={true}>
            Our specialists are very prepared and fit the bill to furnish you
            with shape centered alterations that will push you as far as
            possible without bargaining your security.
          </SectionDescription>
    
            {benefitsData.map((benefit) => {
              return (
                <BenefitsList key={benefit.id}>
                  <CheckIcon />
                  <Benefit>{benefit.benefit} </Benefit>
                </BenefitsList>
              );
            })}
          
        </BenefitsDetails>
        
          
            
          
        
      </SectionBenefits>
    </Section>
  );
};

export default Benefits;
