import authReducer from './authReducer'
import modelReducer from './modelReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    model: modelReducer
});

export default rootReducer