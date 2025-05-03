// src/components/BuscarAsesorias.jsx

import React, { useState, useEffect } from "react";
import { supabase } from "../server/Supabase/supabaseClient";
import Card from "./card";

const BuscarAsesorias = () => {
  const [query, setQuery] = useState("");
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    obtenerSolicitudes(); // Cargar solicitudes al inicio
  }, []);

  const obtenerSolicitudes = async () => {
    const { data, error } = await supabase
      .from("solicitud_asesoria")
      .select(`
        id_solicitud,
        created_at,
        nocuenta,
        descripcion,
        id_carrera,
        id_materia,
        Usuario(nombre, ap1, ap2),
        carrera(descripcion),
        materia(descripcion)
      `)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error obteniendo solicitudes:", error);
    } else {
      setSolicitudes(data);
    }
  };

  const handleSearch = async () => {
    const { data, error } = await supabase
      .from("solicitud_asesoria")
      .select(`
        id_solicitud,
        created_at,
        nocuenta,
        descripcion,
        id_carrera,
        id_materia,
        Usuario(nombre, ap1, ap2),
        carrera(descripcion),
        materia(descripcion)
      `)
      .ilike("descripcion", `%${query}%`)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error buscando asesorías:", error);
    } else {
      setSolicitudes(data);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div>
      {/* Contenedor del buscador */}
      <div
        style={{
          position: "absolute",
          top: "100px",
          left: "27%",
          transform: "translateX(-50%)",
          display: "flex",
          backgroundColor: "#ffffff",
          padding: "10px",
          borderRadius: "8px",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <input
          type="text"
          placeholder="Escribe un tema..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            padding: "6px",
            width: "250px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          style={{
            padding: "5px 12px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#6c63ff",
            color: "white",
            cursor: "pointer",
            fontSize: "14px",
          }}
          onClick={handleSearch}
        >
          🔍
        </button>
      </div>

      {/* Contenedor de las tarjetas */}
      <div
        style={{
          marginTop: "180px",
          padding: "0 20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {solicitudes.map((solicitud) => {
          const usuario = solicitud.Usuario;
          const nombreCompleto = usuario
            ? `${usuario.nombre} ${usuario.ap1} ${usuario.ap2}`
            : "Sin nombre";

          const nombrecarrera =
            solicitud.carrera?.descripcion || "Sin identificar";
          const nombremateria =
            solicitud.materia?.descripcion || "Sin identificar";
          const carreramateria = `${nombrecarrera} - ${nombremateria}`;

          const content = `
            <div>
              <div style="font-size: 0.85rem; color: gray; margin-bottom: 4px;">${carreramateria}</div>
              <div>${solicitud.descripcion}</div>
            </div>
          `;

          return (
            <Card
              key={solicitud.id_solicitud}
              title={nombreCompleto}
              content={content}
              date={new Date(solicitud.created_at).toLocaleDateString()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BuscarAsesorias;
