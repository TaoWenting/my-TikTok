// src/redux/store.js

import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Import thunk as a named export
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
