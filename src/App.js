import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { Dashboard, Login, Error } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="*" exact>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
