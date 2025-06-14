"use client";
import React from "react";
import "./Hero.css";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="content"
        >
          <h1 className="hero-heading">
            Welcome to <br /> Yammy <br />
            <span className="hero-span"> Restaurant </span>
          </h1>
          <p className="hero-para">
            Delivering great food for more than 18 years!
          </p>
          <div className="hero-buttons">
            <button className="hero-Button" onClick={() => redirect("/menu")}>
              our Menu
            </button>
            <button
              className="hero-Button"
              onClick={() => redirect("book-table")}
            >
              Book a Table
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
