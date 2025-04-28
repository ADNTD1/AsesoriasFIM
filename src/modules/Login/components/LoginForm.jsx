// Login.jsx
import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../Firebase/client";
import "./Login.css"; // Archivo para los estilos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // ✅ Importación para redirección

function Login() {
  const [NIP, setNIP] = useState("");
  const [Ncuenta, setNcuenta] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate(); // ✅ Hook de redirección

  const handleLogin = async () => {
    try {
      const usuariosRef = collection(db, "usuarios");
      const q = query(
        usuariosRef,
        where("NIP", "==", NIP),
        where("Ncuenta", "==", Ncuenta)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setMensaje("Inicio de sesión exitoso ✅");
        // ✅ Redirección después del login exitoso
        setTimeout(() => {
          navigate("/dashboard"); // Cambia la ruta si lo necesitas
        }, 1000);
      } else {
        setMensaje("Credenciales incorrectas ❌");
      }
    } catch (error) {
      console.error("Error al intentar iniciar sesión:", error);
      setMensaje("Ocurrió un error al iniciar sesión ❌");
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <div className="input-group">
        <FontAwesomeIcon icon={faUser} className="icon" />
        <input
          type="text"
          placeholder="Número de cuenta"
          value={Ncuenta}
          onChange={(e) => setNcuenta(e.target.value)}
        />
      </div>
      <div className="input-group">
        <FontAwesomeIcon icon={faLock} className="icon" />
        <input
          type="password"
          placeholder="NIP"
          value={NIP}
          onChange={(e) => setNIP(e.target.value)}
        />
      </div>
      <button onClick={handleLogin} className="login-button">
        Ingresar
      </button>
      {mensaje && <p className="message">{mensaje}</p>}
    </div>
  );
}

export default Login;
