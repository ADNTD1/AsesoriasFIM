import "./styles/main.css";
import routes from "./routes/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element, children }, index) => (
          <Route key={index} path={path} element={element}>
            {children &&
              children.map((child, childIndex) => (
                <Route
                  key={childIndex}
                  path={child.path}
                  element={child.element}
                  index={child.index}
                />
              ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
