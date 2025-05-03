import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Para saber qué ruta está activa
  const navigate = useNavigate(); // Usamos useNavigate para manejar la navegación

  // Función para cerrar sesión
  const handleLogout = () => {
    // Eliminar los datos del usuario (por ejemplo, desde localStorage)
    localStorage.removeItem("usuario");
    // Redirigir a la página de inicio (o login)
    navigate("/login");
  };

  // Comprobar si estamos en el dashboard, perfil o cualquier otra ruta que debería mostrar solo "Cerrar Sesión"
  const isDashboardOrProfile = location.pathname.startsWith("/dashboard") || location.pathname.startsWith("/perfil");

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* Logo o nombre del sitio */}
        <Link to="/" style={styles.logo}>
          UNIVERSIDAD AUTÓNOMA DE SINALOA
        </Link>

        {/* Enlaces de navegación */}
        <ul style={styles.navList}>
          {/* Mostrar "Inicio" solo si no estamos en el dashboard o perfil */}
          {!isDashboardOrProfile && (
            <li style={styles.navItem}>
              <Link
                to="/"
                style={{
                  ...styles.navLink,
                  ...(location.pathname === "/" ? styles.activeNavLink : {}),
                }}
                aria-label="Ir a la página de inicio"
              >
                Inicio
              </Link>
            </li>
          )}

          {/* Mostrar "Acceder" solo si no estamos en el dashboard o perfil */}
          {!isDashboardOrProfile && (
            <li style={styles.navItem}>
              <Link
                to="/login"
                style={{
                  ...styles.navLink,
                  ...(location.pathname === "/login" ? styles.activeNavLink : {}),
                }}
                aria-label="Acceder a la plataforma"
              >
                Acceder
              </Link>
            </li>
          )}

          {/* Mostrar el botón de "Cerrar Sesión" solo si el usuario está logueado */}
          {localStorage.getItem("usuario") && (
            <li style={styles.navItem}>
              <button
                onClick={handleLogout}
                style={styles.navLink}
                aria-label="Cerrar sesión"
              >
                Cerrar Sesión
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

// Estilos modernos y minimalistas
const styles = {
  navbar: {
    backgroundColor: "#ffffff", // Fondo blanco para un diseño limpio
    padding: "16px 0",
    position: "sticky",
    top: "0",
    zIndex: "1000",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)", // Sombra muy sutil
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
  },
  activeNavLink: {
    color: "#1D3C6D",
    fontWeight: "600",
    borderBottom: "2px solid #FFD700", // Subrayado dorado
    paddingBottom: "4px",
  },
};

export default Navbar;
