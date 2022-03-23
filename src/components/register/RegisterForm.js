import React from "react";
import GoogleButton from "react-google-button";
import Input from "../shared/Input";

import RegisterHeader from "./RegisterHeader";
import "./registerStyles.css";

export default function RegisterForm() {
  return (
    <div className="mt-6">
      <RegisterHeader />
      <div className="register-form">
        <h3 className="font-bold text-xl mb-3">Registrarme</h3>
        <div className="form-group">
          <Input
            name="email"
            placeholder="Email"
            type="email"
            labelText="Ingresa tu email"
          />
          <div className="grid grid-cols-2 gap-3 mt-4">
            <Input
              name="name"
              placeholder="Nombre"
              type="text"
              labelText="Nombre"
            />
            <Input
              name="surname"
              placeholder="Apellido"
              type="text"
              labelText="Apellido"
            />
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <Input
              name="phone"
              placeholder="Telefono"
              type="text"
              labelText="Telefono"
            />
          </div>
          <Input
            name="password"
            placeholder="Contraseña"
            type="password"
            labelText="Ingresa Contraseña"
            footerNote="Debe contener mas de 8 caracteres, mayúsculas y un caracter especial"
          />
          <Input
            name="password"
            placeholder="Contraseña"
            type="password"
            labelText="Confirma Contraseña"
          />
          <div className="grid grid-cols-1 mt-5">
            <button className="bg-coral hover:bg-buttonHover text-white py-2 px-4 rounded tracking-wider mb-1 register-button">
              Registrarme
            </button>
          </div>
          <p className="text-center mt-2 mb-2">Ó</p>
          <div className="grid grid-cols-1">
            <GoogleButton
              className="google-button pr-9"
              type="light"
              label="Registrar usando Google"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
