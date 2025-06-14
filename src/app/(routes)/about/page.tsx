"use client";
import React from "react";
import "./aboutpage.css";
import WhyusCard from "@/app/components/whyuscard/WhyusCard";
import { motion } from "framer-motion";

const listItems = [
  { id: 1, desc: "Ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { id: 2, desc: "Duis aute irure dolor in reprehenderit in voluptate velit." },
  {
    id: 3,
    desc: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
  },
];

const whyUsCards = [
  {
    id: 1,
    title: "Lorem Ipsum",
    content: `Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat`,
  },
  {
    id: 2,
    title: "Repellat Nihil",
    content: `Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest`,
  },
  {
    id: 3,
    title: "Ad ad velit qui",
    content: `Molestiae officiis omnis illo asperiores. Aut dolores vitae sunt debitis quo vel nam quis`,
  },
];

const chefsImages = [
  "/images/chefs-1.jpg",
  "/images/chefs-2.jpg",
  "/images/chefs-3.jpg",
];

export default function About() {
  return (
    <div>
      <div className="about-main">
        <div className="container">
          <div className="about-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="side-text"
            >
              <h1 className="side-text-heading1">
                Voluptatem dignissimos provident quasi <br /> corporis
                voluptatem sit assumenda.
              </h1>
              <p className="side-text-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="side-text-lists">
                {listItems.map((list) => (
                  <li className="side-text-list" key={list.id}>
                    {list.desc}
                  </li>
                ))}
              </ul>
              <p className="side-text-paragraph2">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="side-image"
            >
              <img src="/images/about.jpg" className="right-image" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="whyus-section">
        <div className="container">
          <div className="whyus-content">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="whyus-heading">WHY US ----------------</h3>
              <h1 className="whyus-heading2">Why Choose Our Restaurant</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="cards-box"
            >
              {whyUsCards.map((card) => (
                <WhyusCard key={card.id} card={card} />
              ))}
            </motion.div>
          </div>
          <div className="chefs-content">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="whyus-heading">CHEFS ----------------</h3>
              <h1 className="whyus-heading2">Our Professional Chefs</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="cards-box"
            >
              {chefsImages.map((image, index) => (
                <img
                  key={index}
                  width="400px"
                  height="450px"
                  style={{ objectFit: "cover" }}
                  src={image}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
