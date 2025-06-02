import React from 'react';

const AyudaModal = () => {
  return (
    <div className="fixed bottom-6 right-6 bg-white border border-gray-300 shadow-xl rounded-lg p-4 w-80 z-50">
      <h2 className="text-lg font-semibold text-blue-900 mb-2">¿Necesitas ayuda?</h2>
      <p className="text-sm text-gray-700">
        Si tienes problemas para iniciar sesión, contáctanos:
      </p>
      <ul className="mt-2 text-sm text-gray-800">
        <li><strong>Correo:</strong> soporte@uas.edu.mx</li>
        <li><strong>Teléfono:</strong> (667) 123-4567</li>
        <li><strong>Horario:</strong> Lun a Vie, 8:00am - 4:00pm</li>
      </ul>
    </div>
  );
};

export default AyudaModal;
