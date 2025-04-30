import React, { useState, useEffect } from "react";
import { auth, db } from "../Firebase/client";
import { doc, getDoc } from "firebase/firestore";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Inicio");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          const fullName = `${data.nombres} ${data.Apellido1} ${data.Apellido2}`;
          setUserName(fullName);
        }
      }
    };

    fetchUserName();
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
    backgroundColor: "#6c63ff",
    color: "white",
    fontSize: "24px",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginLeft: "10px",
    color: "#495057", // Puedes ajustar el color aquí si quieres
  };

  // Estilo para el nombre de usuario
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
        {/* Reemplazamos GOODFOOD por el nombre del usuario */}
        <div style={titleStyle}>{userName || "Cargando..."}</div>
      </div>
      {userName && (
        <p style={usernameStyle}>
          Hola, <strong>{userName}</strong>
        </p>
      )}
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
