import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Nav from "./partials/Nav";
import Footer from "./partials/Footer";
import People from "./People/People";
import Home from "./Home/Home";
import Starships from "./Starships/Starships";

export default function App() {
  return (
    <Router>
      <div className="container">
        <Nav />

        {/* For new navigation routes */}
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route exact path="/home" component={Home} />
          <Route exact path="/people" component={People} />
          <Route exact path="/starships" component={Starships} />
        </Switch>

        <Footer></Footer>
      </div>
    </Router>    
  );
}
