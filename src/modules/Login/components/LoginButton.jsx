import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

function LoginButton({ buttonText, isEmailValid, email, password }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate(); // Inicializa la navegación

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: email, password }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("token", data.token); // Guarda el JWT
        alert("Login exitoso");
        navigate("/menu"); // Redirige a la página del menú 
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Hubo un problema con el servidor.");
    }

    setIsSubmitting(false);
  };

  return (
    <button
      type="button"
      className={`w-60 p-3 text-white rounded-lg cursor-pointer h-14 mt-5 mb-3 
        ${isEmailValid ? "bg-blue-700 hover:bg-blue-800" : "bg-gray-400 cursor-not-allowed"}`}
      onClick={handleSubmit}
      disabled={!isEmailValid || isSubmitting}
    >
      {isSubmitting ? "Iniciando sesión..." : buttonText}
    </button>
  );
}

export default LoginButton;
