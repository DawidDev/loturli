import React from "react";

import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div>Nawigacja</div>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/offer">OFFER</NavLink>
      <NavLink to="/promotion">PROMOTION</NavLink>
      <NavLink to="/lastminute">LASTMINUTE</NavLink>
    </>
  );
};

export default Navigation;
