import React, { Component } from 'react';
import '../Scss/Cards.scss'
class Cards extends Component {
    state = {}
    render() {
        return (
            <div id={this.props.id} className='Cards'>
                <img src={this.props.src}/>
                <div>
                <p>{this.props.name}</p>
                <p>{this.props.type}</p>
                <p>{this.props.time}</p>
                <p>{this.props.venue}</p>
                </div>
               <center> <button onClick={this.props.onClick}>Details</button> </center>
            </div>
        );
    }
}

export default Cards;