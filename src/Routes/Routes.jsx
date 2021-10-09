import React from "react";
import { Switch, Route } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import Profile from "../Components/Profile/Profile";
import { Mentor } from "../Components/SearchResults/Mentor";
import { SearchResult } from "../Components/SearchResults/SearchResult";
import { LandingPage } from "../pages/LandingPage";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/search/:data">
        <Navbar />
        <SearchResult />
      </Route>
      <Route exact path="/search/:data/:id">
        <Mentor />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
    </Switch>
  );
};
