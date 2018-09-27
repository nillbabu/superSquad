import { combineReducers } from 'redux'

import characters from './characterReducer'
import heroes from './heroesReducer'



const rootReducer = combineReducers({
    characters,
    heroes
})

export default rootReducer