import React from "react";
import "./Auth.scss";
import { Header } from "../../components";
import Button from "../../components/UI/Button/Button";

function Auth() {
  return (
    <div className="auth">
      <Header />
      <div className="auth__page">
        <div className="auth__form-card">
          <form action="" className="auth__form">
            <input type="text" className="input auth__form-input" />
            <input type="text" className="input auth__form-input" />
          </form>
          <Button className="auth__button" text="Войти" />
        </div>
      </div>
    </div>
  );
}

export default Auth;
