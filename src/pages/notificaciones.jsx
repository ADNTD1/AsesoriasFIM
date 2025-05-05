import React from "react";
import Lottie from "lottie-react";

const Notificaciones = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "350px",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#1D3C6D",
    marginBottom: "10px",
  };

  const messageStyle = {
    fontSize: "1rem",
    color: "#6c757d",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Notificaciones</h2>
        <p style={messageStyle}>No tienes nuevas notificaciones.</p>
      </div>
    </div>
  );
};

export default Notificaciones;