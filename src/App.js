import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import NavFooter from "./Components/NavFooter";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import About from "./Components/About";
import Home from "./Components/Home";
import HowItWorks from "./Components/HowItWorks";
import ProjectOverview from "./Components/ProjectOverview";
import ProjectDetails from "./Components/ProjectDetails";
import PersonalData from "./Components/PersonalData";
import ProfileDev from "./Components/ProfileDev";
import ProfileProject from "./Components/ProfileProject";
import MatchesPending from "./Components/MatchesPending";
import MatchesAccepted from "./Components/MatchesAccepted";
import { Grommet } from "grommet";
import Theme from "./Components/Theme";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Grommet theme={Theme}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/howItWorks">
            <HowItWorks />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/projects">
            <ProjectOverview />
          </Route>

          <Route exact path="/projectDetails">
            <ProjectDetails />
          </Route>

          <Route exact path="/signUp">
            <SignUp />
          </Route>

          <Route exact path="/logIn">
            <LogIn />
          </Route>

          <Route exact path="/personalData">
            <PersonalData />
          </Route>

          <Route exact path="/profileDev">
            <ProfileDev />
          </Route>

          <Route exact path="/profileProject">
            <ProfileProject />
          </Route>

          <Route exact path="/matchesPending">
            <MatchesPending />
          </Route>

          <Route exact path="/matchesAccepted">
            <MatchesAccepted />
          </Route>
          <Navbar />

          <NavFooter />
        </Grommet>
      </Switch>
    </Router>
  );
};

export default App;
