import React, { useEffect, useState } from "react";
import Card from "../components/card";
import NoticiasContainer from "../components/noticiasContainer"; // Importa el componente

const Dashboard = () => {
  // Estado para almacenar el nombre del usuario
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
      const usuario = JSON.parse(usuarioGuardado);
      const fullName = `${usuario.nombre}`;
      setUserName(fullName);
    }
  }, []);

  const mainContentStyle = {
    display: "flex",
    flex: 1,
  };

  const contentStyle = {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
  };

  const welcomeStyle = {
    textAlign: "center",
    marginTop: "50px",
  };

  const welcomeTitleStyle = {
    fontSize: "1.8rem",
    color: "#1D3C6D",
    fontWeight: "600",
    fontFamily: "Poppins, sans-serif",
    marginBottom: "10px",
  };

  const welcomeTextStyle = {
    fontFamily: "Roboto, sans-serif",
    color: "#555",
    fontSize: "1.2rem",
    maxWidth: "800px",
    margin: "0 auto",
  };

  return (
    <div style={mainContentStyle}>
      <div style={contentStyle}>
        <div style={welcomeStyle}>
        
          <h1 style={welcomeTitleStyle}>Bienvenido, {userName}</h1>
          <p style={welcomeTextStyle}>
            Aquí encontraras recursos para mejorar tu aprendizaje asi como noticias relacionadas a tu universidad.
          </p>
        </div>

        <div style={{ borderTop: "1px solid #ddd", margin: "20px 0" }}></div>

        <div style={{ marginTop: "20px", backgroundColor: "#f9f9f9", padding: "30px", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
          <NoticiasContainer />
        </div>

        <div style={{ borderTop: "1px solid #ddd", margin: "20px 0" }}></div>

        <div style={{ marginTop: "20px", backgroundColor: "#f9f9f9", padding: "30px", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
          <h2 style={{ fontSize: "1.5rem", color: "#1D3C6D", marginBottom: "20px", fontWeight: "600" }}>Documentación</h2>
          <p style={{ fontSize: "1rem", color: "#555", fontFamily: "Roboto, sans-serif" }}>
            En esta sección podrás encontrar libros y recursos académicos de las diferentes carreras que ofrece la Facultad de Ingeniería Mochis. Es un espacio dedicado al aprendizaje y apoyo estudiantil.
          </p>
        </div>

        <div style={{ borderTop: "1px solid #ddd", margin: "20px 0" }}></div>

      </div>
    </div>
  );
};

export default Dashboard;
