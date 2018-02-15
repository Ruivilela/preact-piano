import createStore from "redux-zero";
import { applyMiddleware } from 'redux-zero/middleware';
import { connect } from 'redux-zero/devtools';

import selectState from './select/state';

const state = {
    select: selectState
}

const middlewares = connect ? applyMiddleware(connect(state)): [];
const store = createStore(state, middlewares);

export default store;
