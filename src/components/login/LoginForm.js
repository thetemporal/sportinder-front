import React from "react";
import GoogleButton from "react-google-button";
import FormHeader from "../shared/FormHeader";
import Input from "../shared/Input";

export default function LoginForm() {
  return (
    <div className="mt-6">
      <FormHeader
        title="Bienvenido a Adventure.ar"
        subtitle="¿No tenés cuenta?"
        action="Registrate!"
      />
      <div className="login-form">
        <h3 className="font-bold text-xl mb-3">Loguearme</h3>
        <div className="form-group">
          <Input
            name="email"
            placeholder="Email"
            type="email"
            labelText="Ingresa tu email"
          />
          <Input
            name="password"
            placeholder="Contraseña"
            type="password"
            labelText="Ingresa Contraseña"
          />

          <div className="grid grid-cols-1 mt-8">
            <button className="bg-coral hover:bg-buttonHover text-white py-2 px-4 rounded tracking-wider mb-1 register-button">
              Loguearme
            </button>
          </div>
          <p className="text-center mt-2 mb-2">Ó</p>
          <div className="grid grid-cols-1">
            <GoogleButton
              className="google-button pr-9"
              type="light"
              label="Loguearme usando Google"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
