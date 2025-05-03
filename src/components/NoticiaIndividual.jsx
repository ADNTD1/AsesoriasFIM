// src/components/NoticiaIndividual.jsx
import React from "react";

const NoticiaIndividual = ({ titulo, contenido }) => {
  const cardStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    marginBottom: "16px",
    borderRadius: "10px",
    boxShadow: "0 1px 5px rgba(0, 0, 0, 0.1)",
    fontFamily: "Poppins, sans-serif",
  };

  const titleStyle = {
    fontSize: "1.1rem",
    color: "#2c3e50",
    marginBottom: "10px",
    fontWeight: "600",
  };

  const contentStyle = {
    fontSize: "0.95rem",
    color: "#555",
    lineHeight: "1.5",
  };

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{titulo}</h3>
      <p style={contentStyle}>{contenido}</p>
    </div>
  );
};

export default NoticiaIndividual;
