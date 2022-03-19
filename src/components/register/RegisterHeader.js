import React from "react";

export default function RegisterHeader() {
  return (
    <div className="register-header mt-5 mb-3">
      <h2 className="font-bold text-lg">Bienvenido a Adventure.ar</h2>
      <h4 className="text-sm">
        ¿Ya tenes cuenta? <br />
        <a href="" className="text-[#27ccbc] hover:text-cyan-700">
          Logueate!
        </a>
      </h4>
    </div>
  );
}
