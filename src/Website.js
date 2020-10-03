import React from 'react';
import Home from './Home';
import about from './About';
import Service from './Service';
import Contact from './Contact';
import {Switch , Route, Redirect} from 'react-router-dom';
import Navigation from './Navigation';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
const website = () =>
{
    return(
        <>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={about} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/"/>
            </Switch>
        </>
    );
}

export default website;