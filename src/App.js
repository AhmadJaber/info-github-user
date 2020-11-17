import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { Dashboard, Login, Error } from "./pages";
import { PrivateRoute, AuthWrapper } from "./components";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact>
            <Dashboard />
          </PrivateRoute>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="*" exact>
            <Error />
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
