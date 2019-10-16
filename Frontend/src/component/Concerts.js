import React, { Component } from 'react';
import Axios from 'axios';
import Cards from './Cards'
import Header from './Header';
import { Redirect } from 'react-router-dom'
import { fetchEvents, setID } from '../actions/Actions'
import { connect } from 'react-redux';
import store from '../store';


class Concerts extends Component {
    componentDidMount() {
        this.props.fetchEvents()
    }
    handleDetail = (id) => {
        this.props.setID(id)
    }
    render() {
        let card = []
        if (this.props.loading === false) {
            let cards = this.props.cards.events.filter(event => {
                return (event.classifications[0].segment.name === 'Music')
            })
            card = cards.map(event => {
                return <Cards key={event.id} id={event.id} name={event.name} type={event.classifications[0].segment.name} time={event.dates.start.localTime} venue={event._embedded.venues[0].name} src={event.images[0].url} onClick={() => { this.handleDetail(event.id) }} />
            })
        }
        return (
            <div className='Events'>
                {this.props.redirect === false ? (
                    <Redirect to="/Details" />
                ) :
                    (<>
                    <Header />
                        <img id='Banner' src='Concert.jpg' alt='Concert' />
                        <div className='flex'>{card}</div>
                        </>
                        )
                }

            </div>
        );
    }
}

const mapStateToProps = state => ({
    cards: state.event.cards,
    loading: state.event.loading,
    redirect: state.detail.loading,
})


export default connect(mapStateToProps, { fetchEvents, setID })(Concerts);