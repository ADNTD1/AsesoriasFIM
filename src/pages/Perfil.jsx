import React, { useState, useEffect } from "react";

const Perfil = () => {
  const [userName, setUserName] = useState("");
  const [userBio, setUserBio] = useState("");
  const [userCarrera, setUserCarrera] = useState("");

  useEffect(() => {
    // Simulamos obtener la información del usuario desde localStorage (o una base de datos)
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
      const usuario = JSON.parse(usuarioGuardado);
      const fullName = `${usuario.nombre} ${usuario.ap1} ${usuario.ap2}`;
      const carrera = usuario.carrera || "Carrera no disponible";
      const bio = usuario.biografia || "Biografía no disponible";

      setUserName(fullName);
      setUserCarrera(carrera);
      setUserBio(bio);
    }
  }, []);

  const profileContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    maxWidth: "500px",
    margin: "0 auto",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const profilePictureStyle = {
    backgroundColor: "#1D3C6D", // Usamos el mismo color de la inicial
    color: "white",
    fontSize: "40px",
    width: "100px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "600",
    color: "#1D3C6D",
    marginBottom: "10px",
  };

  const sectionTitleStyle = {
    fontSize: "18px",
    color: "#495057",
    fontWeight: "600",
    marginBottom: "10px",
    marginTop: "20px",
  };

  const textStyle = {
    fontSize: "16px",
    color: "#6c757d",
    textAlign: "center",
    maxWidth: "400px",
  };

  return (
    <div style={profileContainerStyle}>
      {/* Foto de perfil (letra inicial) */}
      <div style={profilePictureStyle}>
        {userName ? userName.charAt(0).toUpperCase() : "?"}
      </div>

      {/* Nombre del usuario */}
      <h2 style={titleStyle}>{userName || "Cargando..."}</h2>

      {/* Biografía */}
      <div>
        <p style={sectionTitleStyle}>Biografía</p>
        <p style={textStyle}>{userBio}</p>
      </div>

      {/* Carrera */}
      <div>
        <p style={sectionTitleStyle}>Carrera</p>
        <p style={textStyle}>{userCarrera}</p>
      </div>
    </div>
  );
};

export default Perfil;
