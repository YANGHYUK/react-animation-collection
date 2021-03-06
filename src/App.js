import React from "react";

import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import FadePage from "./pages/FadePage";
import MainPage from "./pages/MainPage";
import ChartPage from "./pages/ChartPage";
import MotionPage from "./pages/MotionPage";
import HoverPage from "./pages/HoverPage";
import CircleRotatePage from "./pages/CircleRotatePage";

import styled from "styled-components";

const StyledLink = styled(Link)`
  padding-left: 20px;
  padding-right: 20px;
  color: white;
  &:visited {
    color: white;
  }
  &:hover {
    opacity: 0.6;
  }
`;

const Nav = ({ children }) => {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "20px",
          padding: "20px",
          backgroundColor: "#171E31",

          zIndex: 100,
        }}
      >
        <StyledLink to="/">Main</StyledLink>
        <StyledLink to="/fade">Fade Animation</StyledLink>
        <StyledLink to="/chart">chart Animation</StyledLink>
        <StyledLink to="/motion">Motion Animation</StyledLink>
        <StyledLink to="/hover">Hover Animation</StyledLink>
        <StyledLink to="/circlerotate">CircleRotate Animation</StyledLink>
      </div>
      <div style={{ padding: "100px" }}>{children}</div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          component={() => (
            <Nav>
              <MainPage />
            </Nav>
          )}
        />
        <Route
          path="/fade"
          exact
          component={() => (
            <Nav>
              <FadePage />
            </Nav>
          )}
        />

        <Route
          path="/chart"
          exact
          component={() => (
            <Nav>
              <ChartPage />
            </Nav>
          )}
        />

        <Route
          path="/motion"
          exact
          component={() => (
            <Nav>
              <MotionPage />
            </Nav>
          )}
        />

        <Route
          path="/hover"
          exact
          component={() => (
            <Nav>
              <HoverPage />
            </Nav>
          )}
        />
        <Route
          path="/circlerotate"
          exact
          component={() => (
            <Nav>
              <CircleRotatePage />
            </Nav>
          )}
        />

        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
