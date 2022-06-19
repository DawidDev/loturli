import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import styled from "styled-components";

import Home from "../Pages/Home";
import Offer from "../Pages/Offer";
import Promotion from "../Pages/Promotion";
import LastMinute from "../Pages/LastMinute"
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFound from "../Pages/NotFound";

import Trip from "../Components/ThisOfferPage/Trip";
import Reservation from "../Components/Reservation/Reservation";

const ContentContainer = styled.div`
  padding-top: 70px;

  @media (max-width: 768px) {
    padding-top: 50px; // Height navbar when display is <= 768px
  }
`



// Render contend based on link from React-Router-Dom
const Content = () => {
  return (
    <ContentContainer>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/offer/:id" element={<Trip />} />
        <Route path="/offer/reservation/:id/:numberBook" element={<Reservation />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/lastminute" element={<LastMinute />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </ContentContainer>
  );
};

export default Content;
