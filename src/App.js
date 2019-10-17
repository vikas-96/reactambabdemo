import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
// import pages from "./pages";
import Root from "./components/Layouts/Root";
// import routes from "./pages/routes";

const browserHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Root></Root>
      </Router>
    );
  }
}

export default App;
