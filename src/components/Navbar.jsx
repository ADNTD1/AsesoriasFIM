import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Para detectar la ruta activa
  const navigate = useNavigate(); // Para manejar la navegación

  // Comprobar si el usuario ha iniciado sesión
  const estaAutenticado = localStorage.getItem("usuario") !== null;

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("usuario"); // Eliminar datos de sesión
    navigate("/login"); // Redirigir a la página de inicio de sesión
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* Logo o nombre del sitio */}
        <Link to="/" style={styles.logo}>
          UNIVERSIDAD AUTÓNOMA DE SINALOA
        </Link>

        {/* Enlaces de navegación */}
        <ul style={styles.navList}>
          {/* Mostrar "Inicio" y "Acceder" solo si el usuario NO está autenticado */}
          {!estaAutenticado && (
            <>
              <li style={styles.navItem}>
                <Link
                  to="/"
                  style={{
                    ...styles.navLink,
                    ...(location.pathname === "/" ? styles.activeNavLink : {}),
                  }}
                >
                  Inicio
                </Link>
              </li>
              <li style={styles.navItem}>
                <Link
                  to="/login"
                  style={{
                    ...styles.navLink,
                    ...(location.pathname === "/login" ? styles.activeNavLink : {}),
                  }}
                >
                  Acceder
                </Link>
              </li>
            </>
          )}

          {/* Mostrar "Cerrar Sesión" solo si el usuario está autenticado */}
          {estaAutenticado && (
            <li style={styles.navItem}>
              <button onClick={handleLogout} style={styles.navLink}>
                Cerrar Sesión
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

// 🎨 **Estilos**
const styles = {
  navbar: {
    backgroundColor: "#ffffff", // Fondo blanco limpio
    padding: "16px 0",
    position: "sticky",
    top: "0",
    zIndex: "1000",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)", // Sombra suave
    borderBottom: "1px solid #eaeaea",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  logo: {
    color: "#1D3C6D",
    fontSize: "1.5rem",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
  },
  navList: {
    display: "flex",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: "24px",
    position: "relative",
  },
  navLink: {
    textDecoration: "none",
    color: "#333",
    fontSize: "1rem",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "500",
    padding: "6px 8px",
    transition: "color 0.3s ease",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  activeNavLink: {
    color: "#1D3C6D",
    fontWeight: "600",
    borderBottom: "2px solid #FFD700", // Subrayado dorado
    paddingBottom: "4px",
  },
};

export default Navbar;
