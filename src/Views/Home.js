import React, { Component } from 'react';
import NavBar from '../Components/Home/NavBarHome';
import BreadCrumbs from '../Components/Home/BreadCrumbs';

import { Button } from 'reactstrap';

import '../Components/Home/Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home-box">
                <NavBar />
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