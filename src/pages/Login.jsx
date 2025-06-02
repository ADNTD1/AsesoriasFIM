import { useState } from "react";
import Navbar from "../components/Navbar";
import LoginForm from "../modules/Login/components/LoginForm";
import Lottie from "lottie-react";

import AnimLogin from "../animations/AnimLogin.json";

function Login() {
  const [mostrarAyuda, setMostrarAyuda] = useState(true);

  return (
    <div className="h-screen overflow-hidden bg-gray-100">
      {/* Navbar fija */}
      <Navbar />

      {/* Contenido con animación y formulario */}
      <div className="flex items-center justify-between h-[calc(100vh-64px)] px-16">
        {/* Animación */}
        <div className="w-full max-w-lg flex justify-center">
          <Lottie animationData={AnimLogin} loop={true} />
        </div>

        {/* Formulario */}
        <div className="p-8 w-full max-w-md">
          <LoginForm />
        </div>
      </div>

      {/* Modal de ayuda flotante con efecto fade */}
      {mostrarAyuda && (
        <div
          className="fixed bottom-6 right-6 bg-white border border-gray-300 shadow-xl rounded-lg p-4 w-80 z-50
              opacity-30 hover:opacity-100 transition-opacity duration-500"
        >
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-lg font-semibold text-blue-900">¿Necesitas ayuda?</h2>
            <button
              className="text-gray-500 hover:text-gray-700 p-1"
              onClick={() => setMostrarAyuda(false)}
              aria-label="Cerrar ayuda"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-gray-700">
            Si tienes problemas para iniciar sesión, contáctanos:
          </p>
          <ul className="mt-2 text-sm text-gray-800">
            <li><strong>Correo:</strong> plataformasvbd.fim@uas.edu.mx</li>
            <li><strong>Teléfono:</strong> (667) 123-4567</li>
            <li><strong>Horario:</strong> Lun a Vie, 8:00am - 4:00pm</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Login;
