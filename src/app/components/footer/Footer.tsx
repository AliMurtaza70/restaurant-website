import React from "react";
import "./footer.css";
import Link from "next/link";

const iconsArray = [
  "bi bi-twitter-x",
  "bi bi-facebook",
  "bi bi-instagram",
  "bi bi-youtube",
  "bi bi-reddit",
];
const data = [
  {
    title: "Useful Links",
    links: ["Home", "About us", "Menu", "Events", "Gallery"],
  },
  {
    title: "Our Services",
    links: ["Functions", "Parties", "Events", "Private Chef", "Ceremony"],
  },
];

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="container">
        <div className="footer-content">
          <div className="footer-firstbox">
            <h1 className="firstBox-heading">Restaurant</h1>
            <div>
              <p className="firstBox-para">100 Your street</p>
              <p className="firstBox-para">State 1234, AUS</p>
            </div>
            <div>
              <p className="firstBox-para">
                <strong>Phone: </strong>03191654508
              </p>
              <p className="firstBox-para">
                <strong>Email: </strong>aliiimurtaza@gmail.com
              </p>
            </div>
            <div className="firstBox-icons">
              {iconsArray.map((icon, index) => (
                <div key={index} className="firstBox-iconBox">
                  <i className={icon}></i>
                </div>
              ))}
            </div>
          </div>
          {data.map((section, index) => (
            <div key={index} className="footer-secondBox">
              <h2 className="secondbox-title">{section.title}</h2>
              <div className="footer-links">
                {section.links.map((link, linkIndex) => (
                  <h1 className="footer-link" key={linkIndex}>
                    {link}
                  </h1>
                ))}
              </div>
            </div>
          ))}
          <div className="footer-third">
            <h2 className="third-heading1">Our NewsLetter</h2>
            <p className="third-para">
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <div className="third-inputBox">
              <input type="text" className="third-input" />
              <button className="inputBox-button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
