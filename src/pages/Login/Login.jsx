import "../Login/Login.css";

import React, { useState } from "react";
import LogoFrag from "../../components/Logo/Logo";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import LoginService from "../../services/loginService/LoginService";

function Login() {

    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");

    return (
        <div className="base-container">
            <div className="content">
                <div className="logo">
                    <LogoFrag large/>
                </div>
                
                <span className="logon">Faça seu Logon</span>

                <div className="form">
                    <form>
                        <div className="form-group">
                            <CustomInput name="E-mail" type="text" onChange={e => setUser(e.target.value)}/>
                        </div>
                        
                        <div className="form-group">
                            <CustomInput name="Senha" type="password" onChange={e => setPassword(e.target.value)}/>
                        </div>

                        <div className="send-button">
                            <CustomButton text="Entrar" iconName="send" color="secondary" onClick={() => LoginService(password, user)}/>
                        </div>
                    </form>
                </div>

                <a href="/forgot" className="forgot"><span>Esqueci minha senha</span></a>

                <a href="/account" className="account"><span>Criar conta</span></a>
            </div>
        </div>
    )
}

export default Login
