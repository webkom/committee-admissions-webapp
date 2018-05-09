import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "src/routes/landingPage/LandingPage";
import ApplicationPortal from "src/routes/ApplicationPortal";
import ScrollToTop from "./scrollToTop";
import "src/styles/globals.css";
import "./index.css";

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <div>
        <main>
          <Route exact path="/" component={LandingPage} />
          <Route
            path="/(committees|application)"
            component={ApplicationPortal}
          />
        </main>
      </div>
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);
