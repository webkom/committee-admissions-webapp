import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "src/routes/landingPage/LandingPage";
import CommitteesPage from "src/routes/committeesPage/CommitteesPage";

import "src/styles/globals.css";
import "./index.css";

ReactDOM.render(
  <Router>
    <div>
      <main>
        <Route exact path="/" component={LandingPage} />
        <Route path="/committees" component={CommitteesPage} />
      </main>
    </div>
  </Router>,
  document.getElementById("root")
);
