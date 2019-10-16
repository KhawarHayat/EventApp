import { FETCH_EVENTS } from '../actions/types'

const initialState = {
    cards: [],
    loading: true
}

export default function(state = initialState, action){
switch(action.type) {
    case FETCH_EVENTS :
       return {
        ...state,
        loading: false,
        cards: action.payload,
        }
        default :
        return state
}
}