import ChatBox from "../components/chatbox";

function PaginaDeChat() {
  const asesorId = "UUID_ASESOR";
  const alumnoId = "UUID_ALUMNO";

  return (
    <div className="p-8">
      <ChatBox asesorId={asesorId} alumnoId={alumnoId} />
    </div>
  );
}
