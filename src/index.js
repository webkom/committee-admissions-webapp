import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import LandingPage from "./routes/landingPage/LandingPage";

import "./index.css";

ReactDOM.render(
  <Router>
    <div>
      <main>
        <Route exact path="/" component={LandingPage} />
      </main>
    </div>
  </Router>,
  document.getElementById("root")
);
