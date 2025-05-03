import React, { useState, useEffect } from "react";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Inicio");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
      const usuario = JSON.parse(usuarioGuardado);
      const fullName = `${usuario.nombre} ${usuario.ap1} ${usuario.ap2}`;
      setUserName(fullName);
    }
  }, []);

  const sidebarStyle = {
    width: "250px",
    backgroundColor: "#f8f9fa",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    borderRight: "1px solid #ddd",
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  };

  const logoStyle = {
    backgroundColor: "#1D3C6D", // Cambiado al color azul de la navbar
    color: "white",
    fontSize: "24px",
    width: "40px",  // Tamaño fijo
    height: "40px", // Tamaño fijo
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    flexShrink: 0,  // Evitar que el logo se reduzca
  };
  

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginLeft: "10px",
    color: "#495057",
    wordWrap: "break-word", // Permitir que el nombre se ajuste en caso de ser largo
    whiteSpace: "normal", // Permitir que el nombre ocupe múltiples líneas si es necesario
  };

  const usernameStyle = {
    fontSize: "16px",
    color: "#495057",
    marginBottom: "20px",
    fontWeight: "normal",
  };

  const sectionTitleStyle = {
    fontSize: "14px",
    color: "#6c757d",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const ulStyle = {
    listStyle: "none",
    padding: "0",
  };

  const liStyle = {
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#6c757d",
  };

  const activeLiStyle = {
    ...liStyle,
    backgroundColor: "#e2e6ea",
    color: "#495057",
    fontWeight: "bold",
  };

  const menuItems = [
    "Inicio",
    "Buscar Asesorías",
    "Mis Asesorías",
    "Mensajes",
    "Notificaciones",
    "Perfil",
    "Ayuda",
    "Cerrar Sesión",
  ];

  return (
    <div style={sidebarStyle}>
      <div style={headerStyle}>
        <div style={logoStyle}>G</div>
        <div style={titleStyle}>{userName || "Cargando..."}</div>
      </div>
      <div>
        <p style={sectionTitleStyle}>MENÚ</p>
        <ul style={ulStyle}>
          {menuItems.map((item) => (
            <li
              key={item}
              style={activeItem === item ? activeLiStyle : liStyle}
              onClick={() => setActiveItem(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
