import React from "react";
import { Input } from "../shared";
import RegisterHeader from "./RegisterHeader";

export default function RegisterForm() {
  return (
    <div>
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
        </div>
      </div>
    </div>
  );
}
