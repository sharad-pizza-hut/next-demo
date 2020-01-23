import { combineReducers } from 'redux'
import counterReducer from './counter'
import clockReducer from './clock'

const rootReducer = combineReducers({
    counter: counterReducer,
    clock: clockReducer
})

export default rootReducer