import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home/index";
import NoMatch from "../pages/NoMatch";
import SignIn from "../components/auth/SignIn";
import Register from "../components/auth/Register";
import Graph from "../pages/Graph";
import Projects from "../pages/Projects";
import AppliedRoute from "../components/AppliedRoute";
import Tasks from "../pages/Tasks";

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/Home" component={Home} props={childProps} />
    <AppliedRoute path="/signin" component={SignIn} props={childProps} />
    <AppliedRoute path="/register" component={Register} props={childProps} />
    <AppliedRoute path="/projects/" component={Projects} props={childProps} />
    <AppliedRoute path="/tasks/:projectId" component={Tasks} props={childProps} />
    <AppliedRoute path="/estimate/:projectId" component={Graph} props={childProps} />
    <Route component={NoMatch} />
  </Switch>
);
