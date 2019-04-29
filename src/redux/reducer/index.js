import { combineReducers } from 'redux';

//import login from './reducer_login';
import count from './reducer_count';


const rootReducer = combineReducers({
//  LoginReducer: login,
    countReducer: count,
})

export default rootReducer;