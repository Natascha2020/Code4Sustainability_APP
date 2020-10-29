import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import NavFooter from "./Components/NavFooter";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import About from "./Components/About";
import Home from "./Components/Home";
import GitHub from "./Components/GitHub";
import HowItWorks from "./Components/HowItWorks";
import ProjectOverview from "./Components/ProjectOverview";
import ProjectDetails from "./Components/ProjectDetails";
import PersonalData2 from "./Components/Profile/PersonalData2";
import ProfileDev from "./Components/Profile/ProfileDev";
import ProfileProject from "./Components/Profile/ProfileProject";
import MatchesPending from "./Components/MatchesPending";
import MatchesAccepted from "./Components/MatchesAccepted";
import Authenticated from "./Components/Authenticated";
import MainChat from "./Components/Chat/MainChat";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grommet } from "grommet";
import Theme from "./Helpers/Theme";
import "./App.css";

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Grommet theme={Theme}>
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
            <Authenticated WrappedComponent={ProjectDetails} {...props} />
          </Route>

          <Route exact path="/signUp">
            <SignUp />
          </Route>

          <Route exact path="/gitHub">
            <GitHub />
          </Route>

          <Route exact path="/chat">
            <MainChat />
          </Route>

          <Route exact path="/logIn">
            <LogIn />
          </Route>

          <Route exact path="/personalData">
            <Authenticated WrappedComponent={PersonalData2} {...props} />
          </Route>

          <Route exact path="/profileDev">
            <Authenticated WrappedComponent={ProfileDev} {...props} />
          </Route>

          <Route exact path="/profileProject">
            <Authenticated WrappedComponent={ProfileProject} {...props} />
          </Route>

          <Route exact path="/matchesPending">
            {/*  <Authenticated WrappedComponent={MatchesPending} {...props} /> */}
            <MatchesPending />
          </Route>

          <Route exact path="/matchesAccepted">
            <Authenticated WrappedComponent={MatchesAccepted} {...props} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Navbar />

          <NavFooter />
        </Grommet>
      </Switch>
    </Router>
  );
};

export default App;
