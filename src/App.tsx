import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./pages/header/header";
import Employees from "./examples/employees";
import ExampleList from "./pages/pagination/pagination";

function App() {
  return (
    <Fragment>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/polimorfismo" component={Employees} />
          <ExampleList />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
