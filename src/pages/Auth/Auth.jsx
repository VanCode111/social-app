import React, { useState } from "react";
import "./Auth.scss";
import { registration, login } from "../../http/userAPI";
import Input from "../../components/UI/Input/Input";
import { Header } from "../../components";
import Button from "../../components/UI/Button/Button";
import { useDispatch } from "react-redux";
import { setAuth, setUser } from "../../store";
import { connectToSocket } from "../../sockets";

function Auth() {
  const [email, setEmail] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();
  const authHandle = async () => {
    setLoading(true);
    try {
      let res;
      if (isLogin) {
        res = await login({ email, password });
      } else {
        res = await registration({ email, password, name, lastName });
      }
      dispatch(setAuth(true));
      dispatch(setUser({ profile: res.profile, link: "/" + res.router.path }));
      connectToSocket(res.profile.user);
    } catch (e) {
      if (e.response) {
        console.log(e.response.data);
      }
      console.log(e);
    }
    setLoading(false);
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
        {isLogin ? (
          <div className="auth__form-card">
            <p className="auth__form-title">Авторизация</p>
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
            <Button
              onClick={authHandle}
              className="auth__button"
              text="Войти"
              loading={loading}
            />
            <div className="auth__bottom">
              <p className="auth__desc">
                {isLogin ? "Нет аккаунта?" : "Есть аккаунт?"}
              </p>
              <a href="#" onClick={changeAuthPage} className="auth__link">
                {isLogin ? "Зарегистрироваться" : "Войти"}
              </a>
            </div>
          </div>
        ) : (
          <div className="auth__form-card">
            <p className="auth__form-title">Регистрация</p>
            <form action="" className="auth__form">
              <Input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Логин"
              />
              <Input
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                placeholder="Фамилия"
              />
              <Input
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Имя"
              />
              <Input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Пароль"
              />
            </form>
            <Button
              onClick={authHandle}
              className="auth__button"
              text="Войти"
              loading={loading}
            />
            <div className="auth__bottom">
              <p className="auth__desc">
                {isLogin ? "Нет аккаунта?" : "Есть аккаунт?"}
              </p>
              <a href="#" onClick={changeAuthPage} className="auth__link">
                {isLogin ? "Зарегистрироваться" : "Войти"}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Auth;
