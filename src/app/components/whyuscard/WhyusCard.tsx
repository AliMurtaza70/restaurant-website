import React from "react";
import "../../(routes)/about/aboutpage.css";

type WhyUsCard = {
  id: number;
  title: string;
  content: string;
};
export default function WhyusCard({ card }: { card: WhyUsCard }) {
  return (
    <div className="card">
      <span className="card-number">0{card.id}</span>
      <h1 className="card-heading">{card.title}</h1>
      <p className="card-desc">{card.content}</p>
    </div>
  );
}
