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
      try {
        await register({ email, login, password });
        navigate('/')
      } catch (err) {
        console.error(err);
      }
    }
  
    return (
      <div className="authForm">
        <p>Регистрация</p>
        <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Логин" value={login} onChange={(e) => setLogin(e.target.value)} />
        <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={Reg}>Зарегистрироваться</button>
        <NavLink to="/" className="link">Авторизоваться</NavLink>
      </div>
    );
  };
  
  export default RegPage;
  