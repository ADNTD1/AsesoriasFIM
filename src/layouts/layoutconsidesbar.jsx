import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const LayoutConSidebar = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar /> {/* Agregamos Navbar para que se muestre siempre */}
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
          <Outlet /> {/* Renderiza las páginas hijas dentro del layout */}
        </div>
      </div>
    </div>
  );
};

export default LayoutConSidebar;
