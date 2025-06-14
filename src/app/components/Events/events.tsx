"use client";
import React, { useRef, useState } from "react";
import "./events.css";
import { motion } from "framer-motion";

const eventCard = [
  {
    id: 1,
    image: "/images/event-birthday.jpg",
    title: "Birthday Parties",
    price: 189,
    ingredients:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
    description:
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    id: 2,
    image: "/images/event-custom.jpg",
    title: "Custom Parties",
    price: 189,
    ingredients:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
    description:
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    id: 3,
    image: "/images/event-private.jpg",
    title: "Private Parties",
    price: 189,
    ingredients:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
    description:
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
];

const buttons = ["bullet-button", "bullet-button", "bullet-button"];
export default function Events() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeButton, setActiveButton] = useState(0);

  const scrollToCard = (index: number) => {
    setActiveButton(index);
    if (cardRefs.current[index]) {
      cardRefs.current[index]!.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <div className="events-main">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1 }}
          className="event-content"
        >
          <h3 className="event-heading">EVENTS -----------------</h3>
          <h1 className="event-heading2">
            Organize Your Events in our Restaurant
          </h1>
          <div className="events-cardsBox">
            {eventCard.map((card, index) => (
              <div
                key={card.id}
                className={`event-card`}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
              >
                <img src={card.image} width="636px" height="444px" />
                <div className="event-card-content">
                  <h2 className="card-title">{card.title}</h2>
                  <span className="card-price">${card.price}</span>
                  <p className="card-ingre">{card.ingredients}</p>
                  <ul className="card-lists">
                    {card.features.map((list, index) => (
                      <li className="card-list" key={index}>
                        <i className="bi bi-check2-circle icon" />
                        {list}
                      </li>
                    ))}
                  </ul>
                  <p className="card-desc">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="buttons">
            {buttons.map((button, index) => (
              <span
                key={index}
                className={`bullet-button ${
                  activeButton === index ? "active" : ""
                }`}
                onClick={() => scrollToCard(index)}
              ></span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
