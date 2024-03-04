import { Link } from "react-router-dom";
import React, { useState } from "react";

import classes from "./Registration.module.css";
import logo from "../../assets/logo.svg";

export default function Registration() {
    const [currentForm, setCurrentForm] = useState("email");

    return (
        <div className={classes.registrationPage}>
            <div className={classes.registrationFormContainer}>
                <img src={logo} alt="" />
                <div className={classes.registrationTypeSelector}>
                    <span>Выберите тип регистрации:</span>
                    <SelectRegistrationTypeButton
                        isActive={currentForm==="email"}
                        onClick={() => setCurrentForm("email")}
                    >
                        Почта
                    </SelectRegistrationTypeButton>
                    <SelectRegistrationTypeButton
                        isActive={currentForm==="phone"}
                        onClick={() => setCurrentForm("phone")}
                    >
                        Телефон
                    </SelectRegistrationTypeButton>
                </div>
                {currentForm === "email" ? (
                    <RegistrationByEmailForm />
                ) : (
                    <RegistrationByPhoneNumberForm />
                )}
                <span className="">
                    Уже есть аккаунт? <Link to="/login">Войти</Link>
                </span>
            </div>
        </div>
    );
}

function SelectRegistrationTypeButton({children, isActive, onClick}) {
    return (
        <button
            className={
                isActive
                    ? `${classes.registrationButton} ${classes.registrationButtonActive}`
                    : classes.registrationButton
            }
            onClick={onClick}
        >
            {children}
        </button>
    );
}

function RegistrationByEmailForm() {
    return (
        <form className={classes.registrationForm} autoComplete="on">
            <label
                htmlFor="registrationEmail"
                className={classes.registrationLabel}
            >
                Email:
            </label>
            <input
                type="text"
                name="registrationEmail"
                placeholder="Введите email..."
                autoComplete="email"
                className={classes.registrationInput}
            />

            <label
                htmlFor="registrationUsername"
                className={classes.registrationLabel}
            >
                Имя пользователя:
            </label>
            <input
                type="text"
                name="registrationUsername"
                placeholder="Введите имя пользователя..."
                autoComplete="text"
                className={classes.registrationInput}
            />

            <label
                htmlFor="registrationPass"
                className={classes.registrationLabel}
            >
                Пароль:
            </label>
            <input
                type="password"
                name="registrationPass"
                placeholder="Введите пароль..."
                autoComplete="pass"
                className={classes.registrationInput}
            />

            <label
                htmlFor="registrationRepeatPass"
                className={classes.registrationLabel}
            >
                Повтор пароля:
            </label>
            <input
                type="password"
                name="registrationRepeatPass"
                placeholder="Введите пароль ещё раз..."
                autoComplete="pass"
                className={classes.registrationInput}
            />

            <button className={classes.registrationButton} type="submit">
                Зарегестрироваться
            </button>
        </form>
    );
}

function RegistrationByPhoneNumberForm() {
    return (
        <form className={classes.registrationForm} autoComplete="on">
            <label
                htmlFor="registrationPhoneNumber"
                className={classes.registrationLabel}
            >
                Номер телефона:
            </label>
            <input
                type="text"
                name="registrationPhoneNumber"
                placeholder="Введите номер телефона..."
                autoComplete="phone"
                className={classes.registrationInput}
            />

            <label
                htmlFor="registrationUsername"
                className={classes.registrationLabel}
            >
                Имя пользователя:
            </label>
            <input
                type="text"
                name="registrationUsername"
                placeholder="Введите имя пользователя..."
                autoComplete="text"
                className={classes.registrationInput}
            />

            <label
                htmlFor="registrationPass"
                className={classes.registrationLabel}
            >
                Пароль:
            </label>
            <input
                type="password"
                name="registrationPass"
                placeholder="Введите пароль..."
                autoComplete="pass"
                className={classes.registrationInput}
            />

            <label
                htmlFor="registrationRepeatPass"
                className={classes.registrationLabel}
            >
                Повтор пароля:
            </label>
            <input
                type="password"
                name="registrationRepeatPass"
                placeholder="Введите пароль ещё раз..."
                autoComplete="pass"
                className={classes.registrationInput}
            />

            <button className={classes.registrationButton} type="submit">
                Зарегестрироваться
            </button>
        </form>
    );
}
