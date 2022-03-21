import React from "react";
import RegisterForm from "../components/register/RegisterForm";
import Logo from "../components/shared/Logo";

export default function RegisterPage() {
  return (
    <section>
      <div className="register-section mt-4 grid grid-cols-2 gap-20">
        <Logo />
        <RegisterForm />
      </div>
    </section>
  );
}
