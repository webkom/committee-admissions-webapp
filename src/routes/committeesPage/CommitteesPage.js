import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AbakusLogo from "src/components/AbakusLogo";
import Card, { CardTitle, CardParagraph } from "src/components/Card";

class CommitteesPage extends Component {
  render() {
    return (
      <div className="container flex-center">
        <div className="flex-center">
          <AbakusLogo />
          <Link to="/">Gå til søknad</Link>
        </div>
      </div>
    );
  }
}

export default CommitteesPage;
