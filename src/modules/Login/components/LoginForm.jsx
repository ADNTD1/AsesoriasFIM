import { useState } from "react";
import LoginButton from "./LoginButton";

function LoginForm() {
  const [accountNumber, setAccountNumber] = useState("");
  const [accountError, setAccountError] = useState(false);
  const [password, setPassword] = useState("");

  const onAccountChange = (e) => {
    setAccountNumber(e.target.value);
    setAccountError(false);
  };

  const onAccountVerify = () => {
    const isValid = /^\d{8}$/.test(accountNumber);
    setAccountError(!isValid);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const isFormValid =
    !accountError && /^\d{8}$/.test(accountNumber) && password.trim() !== "";

  return (
    <div className="flex items-center justify-center p-6 sm:p-12">
      <form className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-blue-700 tracking-wide">
          Iniciar sesión
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Número de cuenta
          </label>
          <input
            value={accountNumber}
            onChange={onAccountChange}
            onBlur={onAccountVerify}
            type="text"
            maxLength={8}
            inputMode="numeric"
            className={`block w-full rounded-lg border ${
              accountError ? "border-red-500" : "border-gray-300"
            } p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
            placeholder="Ej. 12345678"
          />
          {accountError && (
            <p className="text-red-500 text-sm mt-1">
              El número de cuenta debe tener exactamente 8 dígitos.
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            NIP
          </label>
          <input
            type="password"
            onChange={onPasswordChange}
            className="block w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="••••••••"
          />
        </div>

        <div className="text-right">
          <p className="text-sm text-blue-600 hover:underline cursor-pointer">
            ¿Olvidaste tu NIP?
          </p>
        </div>

        <div className="flex justify-center pt-2">
          <LoginButton
            buttonText={"Iniciar sesión"}
            isEmailValid={isFormValid}
            email={accountNumber}
            password={password}
          />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;