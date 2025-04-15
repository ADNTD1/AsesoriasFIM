import LoginForm from "../components/LoginForm";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Login() {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center">
        <DotLottieReact
          className="w-160 h-160"
          src="src/modules/Login/assets/animations/AnimLogin.lottie"
          loop
          autoplay
        />
      </div>
      <LoginForm></LoginForm>
    </div>
  );
}

export default Login;
