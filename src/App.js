import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import NavFooter from "./Components/Footer/NavFooter";
import SignUp from "./Components/Authenticate/SignUp";
import LogIn from "./Components/Authenticate/LogIn";
import About from "./Components/LandingPage/About";
import Home from "./Components/LandingPage/Home";
import GitHub from "./Components/Footer/GitHub";
import HowItWorks from "./Components/LandingPage/HowItWorks";
import ProjectOverview from "./Components/ProjectList/ProjectOverview";
import ProjectDetails from "./Components/ProjectList/ProjectDetails";
import PersonalData from "./Components/Profile/PersonalData";
import ProfileDev from "./Components/Profile/ProfileDev";
import ProfileProject from "./Components/Profile/ProfileProject";
import MatchesPending from "./Components/Matches/MatchesPending";
import MatchesAccepted from "./Components/Matches/MatchesAccepted";
import Authenticated from "./Components/Authenticate/Authenticated";
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

          {/* <Route exact path="/projectDetails">
            <Authenticated WrappedComponent={ProjectDetails} {...props} />
          </Route> */}

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
            <Authenticated WrappedComponent={PersonalData} withRedirect={true} {...props} />
          </Route>

          <Route exact path="/profileDev">
            <Authenticated WrappedComponent={ProfileDev} withRedirect={true} {...props} />
          </Route>

          <Route exact path="/profileProject">
            <Authenticated WrappedComponent={ProfileProject} withRedirect={true} {...props} />
          </Route>

          <Route exact path="/matchesPending">
            <Authenticated WrappedComponent={MatchesPending} withRedirect={true} {...props} />
          </Route>

          <Route exact path="/matchesAccepted">
            <Authenticated WrappedComponent={MatchesAccepted} withRedirect={true} {...props} />
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
