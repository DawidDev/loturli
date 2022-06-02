import React from "react";

import styled from "styled-components";

const TitleSectionContainer = styled.div`
  font-size: 1.5rem;
  letter-spacing: 2px;
  margin-bottom: 10px;
  color: #3C3C3C;
`;

const TitleSection = ({ title }) => {
  return (
    <TitleSectionContainer>
      <div>{title}</div>
    </TitleSectionContainer>
  );
};

export default TitleSection;
