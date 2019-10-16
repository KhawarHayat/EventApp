import React, { Component } from 'react';
import '../Scss/Header.scss'
import { Link } from 'react-router-dom'
class Header extends Component {
    state = {}
    render() {
        return (
            <div id='Header'>
                <div className='logo'>
                <img alt='LOGO' src='LOGOevent.png' width='50' height='50'/>
                </div>
                <Link to='/Events' className='non'><p>Events</p></Link>
                <Link to='/Sports' className='non'><p>Sports</p></Link>
                <Link to='/Concerts' className='non'><p>Concerts</p></Link>
                <a href='https://github.com/KhawarHayat' className='non'><p className='right'>Contact</p></a>
            </div>
        );
    }
}

export default Header;