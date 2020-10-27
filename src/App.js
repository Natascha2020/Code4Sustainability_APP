import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import NavFooter from "./Components/NavFooter";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import About from "./Components/About";
import Home from "./Components/Home";
import Chat from "./Components/Chat";
import GitHub from "./Components/GitHub";
import HowItWorks from "./Components/HowItWorks";
import ProjectOverview from "./Components/ProjectOverview";
import ProjectDetails from "./Components/ProjectDetails";
import PersonalData from "./Components/PersonalData";
import ProfileDev from "./Components/ProfileDev";
import ProfileProject from "./Components/ProfileProject";
import MatchesPending from "./Components/MatchesPending";
import MatchesAccepted from "./Components/MatchesAccepted";
import Authenticated from "./Components/Authenticated";
import { Grommet } from "grommet";
import Theme from "./Helpers/Theme";
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
            {Authenticated(<ProjectDetails />)}
          </Route>

          <Route exact path="/signUp">
            <SignUp />
          </Route>

          <Route exact path="/gitHub">
            <GitHub />
          </Route>

          <Route exact path="/chat">
            <Chat />
          </Route>

          <Route exact path="/logIn">
            <LogIn />
          </Route>

          <Route exact path="/personalData">
            {Authenticated(<PersonalData />)}
          </Route>

          <Route exact path="/profileDev">
            {Authenticated(<ProfileDev />)}
          </Route>

          <Route exact path="/profileProject">
            {Authenticated(<ProfileProject />)}
          </Route>

          <Route exact path="/matchesPending">
            {Authenticated(<MatchesPending />)}
          </Route>

          <Route exact path="/matchesAccepted">
            {Authenticated(<MatchesAccepted />)}
          </Route>
          <Navbar />

          <NavFooter />
        </Grommet>
      </Switch>
    </Router>
  );
};

export default App;
