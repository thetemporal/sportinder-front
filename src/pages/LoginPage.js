import React from "react";
import LoginForm from "../components/login/LoginForm";
import Logo from "../components/shared/Logo";
import "./loginPageStyles.css";

export default function LoginPage() {
  return (
    <section>
      <div className="login-section mt-4 grid grid-cols-2 gap-20">
        <Logo />
        <LoginForm />
      </div>
    </section>
  );
}
