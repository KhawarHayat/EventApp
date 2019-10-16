import { FETCH_EVENTS, EVENTS_DETAILS, SET_ID } from './types'
import Axios from 'axios';


export const fetchEvents = () => dispatch => {
    Axios.get('https://app.ticketmaster.com/discovery/v2/events?apikey=03eJ71ebYIwPVGM2jkxrvfOBbm8t3PDH&locale=*', { "Access-Control-Allow-Origin": "*" })
    .then(data => {
        const datas = data.data._embedded
        dispatch({
          type: FETCH_EVENTS,
          payload: datas,  
        })
    })

}

export const eventsDetails = (data) => dispatch => {
    Axios.get(`https://app.ticketmaster.com/discovery/v2/events/${data}?apikey=03eJ71ebYIwPVGM2jkxrvfOBbm8t3PDH&locale=*`, { "Access-Control-Allow-Origin": "*" })
    .then(data => {
        const datas = data.data
        dispatch({
            type: EVENTS_DETAILS,
            payload: datas,
        })
    })
}

export const setID = (id) => dispatch => {
    console.log(id)
    dispatch({
        type: SET_ID,
        payload: id,
    })
}