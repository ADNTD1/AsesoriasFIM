import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Perfil from "../pages/Perfil"; // Agrega esta línea

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
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/perfil",          // ← Nueva ruta
    element: <Perfil />,
  },
];

export default routes;
