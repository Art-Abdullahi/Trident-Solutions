import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import image2 from "../images/image2.svg";
import img2 from "../images/img2.svg";
import img3 from "../images/img3.svg";
import "../css/Slider.css";

const items = [
  {
    src: image2,
    caption: "web development",
    className: "image",

    key: "1"
  },
  {
    src: img2,
    caption: "Software Systems",
    key: "2"
  },
  {
    src: img3,
    caption: "Access control",
    key: "3"
  }
];

const Slider = () => <UncontrolledCarousel items={items} />;

export default Slider;
