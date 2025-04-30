import React from "react";
import Sidebar from "../components/Sidebar"; // Importa el componente Sidebar desde la ruta indicada

const Dashboard = () => {
  const dashboardStyle = {
    display: "flex",
    height: "100vh", // Altura completa de la ventana
    backgroundColor: "#f0f2f5",
  };

  const contentStyle = {
    flex: 1, // Ocupa todo el espacio disponible
    padding: "20px",
    overflowY: "auto", // Para permitir scroll si el contenido es largo
  };

  return (
    <div style={dashboardStyle}>
      <Sidebar />
      <div style={contentStyle}>
        <h1>Bienvenido al Dashboard</h1>
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
      </div>
    </div>
  );
};

export default Dashboard;