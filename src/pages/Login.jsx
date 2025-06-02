import Navbar from "../components/Navbar";
import LoginForm from "../modules/Login/components/LoginForm";
import Lottie from "lottie-react";

import AnimLogin from "../animations/AnimLogin.json";

function Login() {
  return (
    <div className="h-screen bg-gray-100">
      {/* Navbar fija arriba */}
      <Navbar />

      {/* Contenedor principal con animación a la izquierda y login a la derecha */}
      <div className="flex items-center justify-between h-[calc(100vh-64px)] px-16">
        {/* Contenedor de la animación Lottie */}
        <div className="w-full max-w-lg flex justify-center">
          <Lottie animationData={AnimLogin} loop={true} />
        </div>

        {/* Contenedor del login */}
        <div className="p-8 w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
