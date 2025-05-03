import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/card";
import NoticiasContainer from "../components/noticiasContainer"; // Importa el componente

const Dashboard = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "#f0f2f5",
    fontFamily: "Poppins, sans-serif",
  };

  const mainContentStyle = {
    display: "flex",
    flex: 1,
  };

  const contentStyle = {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
  };

  const sectionStyle = {
    marginTop: "20px",
  };

  const separatorStyle = {
    borderTop: "1px solid #ddd",
    margin: "20px 0",
  };

  const welcomeStyle = {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Poppins, sans-serif",
  };

  const welcomeTextStyle = {
    fontFamily: "Roboto, sans-serif",
    color: "#555",
    fontSize: "1.1rem",
  };

  return (
    <div style={containerStyle}>
      <Navbar />
      <div style={mainContentStyle}>
        <Sidebar />
        <div style={contentStyle}>
          <div style={welcomeStyle}>
            <h1>Bienvenido</h1>
            <p style={welcomeTextStyle}>
              Aquí podrás encontrar todas las herramientas y recursos necesarios para gestionar tu contenido de manera eficiente. Explora las últimas actualizaciones, noticias y consulta la documentación para obtener más información.
            </p>
          </div>

          <div style={separatorStyle}></div>

          <div style={sectionStyle}>
            
            {/* Aquí se renderiza el componente de noticias */}
            <NoticiasContainer />
          </div>

          <div style={separatorStyle}></div>

          <Card />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
