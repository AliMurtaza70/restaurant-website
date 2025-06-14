"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
  "/images/gallery-7.jpg",
  "/images/gallery-8.jpg",
];
const styles = {
  gallery: {
    paddingTop: "80px",
    width: "100%",
    backgroundColor: "black",
  },
  container: {
    maxWidth: "1250px",
    margin: "0 auto",
  },
  galleryContent: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    marginBottom: "60px",
  },
  heading1: {
    fontSize: "24px",
    fontFamily: "Poppins",
    fontWeight: 400,
    color: "#f5f4f4",
  },
  heading2: {
    fontSize: "40px",
    fontFamily: "Poppins",
    fontWeight: 600,
    color: "#cda45e",
  },
  main: {
    display: "flex",
    width: "100%",
    padding: "0 10px",
    flexWrap: "wrap",
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    transition: "transform 0.4s ease", // Smooth transition for hover effect
  },
  imageHovered: {
    transform: "scale(1.08)", // Scale effect on hover
  },
  imageBox: {
    cursor: "pointer",
    height: "324px",
    width: "25%",
    borderRight: "3px solid #454035",
    borderBottom: "3px solid #454035",
    overflow: "hidden",
  },
};

export default function ImageGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div style={styles.gallery as React.CSSProperties}>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={styles.galleryContent as React.CSSProperties}
        >
          <h4 style={styles.heading1}>Gallery ___________</h4>
          <h1 style={styles.heading2}>Some photos from Our Restaurant</h1>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 1 }}
        style={styles.main as React.CSSProperties}
      >
        {images.map((image, index) => (
          <div key={index} style={styles.imageBox}>
            <img
              src={image}
              style={
                hoveredIndex === index
                  ? { ...styles.image, ...styles.imageHovered }
                  : styles.image
              }
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
