import createStore from "redux-zero";
import { applyMiddleware } from 'redux-zero/middleware';
import { connect } from 'redux-zero/devtools';

import selectState from './select/state';
import pianoState from './piano/state';

const state = {
    select: selectState,
    piano: pianoState
}

const middlewares = connect ? applyMiddleware(connect(state)): [];
const store = createStore(state, middlewares);

export default store;
