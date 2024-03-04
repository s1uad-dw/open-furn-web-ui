import { Link } from "react-router-dom";

import classes from "./Login.module.css";
import logo from "../../assets/logo.svg";

export default function Login() {
    return (
        <div className={classes.loginPage}>
            <div className={classes.loginFormContainer}>
                <img src={logo} alt="" />
                <form className={classes.loginForm} autoComplete="on">
                    <label
                        htmlFor="loginPhoneEmail"
                        className={classes.loginLabel}
                    >
                        Логин/Номер телефона/Email:
                    </label>
                    <input
                        type="text"
                        name="loginPhoneEmail"
                        placeholder="Введите логин, телефон или email..."
                        autoComplete="username"
                        className={classes.loginInput}
                    />

                    <label
                        htmlFor="loginPhoneEmail"
                        className={classes.loginLabel}
                    >
                        Пароль:
                    </label>
                    <input
                        type="password"
                        name="loginPhoneEmail"
                        placeholder="Введите пароль..."
                        autoComplete="pass"
                        className={classes.loginInput}
                    />
                    <button className={classes.loginButton} type="submit">
                        Войти
                    </button>
                </form>
                <span>
                    Еще нет аккаунта?{" "}
                    <Link to="/registration">Зарегестрироваться</Link>
                </span>
            </div>
        </div>
    );
}
