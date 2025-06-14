"use client";
import React from "react";
import "./page.css";
import { motion } from "framer-motion";

const formFields = [
  { id: "name", label: "Your Name", type: "text", placeholder: "Your Name" },
  {
    id: "email",
    label: "Your Email",
    type: "email",
    placeholder: "Your Email",
  },
  { id: "phone", label: "Your Phone", type: "tel", placeholder: "Your Phone" },
  { id: "date", label: "Date", type: "date", placeholder: "mm/dd/yyyy" },
  { id: "time", label: "Time", type: "time", placeholder: "--:-- --" },
  {
    id: "people",
    label: "Number of People",
    type: "number",
    placeholder: "# of people",
    min: 1,
  },
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
            <h4 className="table-heading1">Reservation _____________</h4>
            <h1 className="table-heading2">Book a Table</h1>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="form"
          >
            {formFields.map(({ id, label, type, placeholder, ...rest }) => (
              <div key={id}>
                <input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  {...rest}
                />
              </div>
            ))}
            <div style={{ gridColumn: "span 3" }}>
              <textarea id="message" placeholder="Message" />
            </div>
            <div style={{ gridColumn: "span 3", textAlign: "center" }}>
              <button type="submit" className="form-button">
                Book a Table
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
