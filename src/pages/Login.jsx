import Navbar from "../components/Navbar";
import LoginForm from "../modules/Login/components/LoginForm";

function Login() {
  return (
    <div className="h-screen bg-gray-100">
      {/* Navbar fija arriba */}
      <Navbar />

      {/* Contenedor del formulario centrado */}
      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <div className="p-8 w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
