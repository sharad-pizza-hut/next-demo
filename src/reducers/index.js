import { combineReducers } from 'redux'
import counterReducer from './counter'
import clockReducer from './clock'
import activeReducer from './active'
import fetchReducer from './fetch'

const rootReducer = combineReducers({
    counter: counterReducer,
    clock: clockReducer,
    active: activeReducer,
    fetch: fetchReducer
})

export default rootReducer