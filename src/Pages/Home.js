import React from "react";
import styled from "styled-components";

// Import additional components to display
import TitleSection from "../Components/TitleSection"
import Incentive from "../Components/Incentive";
import Search from "../Components/Search";
import GuideBar from "../Components/GuideBar";
import Recommended from "../Components/Recommended";
import PopularDestinations from "../Components/PopularDestinations";


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
      <TitleSection title={'Biuro podróży Loturli'} />
      <Incentive />
      <GuideBar />
      <TitleSection title={'Loturli poleca'} />
      <Recommended />
      <TitleSection title={'Popularne kierunki podróży'} />
    </HomeContainer>
    <PopularDestinations />
    </>
   
  );
};

export default Home;
