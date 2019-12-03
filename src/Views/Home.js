import React, { Component } from 'react';
// import NavBar from '../Components/Home/NavBarHome';
import BreadCrumbs from '../Components/Home/BreadCrumbs';

import { Button } from 'reactstrap';

import '../Components/Home/Home.css';
import logo from '../img/monte_logo.png';

class Home extends Component {
    render() {
        return (
            <div className="home-box">
                <img src={logo} className="logo-app" alt="logo" />
                <section>
                    <BreadCrumbs />
                </section>
                <section>
                    <Button color="info">Solicitar CrediMonte ></Button>
                    <Button color="info">Tu CrediMonte ></Button>
                </section>
            </div>
        );
    }
}

export default Home;