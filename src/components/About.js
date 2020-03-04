import React, { Component } from "react";
import { Button } from "reactstrap";
import "../css/About.css";
class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>About Us</h1>
        <p>
          Trident Solutions was incorporated in 2018 as an Information and
          Technology Cosultancy firm providing hardware and software solutions
          and at times providing consultancy and training services to
          goverments, commercial entities, youth groups and NGO's.
        </p>
        <Button className="btn" size="lg">
          Read More
        </Button>
      </div>
    );
  }
}

export default About;
