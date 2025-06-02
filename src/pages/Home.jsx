import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../server/Supabase/supabaseClient";


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

  // Estilos mejorados
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
  };

  const loginBoxStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: "50px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    width: "400px",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#1D3C6D", // Azul
    marginBottom: "20px",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  };

  const forgotPasswordStyle = {
    textAlign: "right",
    fontSize: "14px",
    color: "#007bff",
    cursor: "pointer",
    marginBottom: "20px",
  };

  const buttonStyle = {
    backgroundColor: "#1D3C6D",
    color: "#fff",
    padding: "14px 36px",
    fontSize: "1.1rem",
    fontWeight: "600",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    width: "100%",
  };

  return (
    <div style={containerStyle}>
      <div style={loginBoxStyle}>
        <h2 style={titleStyle}>Bienvenido</h2>
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
              placeholder="Ingresa tu número de cuenta"
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
              placeholder="Ingresa tu NIP"
            />
          </div>
          <div style={forgotPasswordStyle}>¿Olvidaste tu NIP?</div>
          <button type="submit" style={buttonStyle} disabled={loading}>
            {loading ? "Verificando..." : "Iniciar Sesión"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginConNIP;