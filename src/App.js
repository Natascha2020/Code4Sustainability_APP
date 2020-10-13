import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignIn from "./Components/SignIn";
import LogIn from "./Components/LogIn";
import About from "./Components/About";
import HowItWorks from "./Components/HowItWorks";
import ProjectOverview from "./Components/ProjectOverview";
import ProfileDev from "./Components/ProfileDev";
import ProfileProject from "./Components/ProfileProject";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Route exact path="/">
        <LogIn />
      </Route>
      <Route exact path="/howItWorks">
        <HowItWorks />
      </Route>
      <Route exact path="/profileDev">
        <ProfileDev />
      </Route>

      <Navbar />
      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/projects">
        <ProjectOverview />
      </Route>
      <Route exact path="/signIn">
        <SignIn />
      </Route>

      <Route exact path="/profileProject">
        <ProfileProject />
      </Route>
    </Router>
  );
};

export default App;
