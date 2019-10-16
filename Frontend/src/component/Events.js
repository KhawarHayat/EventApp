import React, { Component } from 'react';
import Cards from './Cards'
import Header from './Header'
// import axios from 'axios'
import { Redirect } from 'react-router-dom'
import '../Scss/Events.scss'
import { connect } from 'react-redux';
import { fetchEvents, setID } from '../actions/Actions';

class Events extends Component {
    componentDidMount() {
        this.props.fetchEvents()
    }
    handleDetail = (id) => {
        this.props.setID(id)
    }
    render() {
        let cards = []
        if (this.props.loading === false) {
            let carded = this.props.cards
            cards = carded.events.map((event) => {
                return (
                    <Cards key={event.id} id={event.id} name={event.name} type={event.classifications[0].segment.name} time={event.dates.start.localTime} venue={event._embedded.venues[0].name} src={event.images[0].url} onClick={() => this.handleDetail(event.id)} />
                )

            })
        }

        return (
            <div className='Events'>
                {(this.props.redirect === false) ? (
                    <Redirect to="/Details" />
                ) : (
                        <>
                            <Header />
                            <img id='Banner' src="FootBall.jpg" />
                            {this.props.loading ?
                                (<p>Loading</p>) :
                                (<div className='flex'> {cards} </div>)}
                        </>
                    )}


            </div>
        );
    }
}

const mapStateToProps = state => ({
    cards: state.event.cards,
    loading: state.event.loading,
    redirect: state.detail.loading,
});

export default connect(mapStateToProps, { fetchEvents, setID })(Events);