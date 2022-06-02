import React from "react";
import styled from "styled-components";

// Import home page components to display
import Incentive from "../Components/Incentive";

const HomeContainer = styled.div`
  //border: 1px solid red;

  @media (max-width: 768px) {
      padding: 0 10px;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <div>Strona główna</div>
      <Incentive />
    </HomeContainer>
  );
};

export default Home;
