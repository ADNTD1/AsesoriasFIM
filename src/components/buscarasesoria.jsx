import React, { useState, useEffect } from "react";
import { supabase } from "../server/Supabase/supabaseClient";
import Card from "./card";

const BuscarAsesorias = () => {
  const [solicitudes, setSolicitudes] = useState([]);
  const [carreras, setCarreras] = useState([]);
  const [materias, setMaterias] = useState([]);
  const [materiasModal, setMateriasModal] = useState([]);

  const [carreraSeleccionada, setCarreraSeleccionada] = useState("");
  const [materiaSeleccionada, setMateriaSeleccionada] = useState("");

  const [mostrarModal, setMostrarModal] = useState(false);
  const [nuevaDescripcion, setNuevaDescripcion] = useState("");
  const [nuevaCarrera, setNuevaCarrera] = useState("");
  const [nuevaMateria, setNuevaMateria] = useState("");

  // Cargar solicitudes y carreras al iniciar
  useEffect(() => {
    obtenerSolicitudes();
    obtenerCarreras();
    obtenerMaterias();  // Carga todas las materias inicialmente
  }, []);

  const obtenerSolicitudes = async (filtros = {}) => {
    let query = supabase
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

    if (filtros.id_carrera) query = query.eq("id_carrera", filtros.id_carrera);
    if (filtros.id_materia) query = query.eq("id_materia", filtros.id_materia);

    const { data, error } = await query;
    if (error) {
      console.error("Error obteniendo solicitudes:", error);
    } else {
      setSolicitudes(data);
    }
  };

  const obtenerCarreras = async () => {
    const { data, error } = await supabase.from("carrera").select("id_carrera, descripcion").order("descripcion");
    if (error) {
      console.error("Error obteniendo carreras:", error);
    } else {
      setCarreras(data);
    }
  };

  const obtenerMaterias = async (idCarrera = null, setMateriasCallback = setMaterias) => {
    let query = supabase.from("materia").select("id_materia, descripcion").order("descripcion");

    if (idCarrera) {
      query = query.eq("id_carrera", idCarrera);
    }

    const { data, error } = await query;
    if (error) {
      console.error("Error obteniendo materias:", error);
    } else {
      setMateriasCallback(data);
    }
  };

  const manejarFiltro = (tipo, valor) => {
    if (tipo === "carrera") {
      setCarreraSeleccionada(valor);
      obtenerMaterias(valor);  // Filtra materias por carrera seleccionada
      setMateriaSeleccionada("");  // Reinicia selección de materia
    } else if (tipo === "materia") {
      setMateriaSeleccionada(valor);
    }

    const filtros = {};
    const carreraVal = tipo === "carrera" ? valor : carreraSeleccionada;
    const materiaVal = tipo === "materia" ? valor : materiaSeleccionada;

    if (tipo === "carrera") {
      if (valor) filtros.id_carrera = valor;
    } else if (carreraSeleccionada) {
      filtros.id_carrera = carreraSeleccionada;
    }

    if (tipo === "materia") {
      if (valor) filtros.id_materia = valor;
    } else if (materiaSeleccionada) {
      filtros.id_materia = materiaSeleccionada;
    }

    obtenerSolicitudes(filtros);
  };

  const abrirModal = () => {
    setNuevaDescripcion("");
    setNuevaCarrera("");
    setNuevaMateria("");
    setMateriasModal([]);  // Vacía materias al abrir modal
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
  };

  const guardarSolicitud = async () => {
    if (!nuevaDescripcion || !nuevaCarrera || !nuevaMateria) {
      alert("Completa todos los campos");
      return;
    }

    const usuarioGuardado = localStorage.getItem("usuario");
    if (!usuarioGuardado) {
      alert("Usuario no identificado");
      return;
    }

    const usuario = JSON.parse(usuarioGuardado);

    const { error } = await supabase.from("solicitud_asesoria").insert([
      {
        descripcion: nuevaDescripcion,
        id_carrera: nuevaCarrera,
        id_materia: nuevaMateria,
        nocuenta: usuario.nocuenta,
      },
    ]);

    if (error) {
      console.error("Error guardando solicitud:", error);
      alert("Error al guardar la solicitud");
    } else {
      cerrarModal();
      obtenerSolicitudes();
    }
  };

  const manejarCambioCarreraModal = (valor) => {
    setNuevaCarrera(valor);
    setNuevaMateria("");
    if (valor) {
      obtenerMaterias(valor, setMateriasModal);
    } else {
      setMateriasModal([]);
    }
  };

  return (
    <div>
      {/* Filtros */}
      <div style={{
        position: "absolute", top: "100px", left: "50%", transform: "translateX(-50%)",
        display: "flex", backgroundColor: "#ffffff", padding: "10px", borderRadius: "8px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", alignItems: "center", gap: "10px"
      }}>
        <select value={carreraSeleccionada} onChange={(e) => manejarFiltro("carrera", e.target.value)}
          style={{ padding: "6px", borderRadius: "4px", border: "1px solid #ccc" }}>
          <option value="">Todas las carreras</option>
          {carreras.map((carrera) => (
            <option key={carrera.id_carrera} value={carrera.id_carrera}>{carrera.descripcion}</option>
          ))}
        </select>

        <select value={materiaSeleccionada} onChange={(e) => manejarFiltro("materia", e.target.value)}
          style={{ padding: "6px", borderRadius: "4px", border: "1px solid #ccc" }}>
          <option value="">Todas las materias</option>
          {materias.map((materia) => (
            <option key={materia.id_materia} value={materia.id_materia}>{materia.descripcion}</option>
          ))}
        </select>
      </div>

      {/* Tarjetas */}
      <div style={{
        marginTop: "180px", padding: "0 20px", display: "flex", flexWrap: "wrap", gap: "20px"
      }}>
        {solicitudes.map((solicitud) => {
          const usuario = solicitud.Usuario;
          const nombreCompleto = usuario ? `${usuario.nombre} ${usuario.ap1} ${usuario.ap2}` : "Sin nombre";
          const nombrecarrera = solicitud.carrera?.descripcion || "Sin identificar";
          const nombremateria = solicitud.materia?.descripcion || "Sin identificar";
          const carreramateria = `${nombrecarrera} - ${nombremateria}`;
          const content = `<div><div style="font-size: 0.85rem; color: gray; margin-bottom: 4px;">${carreramateria}</div><div>${solicitud.descripcion}</div></div>`;

          return <Card key={solicitud.id_solicitud} title={nombreCompleto} content={content} date={new Date(solicitud.created_at).toLocaleDateString()} />;
        })}
      </div>

      {/* Botón flotante + */}
      <button onClick={abrirModal} style={{
        position: "fixed", bottom: "30px", right: "30px", width: "60px", height: "60px",
        borderRadius: "50%", backgroundColor: "#1D3C6D", color: "white", fontSize: "36px",
        border: "none", cursor: "pointer", boxShadow: "0 2px 5px rgba(0,0,0,0.3)"
      }}>+</button>

      {/* Modal */}
      {mostrarModal && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.3)",
          display: "flex", justifyContent: "center", alignItems: "center"
        }}>
          <div style={{
            backgroundColor: "white", padding: "20px", borderRadius: "8px",
            width: "400px", boxShadow: "0px 2px 10px rgba(0,0,0,0.3)"
          }}>
            <h3>Nueva Solicitud</h3>

            <textarea placeholder="Descripción" value={nuevaDescripcion} onChange={(e) => setNuevaDescripcion(e.target.value)}
              style={{ width: "100%", height: "80px", marginBottom: "10px", padding: "6px" }} />

            <select value={nuevaCarrera} onChange={(e) => manejarCambioCarreraModal(e.target.value)}
              style={{ width: "100%", marginBottom: "10px", padding: "6px" }}>
              <option value="">Selecciona una carrera</option>
              {carreras.map((c) => (
                <option key={c.id_carrera} value={c.id_carrera}>{c.descripcion}</option>
              ))}
            </select>

            <select value={nuevaMateria} onChange={(e) => setNuevaMateria(e.target.value)}
              style={{ width: "100%", marginBottom: "10px", padding: "6px" }}>
              <option value="">Selecciona una materia</option>
              {materiasModal.map((m) => (
                <option key={m.id_materia} value={m.id_materia}>{m.descripcion}</option>
              ))}
            </select>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button onClick={cerrarModal} style={{ padding: "6px 12px" }}>Cancelar</button>
              <button onClick={guardarSolicitud} style={{ padding: "6px 12px", backgroundColor: "#1D3C6D", color: "white", border: "none" }}>Guardar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuscarAsesorias;
