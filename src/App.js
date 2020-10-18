import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import NavFooter from "./Components/NavFooter";
import SignIn from "./Components/SignIn";
import LogIn from "./Components/LogIn";
import About from "./Components/About";
import HowItWorks from "./Components/HowItWorks";
import ProjectOverview from "./Components/ProjectOverview";
import ProfileDev from "./Components/ProfileDev";
import ProfileProject from "./Components/ProfileProject";
import { Grommet } from "grommet";
import Theme from "./Components/Theme";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Grommet theme={Theme}>
        <Route exact path="/">
          <LogIn />
        </Route>
        <Route exact path="/howItWorks">
          <HowItWorks />
        </Route>
        <Route exact path="/profileDev">
          <ProfileDev />
        </Route>

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
        <Navbar />
        <NavFooter />
      </Grommet>
    </Router>
  );
};

export default App;
