import { useEffect, useState } from "react";

function Menu() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const fetchUsuario = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await fetch("http://localhost:3001/usuario", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await response.json();
        if (data.success) {
          setUsuario(data.usuario);
        }
      } catch (error) {
        console.error("Error al obtener usuario:", error);
      }
    };

    fetchUsuario();
  }, []);

  return (
    <div className="flex h-screen">
      {/* Menú lateral */}
      <aside className="w-1/4 bg-gray-800 text-white p-5">
        {usuario ? (
          <div className="text-center">
            <img src={usuario.foto} alt="Foto de perfil" className="w-20 h-20 rounded-full mx-auto" />
            <h2 className="mt-3 text-xl font-semibold">{usuario.nombreAlum}</h2>
          </div>
        ) : (
          <p className="text-center">Cargando usuario...</p>
        )}
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-5">
        <h1 className="text-3xl font-bold text-gray-700">Menú Principal</h1>
      </main>
    </div>
  );
}

export default Menu;
