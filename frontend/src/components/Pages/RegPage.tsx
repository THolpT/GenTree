import { useUnit } from "effector-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserFx } from "../../stores/userStore";
import './RegPage.css'

const RegPage = () => {
  const register = useUnit(createUserFx);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  async function Reg() {

    if (!email.trim() || !login.trim() || !password.trim()) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Введите корректный email.");
      return;
    }

    if (password.length < 6) {
      alert("Пароль должен содержать минимум 6 символов.");
      return;
    }

    try {
      await register({ email, login, password });
      navigate('/');
    } catch (err) {
      console.error(err);
      alert("Ошибка при регистрации. Попробуйте снова.");
    }
  }

  return (
    <div className="authForm">
      <p>Регистрация</p>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

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

      <button onClick={Reg}>Зарегистрироваться</button>
      <NavLink to="/" className="link">Авторизоваться</NavLink>
    </div>
  );
};

export default RegPage;
