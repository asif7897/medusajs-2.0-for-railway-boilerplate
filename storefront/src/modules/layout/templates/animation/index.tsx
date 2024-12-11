"use client";

import React, { useState, useEffect } from "react";

const Animation = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/others/Tie_web_banner_2_1_q1huo5.webp",
    "https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/others/tie_section_ozfo8g.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      setIsDesktop(window.innerWidth > 768); // Consider desktop layout for widths > 768px
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: isDesktop ? "row" : "column",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "black",
    gap: "20px",
  };

  const sectionStyle: React.CSSProperties = {
    flex: 1,
    height: "60vh", // Same height for both sections
    width: "100%",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const imageStyle: React.CSSProperties = {
    backgroundImage: `url(${images[currentImage]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
    borderRadius: "10px",
    transition: "background-image 1s ease-in-out",
  };

  const contentStyle: React.CSSProperties = {
    backgroundColor: "#ffffff",
    textAlign: "center",
    padding: "20px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  };

  return (
    <div style={containerStyle}>
      {/* Image Section */}
      <div style={{ ...sectionStyle, ...imageStyle }}></div>

      {/* Content Section */}
      <div style={{ ...sectionStyle, ...contentStyle }}>
        <h1 style={{ fontSize: isDesktop ? "50px" : "24px", marginBottom: "10px" }}>
          Money Bag
        </h1>
        <p style={{ fontSize: isDesktop ? "18px" : "16px", color: "#666", marginBottom: "20px" }}>
          Explore our exclusive collection of Money Bag, perfect for every time.
        </p>
        <CustomButton text="MONEY BAG" href="/collections/moneyBag" />
      </div>
    </div>
  );
};

// Custom Button Component
const CustomButton = ({ text, href }: { text: string; href: string }) => {
  const buttonStyle: React.CSSProperties = {
    marginTop: "20px",
    padding: "15px 30px",
    fontSize: "16px",
    color: "white",
    backgroundColor: "#333",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textTransform: "uppercase",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    textDecoration: "none",
    display: "inline-block",
  };

  return (
    <a
      href={href}
      style={buttonStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#555";
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#333";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {text}
    </a>
  );
};

export default Animation;
