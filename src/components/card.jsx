import React, { useState, useEffect } from "react";
import { supabase } from "../server/Supabase/supabaseClient"; // Asegúrate de que la ruta sea correcta

const Card = ({ id_solicitud, title, content, date }) => {
  const [esAsesor, setEsAsesor] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showMensaje, setShowMensaje] = useState(false);
  const [mensajeError, setMensajeError] = useState(false);
  const [mensajeTexto, setMensajeTexto] = useState("");

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
      const usuario = JSON.parse(usuarioGuardado);
      setEsAsesor(!!usuario.asesor);
    }
  }, []);

  const handleClick = () => {
    if (esAsesor) {
      setShowConfirm(true);
    } else {
      setMensajeError(true);
      setMensajeTexto("No puedes realizar esta acción porque no eres ASESOR.");
    }
  };

  const handleConfirmYes = async () => {
    setShowConfirm(false);

    const { error } = await supabase
      .from("solicitud_asesoria")
      .update({ estatus: false }) // Cambia a false o true según lo que quieras
      .eq("id_solicitud", id_solicitud);

    if (error) {
      setMensajeTexto("Error al aceptar la asesoría. Intenta de nuevo.");
      setMensajeError(true);
    } else {
      setMensajeTexto("Has aceptado la asesoría.");
      setMensajeError(false);
    }

    setShowMensaje(true);
  };

  const handleConfirmNo = () => {
    setShowConfirm(false);
  };

  const closeMensaje = () => {
    setShowMensaje(false);
    setMensajeError(false);
    setMensajeTexto("");
  };

  return (
    <>
      <style>{`
        .card {
          padding: 20px;
          border-radius: 8px;
          background-color: #ffffff;
          color: #333;
          transition: transform 0.3s ease;
          cursor: pointer;
          margin: 20px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          border: 1px solid #e0e0e0;
          max-width: 350px;
          word-wrap: break-word;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .card__title {
          font-size: 1.25rem;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .card__content {
          font-size: 1rem;
          margin-bottom: 10px;
          color: #555;
          min-height: 50px;
        }

        .card__date {
          font-size: 0.875rem;
          color: #777;
          text-align: right;
        }

        .card__arrow {
          margin-top: 10px;
          text-align: right;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(20, 20, 20, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 25px 30px;
          width: 320px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
          text-align: center;
          animation: fadeInSlide 0.35s ease-out;
        }

        .modal h2 {
          margin-top: 0;
          font-size: 20px;
          color: #333;
        }

        .modal p {
          margin: 16px 0;
          font-size: 16px;
          color: #444;
        }

        .modal__btn-wrapper {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .modal button {
          padding: 8px 20px;
          font-size: 14px;
          background-color: #0078d7;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          min-width: 80px;
          transition: background-color 0.3s ease;
        }

        .modal button:hover {
          background-color: #005fa1;
        }

        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="card" onClick={handleClick}>
        <h3 className="card__title">{title}</h3>
        <div
          className="card__content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="card__date">{date}</div>
        <div className="card__arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="15"
            width="15"
          >
            <path
              fill="#333"
              d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
            />
          </svg>
        </div>
      </div>

      {/* Modal Confirmación */}
      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Confirmación</h2>
            <p>¿Seguro que quieres aceptar la asesoría?</p>
            <div className="modal__btn-wrapper">
              <button onClick={handleConfirmYes}>Sí</button>
              <button onClick={handleConfirmNo}>No</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Mensajes */}
      {(showMensaje || mensajeError) && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{mensajeError ? "Acceso denegado" : "Mensaje"}</h2>
            <p>{mensajeTexto}</p>
            <div className="modal__btn-wrapper">
              <button onClick={closeMensaje}>OK</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
