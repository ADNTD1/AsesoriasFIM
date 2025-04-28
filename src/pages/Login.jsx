import Navbar from "../components/Navbar";
import LoginForm from "../modules/Login/components/LoginForm";

function Login() {
  return (
    
    <div className="h-screen flex items-center justify-center bg-gray-100">
      {/* Contenedor del formulario centrado */}
      <div className="p-8 w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
