import { useState } from "react";
import { useUnit } from "effector-react";
import { loginFx } from "../../stores/userStore";
import { NavLink, useNavigate } from "react-router-dom";
import './AuthPage.css'

const AuthPage = () => {
  const loginFn = useUnit(loginFx);
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  async function Auth() {
    if (!login.trim() || !password.trim()) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    if (password.length < 6) {
      alert("Пароль должен содержать минимум 6 символов.");
      return;
    }

    try {
      await loginFn({ login, password });
      navigate('/editor');
    } catch (err) {
      console.error(err);
      alert("Неверный логин или пароль.");
    }
  }

  return (
    <div className="authForm">
      <p>Авторизация</p>

      <input
        type="text"
        placeholder="Логин"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />

      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={Auth}>Войти</button>

      <NavLink to="/reg" className="link">Зарегистрироваться</NavLink>
    </div>
  );
};

export default AuthPage;
