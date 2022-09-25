import React from "react";

import { Section } from ".././styles/Sections.styled";
import {
  
  MembershipChoose,

} from "../styles/Membership.styled";
import {
  SectionDescription,
  SectionTitle,
} from "../styles/SectionHeaders.styled";


const Membership = () => {
  const [annualy, setAnually] = React.useState(false);

 

  return (
    <Section id="memberships">
      <SectionTitle>BECOME MEMBER</SectionTitle>
      <SectionDescription>
        We offer a range of membership options designed to help you reach your
        fitness goals, with an emphasis on individual programs.
      </SectionDescription>
      <MembershipChoose>
        
        
       
      </MembershipChoose>
      
    </Section>
  );
};

export default Membership;
