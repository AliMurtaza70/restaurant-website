"use client";
import React, { useEffect, useState } from "react";
import "./menu.css";
import Link from "next/link";
import specialDishes from "./specialDishes";
import { motion } from "framer-motion";

interface Product {
  id: number;
  title: string;
  price: number;
  ingredients: string;
  image: string;
  description: string;
}

export default function Menupage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedDish, setSelectedDish] = useState(specialDishes[0]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/db.json");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="menu-page">
        <div className="container">
          <div className="menu-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="menu-heading">OUR MENU ------------</h1>
              <h1 className="menu-heading2">Check Our Tasty Menu</h1>
            </motion.div>
            {products.length > 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="menu-items"
              >
                {products.map((product) => (
                  <div key={product.id} className="menu-item">
                    <img
                      className="menuitem-img"
                      src={product.image}
                      alt={`${product.title} image`}
                    />
                    <div className="menuitem-content">
                      <div className="menuitem-headingBox">
                        <Link
                          href={`/menu/${product.id}`}
                          className="menuitem-heading1"
                        >
                          {product.title}
                        </Link>
                        <h2 className="menuitem-price">{product.price}</h2>
                      </div>
                      <div className="menuitem-para">{product.ingredients}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <p>Loading menu...</p>
            )}
          </div>
        </div>
      </div>
      <div className="specialDishes">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="special-headings"
          >
            <h1 className="menu-heading">SPECIALS ------------</h1>
            <h1 className="menu-heading2">Check Our Tasty Menu</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="special-dishes-box"
          >
            <ul className="special-dishes-names">
              {specialDishes.map((dish) => (
                <li
                  key={dish.id}
                  className={
                    selectedDish.id === dish.id
                      ? "dish-name-box-active"
                      : "dish-name-box"
                  }
                  onClick={() => setSelectedDish(dish)}
                >
                  {dish.name}
                </li>
              ))}
            </ul>
            <div className="about-special-dish">
              <div className="special-dish-content">
                <h1 className="special-dish-title">{selectedDish.title}</h1>
                <h5 className="special-dish-ingre">
                  {selectedDish.ingredients}
                </h5>
                <p className="special-dish-desc">{selectedDish.description}</p>
              </div>
              <img
                className="special-dish-image"
                src={selectedDish.image}
                alt={selectedDish.name}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
