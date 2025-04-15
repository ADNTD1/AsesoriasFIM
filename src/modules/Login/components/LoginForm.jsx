import { useState } from "react";
import { validateEmail } from "../../../utils";
import LoginButton from "./LoginButton";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState("");

  const onEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const onEmailVerify = (e) => {
    if (!validateEmail(e.target.value)) {
      setEmailError(true);
    }
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const isEmailValid =
    !emailError && validateEmail(email) && password.trim() !== "";

  return (
    <div className="flex items-center justify-center p-8">
      <form className="w-full max-w-md space-y-6">
        <h2 className="text-2xl font-semibold text-blue-700">Iniciar sesión</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Correo
          </label>
          <input
            value={email}
            onChange={onEmailChange}
            onBlur={onEmailVerify}
            type="email"
            className={`mt-1 block w-full border ${
              emailError ? "border-red-500" : "border-gray-300"
            } rounded-md p-2`}
            placeholder="ejemplo@correo.com"
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">
              Correo electrónico inválido.
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <input
            type="password"
            onChange={onPasswordChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="••••••••"
          />
        </div>

        <div>
          <p className="text-sm font-light cursor-pointer">
            ¿Olvidaste tus credenciales de acceso?
          </p>
        </div>

        <div className="flex justify-center">
          <LoginButton
            buttonText={"Iniciar sesión"}
            isEmailValid={isEmailValid}
            email={email}
            password={password}
          ></LoginButton>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
