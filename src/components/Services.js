import React, { Component } from "react";
import { MdComputer, MdWeb, MdPhotoCamera } from "react-icons/md";
import { FaServer, FaDatabase, FaDigitalTachograph } from "react-icons/fa";
import "../css/Services.css";
class Services extends Component {
  render() {
    return (
      <div className="services">
        <h1>Our Services</h1>
        <div className="cen">
          <div className="service">
            <MdComputer className="fa" />
            <h2>ICT Accessories</h2>
            <p>
              Trident Solutions has proven its capability beyond any measure
              providing high quality and upto date Office ICT accesories to
              offices, schools,commercial entities and goverments.
            </p>
          </div>
          <div className="service">
            <FaServer className="fa" />
            <h2>Network & Server Management</h2>
            <p>
              Through our implementation of advanced technology and the
              digitalization server management solutions, we deliver seamless
              solutions to our customers thus creating a visibility and
              drivingmore eeficient business.
            </p>
          </div>
          <div className="service">
            <MdWeb className="fa" />
            <h2>Software Development</h2>
            <p>
              Our solutions include Web and Mobile solutions, Access Control and
              Badging Solutions, Human Resources Management and Information
              system, School Managements System, Hotel Management solutions.
            </p>
          </div>
          <div className="service">
            <FaDatabase className="fa" />
            <h2>Data Analytics</h2>
            <p>
              We Also offer a Wide range data analytics services such as big
              data development, data mining, data migration, data warehousing,
              data architectecture and design and business intelligence.
            </p>
          </div>
          <div className="service">
            <FaDigitalTachograph className="fa" />
            <h2>Digital Marketing</h2>
            <p>
              As Technology advances we help businesses reach their target
              audience through digital platforms allowing and allowing vast
              online visibity.
            </p>
          </div>
          <div className="service">
            <MdPhotoCamera className="fa" />
            <h2>Photography</h2>
            <p>
              We also provide top class corprate photography for businesses.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
