import React from "react";

import styled from "styled-components";

const TitleSectionContainer = styled.div`
  font-size: 1.5rem;
  letter-spacing: 2px;
  color: #3C3C3C;
  max-width: 1400px;
  margin: 10px auto;
  padding-left: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TitleSection = ({ title }) => {
  return (
    <TitleSectionContainer>
      <div>{title}</div>
    </TitleSectionContainer>
  );
};

export default TitleSection;
