import React from "react";

function Loader() {
  return (
    <div className="flex justify-center items-center">
      <div
        style={{
          width: "3.25em",
          transformOrigin: "center",
          animation: "rotate4 2s linear infinite",
        }}
      >
        <svg
          style={{
            fill: "none",
            stroke: "#1d4ed8", // Azul más claro para que haga juego con el login
            strokeWidth: 10,
            strokeDasharray: "2, 200",
            strokeDashoffset: 0,
            strokeLinecap: "round",
            animation: "dash4 1.5s ease-in-out infinite",
          }}
          className="loader"
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 50 50"
        >
          <circle cx="25" cy="25" r="20" />
        </svg>
      </div>

      <style>
        {`
          @keyframes rotate4 {
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes dash4 {
            0% {
              stroke-dasharray: 1, 200;
              stroke-dashoffset: 0;
            }
            50% {
              stroke-dasharray: 90, 200;
              stroke-dashoffset: -35px;
            }
            100% {
              stroke-dashoffset: -125px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Loader;
