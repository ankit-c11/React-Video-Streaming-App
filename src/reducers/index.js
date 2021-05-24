import {combineReducers} from 'redux'
import {reducer as fromReducer} from 'redux-form'
import auth  from './auth'
import streamsReducer from './streamsReducer'

export default combineReducers({
    auth,
    form:fromReducer,
    streams:streamsReducer,
})