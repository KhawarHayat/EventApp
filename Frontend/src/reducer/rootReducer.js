import { combineReducers } from 'redux'
import detailsReducer from './detailsReducer'
import eventReducer from './eventReducer.js'

export default combineReducers({
    detail: detailsReducer,
    event: eventReducer
})