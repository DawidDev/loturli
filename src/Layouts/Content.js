import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "../Pages/Home";
import Offer from "../Pages/Offer";
import Promotion from "../Pages/Promotion";
import LastMinute from "../Pages/LastMinute"
import NotFound from "../Pages/NotFound";


// Render contend based on link from React-Router-Dom
const Content = () => {
  return (
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/lastminute" element={<LastMinute />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
  );
};

export default Content;
