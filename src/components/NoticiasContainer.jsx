import React from "react";
import NoticiaIndividual from "./NoticiaIndividual";

const NoticiasContainer = () => {
  const noticias = [
    {
      titulo: "¡A consolidar la calidad y la mejora continua! Concluyen en la UAS los trabajos de evaluación por parte de los CIEES para la acreditación institucional",
      contenido:
        "Luego de someterse a la revisión externa con fines de obtener la Acreditación Institucional, la Universidad Autónoma de Sinaloa (UAS) dio por concluidos los trabajos de la Visita in Situ por parte de los integrantes de la Comisión de Pares Académicos Externos de los Comités Interinstitucionales para la Evaluación de la Educación Superior (CIEES).",
    },
    {
      titulo: "En el marco del Día del Trabajo, el Rector Jesús Madueña Molina refrenda su compromiso y agradecimiento con la gran base trabajadora de la UAS",
      contenido: "En el marco de la conmemoración del Día Internacional del Trabajo, el Rector de la Universidad Autónoma de Sinaloa (UAS), el doctor Jesús Madueña Molina agradeció y extendió su reconocimiento a las y los trabajadores universitarios que con su labor diaria engrandecen a la casa de estudios y refrendó su compromiso con ellos de salvaguardar sus derechos laborales, ingresos y la estabilidad de su centro de trabajo.",
    },
    {
      titulo: "¡Compromiso con la excelencia académica! Inicia la UAS los trabajos de evaluación de los CIEES para obtener la Acreditación Institucional",
      contenido: "Iniciaron formalmente los trabajos de la Visita In Situ de la Comisión de Pares Académicos Externos de los Comités Interinstitucionales para la Evaluación de la Educación Superior (CIEES) para evaluar a la Universidad Autónoma de Sinaloa (UAS) con fines de obtener la Acreditación Institucional, lo que reafirma el compromiso de esta Casa de Estudios con la excelencia académica y la mejora continua en la educación Superior.",
    },
  ];

  const containerStyle = {
    marginTop: "40px",
    backgroundColor: "#f9f9f9",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    color: "#1D3C6D",
    marginBottom: "20px",
    fontWeight: "600",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Noticias Recientes</h2>
      {noticias.map((noticia, index) => (
        <NoticiaIndividual
          key={index}
          titulo={noticia.titulo}
          contenido={noticia.contenido}
        />
      ))}
    </div>
  );
};

export default NoticiasContainer;
