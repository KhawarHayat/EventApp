import React, { Component } from 'react';
import Header from './Header';
import Axios from 'axios';
import '../Scss/Details.scss'
import { eventsDetails } from '../actions/Actions'
import { connect } from 'react-redux'
import store from '../store';



class Details extends Component {
    componentDidMount() {
        console.log(store.getState())
        if(this.props.loading === false){
            this.props.eventsDetails(this.props.id)
            console.log(store.getState())
        }
        // Axios.get(`https://app.ticketmaster.com/discovery/v2/events/${this.state.id}?apikey=03eJ71ebYIwPVGM2jkxrvfOBbm8t3PDH&locale=*`, { "Access-Control-Allow-Origin": "*" })
        //     .then(data => {
        //         console.log(data.data)
        //         const datas = data.data
        //         this.setState({
        //             src: datas.images[0].url,
        //             name: datas.name,
        //             date: datas.dates.start.localDate,
        //             time: datas.dates.start.localTime,
        //             timezone: datas.dates.timezone,
        //             type: datas.classifications[0].segment.name,
        //             genre: datas.classifications[0].genre.name,
        //             minPrice: datas.priceRanges[0].min,
        //             maxPrice: datas.priceRanges[0].max,
        //             currency: datas.priceRanges[0].currency,
        //             info: datas.info,
        //             venue: datas._embedded.venues[0].name
        //         })
        //     })
    }
    componentWillReceiveProps(nextProps){
     console.log(nextProps)
    }
    render() {
        return (
            <div className='Details'>
                <Header />
                {this.props.loading === false ? (
                    <div>
                       {console.log(store.getState())} 
                        <img id='img' src={this.props.src} alt='Img' />
                        <div className='inline'><p className='label'>Name: </p><p>{this.props.name}</p></div>
                        <div className='inline'><p className='label'>Type: </p><p>{this.props.type}</p></div>
                        <div className='inline'><p className='label'>Genre:</p><p>{this.props.genre}</p></div>
                        <div className='inline'><p className='label'>Date:</p><p>{this.props.date}</p></div>
                        <div className='inline'><p className='label'>Time:</p><p>{this.props.time}</p></div>
                        <div className='inline'><p className='label'>Timezone:</p><p>{this.props.timezone}</p></div>
                        <div className='inline'><p className='label'>Price:</p><p>{this.props.currency} {this.props.minPrice} - {this.props.maxPrice} /-</p></div>
                        <div className='inline'><p className='label'>Info:</p><p>{this.props.info}</p></div>
                        <div className='inline'><p className='label'>Venues:</p><p>{this.props.venue}</p></div>
                    </div>
                ) : (
                        <div>loading</div>
                    )}
            </div>
        );
    }
}
const mapStateToProps = (state) => (
    {
        id: state.detail.id,
        src: state.detail.src,
        name: state.detail.name,
        date: state.detail.date,
        time: state.detail.time,
        timezone: state.detail.timezone,
        type: state.detail.type,
        genre: state.detail.genre,
        minPrice: state.detail.minPrice,
        maxPrice: state.detail.maxPrice,
        currency: state.detail.currency,
        info: state.detail.info,
        venue: state.detail.venue,
        loading: state.detail.loading,

    })
export default connect(mapStateToProps, { eventsDetails })(Details);