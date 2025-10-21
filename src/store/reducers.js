import { combineReducers } from 'redux'
import book from '../components/Books/reducers'

// assuming this app will grow

const rootReducer = combineReducers({
    //other reducer functions
    book
})

export default rootReducer