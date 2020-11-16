import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { Dashboard, Login, Error } from "./pages";
import { PrevateRoute } from "./components";

function App() {
  return (
    <Router>
      <Switch>
        <PrevateRoute path="/" exact>
          <Dashboard />
        </PrevateRoute>
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
