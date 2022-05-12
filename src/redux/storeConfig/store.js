import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import {createStore, applyMiddleware} from 'redux';

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export {store};
