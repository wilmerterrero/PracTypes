import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./pages/header/header";
import ExampleList from "./pages/pagination";
import OOP from "./pages/oop";
import Employees from "./examples/employees"

function App() {
  return (
    <Fragment>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/oop" component={OOP} />
          <Route exact path="/polimorfismo" component={Employees} />
          <ExampleList />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
