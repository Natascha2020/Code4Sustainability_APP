import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import NavFooter from "./Components/Footer/NavFooter";
import SignUp from "./Components/Authenticate/SignUp";
import LogIn from "./Components/Authenticate/LogIn";
import About from "./Components/LandingPage/About";
import GitHub from "./Components/Footer/GitHub";
import HowItWorks from "./Components/LandingPage/HowItWorks";
import LandingPage from "./Components/LandingPage/LandingPage";
import ProjectOverview from "./Components/ProjectList/ProjectOverview";
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
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <Router>
      <Switch>
        <Grommet theme={Theme}>
          <Navbar
            onLoginPress={() => {
              console.log("clicked");
              setDisplayModal(true);
            }}
          />
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/projects">
            <Authenticated WrappedComponent={ProjectOverview} withRedirect={false} noCheck={true} />
          </Route>

          <Route exact path="/signUp">
            <SignUp showLoginModal={setDisplayModal} />
          </Route>

          <Route exact path="/gitHub">
            <GitHub />
          </Route>

          <Route exact path="/chat">
            <MainChat />
          </Route>

          <Route exact path="/howitWorks">
            <HowItWorks />
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
            <LandingPage />
          </Route>
          <NavFooter />
        </Grommet>
      </Switch>
      {/* {displayModal ? <LogIn /> : null} */}
      <LogIn displayModal={displayModal} setDisplayModal={setDisplayModal} />
    </Router>
  );
};

export default App;
