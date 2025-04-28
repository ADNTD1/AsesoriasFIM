import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard"; // Asegúrate de tener este componente

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
    element: <Dashboard />, // Nueva ruta protegida
  },
];

export default routes;
