const obtenerSolicitudes = async () => {
    const { data, error } = await supabase.from("solicitud_asesoria").select("*");
    if (error) {
        console.error("Error al obtener solicitudes:", error);
        return null;
    }
    return data;
};