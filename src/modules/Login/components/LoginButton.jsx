import { useState } from "react";

function LoginButton({ buttonText, isEmailValid }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO:
    // * Utilizar endpoint para hacer validar credenciales
    // * El backend debe retornar un JWT con el payload de los datos del usario y el frontend almacenarlo en Local Storage.
    // * Manejar excepciones: (El usario no existe, Contraseña incorrecta.)
  };

  return (
    <>
      <button
        type="button"
        className={`w-60 p-3 text-white rounded-lg cursor-pointer h-14 mt-5 mb-3 
          ${
            isEmailValid
              ? "bg-blue-700 hover:bg-blue-800"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        onClick={handleSubmit}
        disabled={!isEmailValid || isSubmitting}
      >
        {isSubmitting ? "Iniciando sesión..." : buttonText}
      </button>
    </>
  );
}

export default LoginButton;
