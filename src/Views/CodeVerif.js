import React, { Component } from 'react';
import VerifNum from '../Components/VerifNume';
import '../App.css';

class CodeVerif extends Component {
  render() {
    return (
      <div className="verification-screen">
        <div className="backg-img">
          
          <h1 className="verif-text" >Te enviamos un sms con un código al número indicado.</h1>
          <h2 className="verif-text2" >Para verificar tu número introduce código de activación (6 digitos).</h2>
          <VerifNum />

        </div>
      </div>
    );
  }
}

export default CodeVerif;