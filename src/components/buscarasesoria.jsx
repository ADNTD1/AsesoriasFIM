import React, { useState } from "react";
const BuscarAsesorias = () => {
const [query, setQuery] = useState("");

const handleSearch = (e) => {
    e.preventDefault();
    alert(`Buscando asesorías para: ${query}`);
};

const contentStyle = {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
    backgroundColor: "#f0f2f5",
    borderRadius: "15px", // Esquinas redondeadas
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Sombra elegante
};

return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <div style={contentStyle}>
        <h1>Buscar Asesorías</h1>
        <form onSubmit={handleSearch}>
        <input
        type="text"
        placeholder="Escribe una materia o tema..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
            padding: "8px",
            width: "300px",
            marginRight: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
        }}
        />
        <button
        type="submit"
        style={{
            padding: "8px 16px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#6c63ff",
            color: "white",
            cursor: "pointer",
        }}
        >
        Buscar
        </button>
    </form>
    </div>
    </div>
);
};

export default BuscarAsesorias;
