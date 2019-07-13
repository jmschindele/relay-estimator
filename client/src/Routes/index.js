import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";
import SignIn from '../components/auth/SignIn';
import Register from '../components/auth/Register';
import Chart from "../pages/Graph";
import Projects from "../pages/Projects"
import AppliedRoute from "../components/AppliedRoute";



export default ({childProps}) =>
<Switch>
    <AppliedRoute path='/' exact component={Home} props={childProps}/>
    <AppliedRoute path='/Home' component={Home}  props={childProps}/>
    <AppliedRoute path='/signin' component={SignIn} props={childProps}/>
    <AppliedRoute path='/register' component={Register}  props={childProps}/>
    <AppliedRoute path='/projects/' component={Projects} props={childProps}/>
    <AppliedRoute path='/estimate/' component={Chart}  props={childProps}/>
    <Route component={NoMatch} />
</Switch>