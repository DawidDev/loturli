import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import styled from "styled-components";

import Home from "../Pages/Home";
import Offer from "../Pages/Offer";
import Promotion from "../Pages/Promotion";
import LastMinute from "../Pages/LastMinute"
import NotFound from "../Pages/NotFound";

const ContentContainer = styled.div`
  @media (max-width: 768px) {
    //padding-top: 80px; // Height navbar when display is <= 768px
  }
`



// Render contend based on link from React-Router-Dom
const Content = () => {
  return (
    <ContentContainer>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/lastminute" element={<LastMinute />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </ContentContainer>
  );
};

export default Content;
