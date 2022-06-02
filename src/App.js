import "./App.css";

import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Navigation from "./Layouts/Navigation";
import Content from "./Layouts/Content";
import Footer from "./Layouts/Footer";

function App() {
  return (
      <Router>
        <Navigation />
        <Content />
      </Router>
  );
}

export default App;
