import React from "react";
import styled from "styled-components";
import YellowPoint from "#/components/YellowPoint";

import { BOLD_TEXT } from "#/constants";

const StyledExperienceTitle = styled.h1`
  font-size: 70px;
  font-family: ${BOLD_TEXT};
  margin: 0;
`;

const Divide = styled.div`
  height: 6.5px;
  margin-top: 30px;
  background-color: #f8cd07;
`;

const ExperienceTitle = ({ title }) => {
  return (
    <StyledExperienceTitle id={title}>
      {title}
      <YellowPoint>.</YellowPoint>
      <Divide />
    </StyledExperienceTitle>
  );
};

export default ExperienceTitle;
