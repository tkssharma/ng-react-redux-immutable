'use strict';

import {
    combineReducers
} from 'redux';

import auth from './Auth';
import user from './User';
import ui from './UI'

import {
    routerReducer
} from 'react-router-redux';


const GenNextApp = combineReducers({
    auth,
    user,
    ui,
    routing: routerReducer,
});


const rootReducer = (state, action) => {

    if (action.type === 'REDUX_RESET_STATE') {
        const {
            routing
        } = state
        state = {
            routing
        }
    }
    return GenNextApp(state, action);
}

export default rootReducer;
