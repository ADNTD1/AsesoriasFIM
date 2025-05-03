import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../server/Supabase/supabaseClient";

function LoginConNIP() {
  const [numeroCuenta, setNumeroCuenta] = useState("");
  const [nip, setNip] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from("Usuario")
        .select("*")
        .eq("nocuenta", numeroCuenta)
        .eq("nip", nip)
        .single();

      if (error || !data) {
        setError("Número de cuenta o NIP incorrecto");
      } else {
        console.log("Inicio de sesión exitoso:", data);
        localStorage.setItem("usuario", JSON.stringify(data));
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Error al intentar iniciar sesión:", err);
      setError("Ocurrió un error inesperado.");
    } finally {
      setLoading(false);
    }
  };

  // Estilos en línea para mejorar la apariencia
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  };

  const formStyle = {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    width: "300px",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  const buttonDisabledStyle = {
    ...buttonStyle,
    backgroundColor: "#6c757d",
    cursor: "not-allowed",
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2>Iniciar Sesión</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="numeroCuenta">Número de Cuenta:</label>
            <input
              type="text"
              id="numeroCuenta"
              value={numeroCuenta}
              onChange={(e) => setNumeroCuenta(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="nip">NIP:</label>
            <input
              type="password"
              id="nip"
              value={nip}
              onChange={(e) => setNip(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={loading ? buttonDisabledStyle : buttonStyle}
          >
            {loading ? "Verificando..." : "Iniciar Sesión"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginConNIP;