import React, { Component } from 'react';
import '../Scss/Main.scss'
import Header from './Header';
class Main extends Component {
    state = {}
    render() {
        return (
            <div id='Main'>
                <Header />
                <img id='Banner' src='Concert.jpg' />
                <p id='PP'>Enjoy the Events</p>
                <h2>Services</h2>
                <div id='services'>
                    <div><img src='serEvents.png' /><p>Events</p></div>
                    <div><img src='serConcert.jpg' /><p>Concerts</p></div>
                    <div><img src='serSports.jpg' /><p>Sports</p></div>
                </div>
            </div>
        );
    }
}

export default Main;