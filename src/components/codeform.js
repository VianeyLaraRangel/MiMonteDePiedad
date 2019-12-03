import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// import BtnGreen from "../components/btn_green";
// import firebaseApp from "../firebase";
// import { Link } from "react-router-dom";
// import { Redirect } from 'react-router';

class CodeForm extends Component {
  constructor(props) {
    super(props); //Inicializamos el state con los atributos que queremos que tenga.
    this.state = {
      Usuario: "", //Esta vinculada con el input
      nombre: "", //No se muestra, no hay un input para mostrarlo
      valid: null, //En esta propiedad vamos a guardar true si encuentra el noEmpleado y false si no lo encuentra en firebase.
      message: ""
    };
    console.log(this.state.valid);
  } //Esta funcion actualiza las propiedades de state dependiendo del input que lo llame, //por eso el input debe tener el mismo nombre que la propiedad state que se quiere modificar. //en este formulario solo tenemos un input que tiene name='noEmpleado', por eso solo esa variable se actualiza.

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ usuario: state });
  }; //Esta funcion la vinculamos con el boton validar.

  
  render() {
    const { Usuario } = this.state;
    return (
      <form className="input-btn-form">
        <p className="unregistrer-msn">{this.state.message}</p>
        <input
          placeholder="Usuario"
          value={usuario}
          name="noEmpleado"
          className="input-login"
          type="text"
          onChange={this.onChange}
        />
        <input
          placeholder="Contraseña"
          value={contraseña}
          name="noEmpleado"
          className="input-login"
          type="password"
          onChange={this.onChange}
        />
        <br></br>
        <button type="button" className="btn-green" onClick={this.onClick}>
          Ingreso
        </button>
        {this.state.valid ? <Redirect to="/FormRequest" /> : ""}
      </form>
    );
  }
}

export default CodeForm;