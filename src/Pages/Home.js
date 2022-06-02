import React from "react";
import styled from "styled-components";

// Import home page components to display
import Incentive from "../Components/Incentive";
import Search from "../Components/Search";

const HomeContainer = styled.div`
  //border: 1px solid red;
  max-width: 1400px;
   margin: 0 auto;
   max-width: 1400px;
   margin: 0 auto;
   padding: 0 10px;

  @media (max-width: 768px) {
      padding: 0 10px;
  }
`;

const Home = () => {
  return (
    <>
    <Search />
    <HomeContainer>
      <Incentive />
    </HomeContainer>
    </>
   
  );
};

export default Home;
