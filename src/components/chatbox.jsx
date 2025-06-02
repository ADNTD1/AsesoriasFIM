import { useEffect, useRef, useState } from "react";
import { supabase } from "../server/Supabase/supabaseClient"; // Asegúrate de tener la instancia

function ChatBox({ asesorId, alumnoId }) {
  const [mensajes, setMensajes] = useState([]);
  const [nuevoMensaje, setNuevoMensaje] = useState("");
  const chatEndRef = useRef(null);

  // Cargar mensajes desde Supabase
  useEffect(() => {
    const cargarMensajes = async () => {
      const { data, error } = await supabase
        .from("mensajes_chat")
        .select("*")
        .or(`remitente.eq.${asesorId},remitente.eq.${alumnoId}`)
        .order("fecha_envio", { ascending: true });

      if (!error) setMensajes(data);
    };

    cargarMensajes();
  }, [asesorId, alumnoId]);

  // Scroll al final
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensajes]);

  const enviarMensaje = async () => {
    if (!nuevoMensaje.trim()) return;

    const { data, error } = await supabase.from("mensajes_chat").insert([
      {
        remitente: alumnoId,
        receptor: asesorId,
        mensaje: nuevoMensaje,
      },
    ]);

    if (!error) {
      setMensajes((prev) => [...prev, { mensaje: nuevoMensaje, remitente: alumnoId }]);
      setNuevoMensaje("");
    }
  };

  return (
    <div className="flex flex-col h-full max-h-[600px] w-full bg-white border rounded shadow-md">
      {/* Cabecera */}
      <div className="p-4 border-b font-semibold bg-gray-100">
        Chat con Asesor
      </div>

      {/* Mensajes */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {mensajes.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
              msg.remitente === alumnoId
                ? "bg-blue-500 text-white self-end ml-auto"
                : "bg-gray-200 text-black self-start mr-auto"
            }`}
          >
            {msg.mensaje}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t flex items-center gap-2">
        <input
          type="text"
          value={nuevoMensaje}
          onChange={(e) => setNuevoMensaje(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && enviarMensaje()}
          placeholder="Escribe tu mensaje..."
          className="flex-1 border rounded px-3 py-2 text-sm"
        />
        <button
          onClick={enviarMensaje}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
