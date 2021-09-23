import React from "react";
import "./Auth.scss";
import Input from "../../components/UI/Input/Input";
import { Header } from "../../components";
import Button from "../../components/UI/Button/Button";
import { useDispatch } from "react-redux";
import { setAuth } from "../../store";

function Auth() {
  const dispatch = useDispatch();
  const authHandle = () => {
    dispatch(setAuth(true));
  };

  return (
    <div className="auth">
      <Header />
      <div className="auth__page">
        <div className="auth__form-card">
          <form action="" className="auth__form">
            <Input placeholder="Логин" />
            <Input type="password" placeholder="Пароль" />
          </form>
          <Button onClick={authHandle} className="auth__button" text="Войти" />
        </div>
      </div>
    </div>
  );
}

export default Auth;
