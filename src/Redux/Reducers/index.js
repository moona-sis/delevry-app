import {combineReducers} from 'redux'
import delevryReducer from './delevryReducer'

const rootReducer = combineReducers({
    delevry: delevryReducer
})

export default rootReducer