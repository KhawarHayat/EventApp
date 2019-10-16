import { EVENTS_DETAILS, SET_ID } from '../actions/types'

const initialState = {
    id:'',
    src: '',
    name: '',
    date: '',
    time: '',
    timezone: '',
    type: '',
    genre: '',
    minPrice: '',
    maxPrice: '',
    currency: '',
    info: '',
    venue: '',
    loading: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case EVENTS_DETAILS:
            console.log(action.payload)
            return {
                ...state,
                src: action.payload.images[0].url,
                name: action.payload.name,
                date: action.payload.dates.start.localDate,
                time: action.payload.dates.start.localTime,
                timezone: action.payload.dates.timezone,
                type: action.payload.classifications[0].segment.name,
                genre: action.payload.classifications[0].genre.name,
                minPrice: action.payload.priceRanges[0].min,
                maxPrice: action.payload.priceRanges[0].max,
                currency: action.payload.priceRanges[0].currency,
                info: action.payload.info,
                venue: action.payload._embedded.venues[0].name
            }
        case SET_ID:
            return {
                ...state,
                id: action.payload,
                loading: false
            }
        default:
            return state;
    }
}