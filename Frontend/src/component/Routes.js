import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './Main.js';
import Events from './Events.js';
import Sports from './Sports.js';
import Concerts from './Concerts.js';
import Booked from './Booked.js'
class Routes extends Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Main} />
                <Route exact path='/Events' component={Events} />
                <Route path='/Sports' component={Sports} />
                <Route path='/Concerts' component={Concerts} />
                <Route path='/Details' component={Booked} />
                
            </Router>
        );
    }
}

export default Routes;