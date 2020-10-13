import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nomatch from './Component/NoMatch/Nomatch';
import SingleProduct from './Component/SingleProduct/SingleProduct';
import LogIn from './Component/LogIn/LogIn';
import CheckOut from './Component/CheckOut/CheckOut';
import PrivetRoute from './Component/PrivetRoute/PrivetRoute';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';


 export const UserContext =createContext()


function App() {
  const [loginUser,setLoginUser]=useState({})
  return (
    <UserContext.Provider value={[loginUser,setLoginUser]}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/food/:id" > 
          <SingleProduct/>
        </Route>
        <Route path="/login">
          <LogIn/>
        </Route>
        <PrivetRoute path="/checkout">
          <CheckOut/>
        </PrivetRoute>
        <Route path="/order">
          <PlaceOrder/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <Nomatch/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
