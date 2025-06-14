"use client";
import React from "react";
import "./contactpage.css";
import { motion } from "framer-motion";

const contactDetails = [
  {
    icon: "bi bi-geo-alt",
    label: "Location:",
    value: "100 Your Street, Your City, State 1234",
  },
  {
    icon: "bi bi-clock",
    label: "Open Hours:",
    value: "Monday-Saturday: 11:00 AM - 23:00 PM",
  },
  { icon: "bi bi-envelope", label: "Email:", value: "info@example.com" },
  { icon: "bi bi-phone", label: "Call:", value: "+61 1234 5678" },
];

export default function page() {
  return (
    <div className="book-table-main">
      <div className="container">
        <div className="table-content">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h4 className="contact-heading1">Contact _____________</h4>
            <h1 className="contact-heading2">Contact Us</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="contact-page"
          >
            <div className="left-side">
              {contactDetails.map((detail, index) => (
                <div key={index} className="side-details">
                  <i id="icons" className={detail.icon} />
                  <div>
                    <strong>{detail.label}</strong>
                    <p className="side-details-para">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ flex: 2 }}>
              <form>
                <div className="inputs-box">
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Your Email" />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  style={{ marginBottom: "15px" }}
                />
                <textarea placeholder="Message" id="contact-message" />
                <button type="submit" className="contact-button">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
