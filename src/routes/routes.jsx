import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import BuscarAsesorias from "../components/buscarasesoria";
import Perfil from "../pages/Perfil";
import LayoutConSidebar from "../layouts/layoutconsidesbar";
import Notificaciones from "../pages/notificaciones";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <LayoutConSidebar />,  // Layout con sidebar para las rutas internas
    children: [
      {
        path: "dashboard",  // Ruta de Dashboard
        element: <Dashboard />,
      },
      {
        path: "buscar-asesorias",  // Ruta para Buscar Asesorías
        element: <BuscarAsesorias />,
      },
      {
        path: "/perfil",          // ← Nueva ruta
        element: <Perfil />,
      },
      {
        path: "/notificaciones",
        element: <Notificaciones />
      }
],
  },
];

export default routes;
