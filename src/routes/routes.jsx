import Home from "../pages/Home";
import Login from "../modules/Login/pages/Login";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
