import React, { Component } from 'react';
import NavBar from '../Components/Home/NavBarHome';
import BreadCrumbs from '../Components/Home/BreadCrumbs';

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <section>
                    <BreadCrumbs />
                </section>
            </div>
        );
    }
}

export default Home;