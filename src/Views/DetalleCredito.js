import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// import { Button } from 'reactstrap';


import './DetalleCredito.css'
import logo from '../img/monte_logo.png';


class DetalleCredito extends Component {
    render() {
        return (
            <div className="detalleCredito-logo">
            <img src={logo} className="logo-detalles" alt="logo" />
            </div>
        )
    }
}
export default DetalleCredito;