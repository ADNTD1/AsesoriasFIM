import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar"; // Importa Navbar
import Card from "../components/card";

const Dashboard = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column", // Para que Navbar esté arriba
    height: "100vh",
    backgroundColor: "#f0f2f5",
  };

  const mainContentStyle = {
    display: "flex",
    flex: 1, // Ocupa todo el espacio restante debajo de Navbar
  };

  const contentStyle = {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
  };

  return (
    <div style={containerStyle}>
      <Navbar />
      <div style={mainContentStyle}>
        <Sidebar />
        <div style={contentStyle}>
          <h1>B</h1>
          <p>
            Aquí encontrarás información relevante y herramientas para gestionar
            tu contenido.
          </p>
          <div style={{ marginTop: "20px" }}>
            <h2>Estadísticas</h2>
            <p>Sección de estadísticas y gráficos en desarrollo.</p>
          </div>
          <div style={{ marginTop: "20px" }}>
            <h2>Últimas Actualizaciones</h2>
            <p>Contenido dinámico sobre tus últimas actividades.</p>
          </div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
