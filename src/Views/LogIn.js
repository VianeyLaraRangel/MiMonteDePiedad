import React, { Component } from 'react';
import logo from "../img/monte-de-piedad-white.png";
import CodeForm from '../Components/codeform';
import '../App.css';

class LogIn extends Component {
  render() {
    return (
      <div className="login-screen">
        <div className="backg-img">
          <img src={logo} className="logo-app" alt="logo" />
          <CodeForm />

          <h1 className="greeting-login" >Olvidaste tu contraseña</h1>
          <h1 className="greeting-login" >Registrate aqui</h1>

        </div>
      </div>
    );
  }
}

export default LogIn;