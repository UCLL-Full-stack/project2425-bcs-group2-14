import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Login = ({ onLogin }) => {
    const { t } = useTranslation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username, password);
    };

    return (
        <div className="login-container">
            <h2>{t("login.title")}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">{t("login.username_label")}:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder={t("login.username_placeholder")}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">{t("login.password_label")}:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={t("login.password_placeholder")}
                        required
                    />
                </div>
                <button type="submit">{t("login.button")}</button>
            </form>
        </div>
    );
};

export default Login;
