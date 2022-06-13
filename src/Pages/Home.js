import React from "react";
import styled from "styled-components";

// Import additional components to display
import TitleSection from "../Components//Home_page/TitleSection"
import Incentive from "../Components/Home_page/Incentive";
import Search from "../Components/Home_page/Search";
import GuideBar from "../Components/Home_page/GuideBar";
import Recommended from "../Components/Home_page/Recommended";
import PopularDestinations from "../Components/Home_page/PopularDestinations";
import BlogIncentive from "../Components/Home_page/BlogIncentive";
import NewsLetter from "../Components/Home_page/NewsLetter";

const HomeContainer = styled.div`
  //border: 1px solid red;
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
    <HomeContainer>
      <TitleSection title={'Sprawdź nasz blog'}></TitleSection>
      <BlogIncentive />
    </HomeContainer>
    <NewsLetter />
    </>
   
  );
};

export default Home;
