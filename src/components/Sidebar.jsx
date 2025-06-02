import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Inicio");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

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
    backgroundColor: "#1D3C6D",
    color: "white",
    fontSize: "24px",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    flexShrink: 0,
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginLeft: "10px",
    color: "#495057",
    wordWrap: "break-word",
    whiteSpace: "normal",
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
    "Perfil"  
  ];

  const handleItemClick = (item) => {
    setActiveItem(item);
    if (item === "Perfil") {
      navigate("/perfil");
    } else if (item === "Inicio") {
      navigate("/Dashboard");
    } else if (item === "Buscar Asesorías") {
      navigate("/buscar-asesorias");
    } else if (item === "Notificaciones") {
      navigate("/notificaciones");
    }else if(item === "Mensajes"){
      navigate("/chats")
    }
  };
  

  return (
    <div style={sidebarStyle}>
      <div style={headerStyle}>
      <div style={logoStyle}>{userName ? userName.charAt(0).toUpperCase() : "?"}</div>
        <div style={titleStyle}>{userName || "Cargando..."}</div>
      </div>
      <div>
        <p style={sectionTitleStyle}>MENÚ</p>
        <ul style={ulStyle}>
          {menuItems.map((item) => (
            <li
              key={item}
              style={activeItem === item ? activeLiStyle : liStyle}
              onClick={() => handleItemClick(item)}
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
