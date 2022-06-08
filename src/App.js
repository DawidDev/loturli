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
      <Router basename={process.env.PUBLIC_URL}>
        <Navigation />
        <Content />
        <Footer />
      </Router>
  );
}

export default App;
