import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import LoginForm from "../modules/Login/components/LoginForm";
import Lottie from "lottie-react";

import AnimLogin from "../animations/AnimLogin.json";

function Login() {
  // Simulamos rol del usuario (en producción, lo traes desde contexto o API)
  const [userRole, setUserRole] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Simula que aquí obtienes el rol real
    setUserRole("cliente"); // cambia a "asesor" para probar otro caso
  }, []);

  const handleAcceptAsesoria = () => {
    if (userRole !== "asesor") {
      setMessage("No eres asesor, no puedes aceptar la asesoría.");
      return;
    }

    const isSure = window.confirm("¿Estás seguro de aceptar la asesoría?");
    if (isSure) {
      setMessage("Has aceptado la asesoría.");
      // Aquí podrías hacer más acciones
    } else {
      setMessage("Has cancelado la aceptación de la asesoría.");
    }
  };

  return (
    <div className="h-screen bg-gray-100">
      <Navbar />

      <div className="flex items-center justify-between h-[calc(100vh-64px)] px-16">
        <div className="w-full max-w-lg flex justify-center">
          <Lottie animationData={AnimLogin} loop={true} />
        </div>

        <div className="p-8 w-full max-w-md">
          <LoginForm />
          <button
            onClick={handleAcceptAsesoria}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Aceptar asesoría
          </button>

          {message && (
            <p className="mt-4 text-red-600 font-semibold">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
