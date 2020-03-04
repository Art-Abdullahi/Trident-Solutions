import React, { Component } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMail, MdPhone } from "react-icons/md";
import "../css/Footer.css";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="footer-items">
            <h1>Trident Solutions</h1>
            <p>
              {" "}
              Welcome to Trident solutions, the one stop solution provider for
              all your ICT needs. From Web Solutions, Access Control, Software
              and Hardware soltions. We Deliver quality tailored products and
              services for all your business needs.
            </p>
          </div>
          <div className="footer-items">
            <h2>Quick Links</h2>

            <ul>
              <li>Software Development</li>
              <li>IcT accessories</li>
              <li>Network & Server Management</li>
              <li>Photography</li>
              <li>Data Analytics</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
          <div className="footer-items">
            <h2>Contact Us</h2>
            <ul>
              <li>
                <FaMapMarkerAlt />
                Airport Rd.Km4. Mogadishu, Somalia
              </li>
              <li>
                <MdMail />
                ahmed@tridentsolutions.com
              </li>
              <li>
                <MdPhone />
                +254702833109
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
