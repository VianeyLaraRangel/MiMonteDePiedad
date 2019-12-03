import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../Components/Home/BreadCrumbs';

import { Button } from 'reactstrap';

import '../Components/Home/Home.css';
import logo from '../img/monte_logo.png';

class Credits extends Component {
    render() {
        return (
            <div className="home-box">
            Creditos
            </div>
        );
    }
}

export default Credits;