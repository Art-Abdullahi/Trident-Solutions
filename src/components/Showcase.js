import React, { Component } from "react";
import { Button } from "reactstrap";
import "../css/Showcase.css";
import Slider from "./Slider";

export class Showcase extends Component {
  render() {
    return (
      <div className="container showcase">
        <div className="container">
          <div className="info">
            <h1>Trident Solutions</h1>
            <p>
              Welcome to Trident solutions, the one stop solution provider for
              all your ICT needs. From Web Solutions, Access Control, Software
              and Hardware soltions. We Deliver quality tailored products and
              services for all your business needs.{" "}
            </p>
            <Button className="btn" size="lg">
              Learn More
            </Button>
          </div>
        </div>
        <div className="container">
          <Slider />
        </div>
      </div>
    );
  }
}

export default Showcase;
