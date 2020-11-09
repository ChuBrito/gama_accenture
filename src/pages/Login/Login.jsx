import "../Login/Login.css";

import React from "react";
import LogoFrag from "../../components/Logo/Logo";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";

function Login() {
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
                            <CustomInput name="E-mail" type="text"/>
                        </div>
                        
                        <div className="form-group">
                            <CustomInput name="Senha" type="password"/>
                        </div>

                        <div className="send-button">
                            <CustomButton text="Entrar" iconName="send" color="secondary"/>
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
