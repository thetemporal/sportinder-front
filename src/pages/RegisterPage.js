import React from "react";
import RegisterForm from "../components/register/RegisterForm";
import Logo from "../components/shared/Logo";
import "./registerPageStyles.css";

export default function RegisterPage() {
  return (
    <section>
      <div className="register-section mt-4 grid grid-cols-2 gap-20 sm:flex-col md:flex-col">
        <Logo />
        <RegisterForm />
      </div>
    </section>
  );
}
