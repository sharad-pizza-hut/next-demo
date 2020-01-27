import { combineReducers } from 'redux'
import counterReducer from './counter'
import clockReducer from './clock'
import activeReducer from './active'

const rootReducer = combineReducers({
    counter: counterReducer,
    clock: clockReducer,
    active: activeReducer
})

export default rootReducer