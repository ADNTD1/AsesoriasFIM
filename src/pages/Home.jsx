// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { UserGroupIcon, ClockIcon } from "@heroicons/react/outline";
import Navbar from "../components/Navbar";
import Lottie from 'lottie-react';
import HomeAnim from "../components/HomeAnim";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/login");
  };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto',
          paddingTop: '6rem',
          paddingBottom: '4rem',
        }}
      >
        <h2
          style={{
            color: '#1D3C6D',
            textAlign: 'center',
            fontSize: '2rem',
            marginBottom: '1.5rem',
            fontWeight: '600',
          }}
        >
          Bienvenido a Asesorías FIM
        </h2>
        <HomeAnim />
        <p
          style={{
            fontSize: '1.1rem',
            color: '#444',
            textAlign: 'center',
            margin: '0 auto 2.5rem',
            maxWidth: '700px',
            lineHeight: '1.6',
          }}
        >
          Encuentra el apoyo académico que necesitas. Conecta con asesores expertos en diferentes materias y mejora tu aprendizaje de forma rápida, personalizada y eficiente.
        </p>

        <ul
          style={{
            listStyleType: 'none',
            paddingLeft: 0,
            margin: '0 auto 2.5rem',
            maxWidth: '700px',
          }}
        >
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
            <UserGroupIcon style={{ width: '28px', height: '28px', color: '#1D3C6D', marginRight: '12px' }} />
            <span style={{ fontSize: '1rem', color: '#333' }}>
              <strong>Asesores Calificados:</strong> Aprende de expertos apasionados por la enseñanza y con experiencia comprobada.
            </span>
          </li>

          <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
            <ClockIcon style={{ width: '28px', height: '28px', color: '#1D3C6D', marginRight: '12px' }} />
            <span style={{ fontSize: '1rem', color: '#333' }}>
              <strong>Sesiones Flexibles:</strong> Ajusta el horario según tus necesidades, porque tu tiempo es valioso.
            </span>
          </li>
        </ul>

        {/* Botón principal */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={handleStart}
            style={{
              backgroundColor: '#1D3C6D',
              color: '#fff',
              padding: '14px 36px',
              fontSize: '1.1rem',
              fontWeight: '600',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#163053';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#1D3C6D';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Comenzar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
