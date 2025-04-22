import Home from "../pages/Home";
import Login from "../modules/Login/pages/Login";
import Menu from "../modules/Login/pages/Menu";
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
    path: "/menu",
    element: <Menu/>
  }
];

export default routes;
