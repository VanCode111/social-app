import React, { useState } from "react";
import "./Auth.scss";
import { registration, login } from "../../http/userAPI";
import Input from "../../components/UI/Input/Input";
import { Header } from "../../components";
import Button from "../../components/UI/Button/Button";
import { useDispatch } from "react-redux";
import { setAuth, setUser } from "../../store";

function Auth() {
  const [email, setEmail] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const authHandle = async () => {
    try {
      let res;
      if (isLogin) {
        res = await login({ email, password });
      } else {
        res = await registration({ email, password });
      }
      dispatch(setAuth(true));
      dispatch(setUser({ link: "/" + res.router.path }));
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const changeAuthPage = () => {
    setEmail("");
    setPassword("");
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="auth">
      <Header />
      <div className="auth__page">
        <div className="auth__form-card">
          <form action="" className="auth__form">
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Логин"
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Пароль"
            />
          </form>
          <Button onClick={authHandle} className="auth__button" text="Войти" />
          <div className="auth__bottom">
            <p className="auth__desc">
              {isLogin ? "Нет аккаунта?" : "Есть аккаунт?"}
            </p>
            <a href="#" onClick={changeAuthPage} className="auth__link">
              {isLogin ? "Зарегистрироваться" : "Войти"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
