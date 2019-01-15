import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'
import AsyncStorage from './middlewares'

const store = createStore(reducers, applyMiddleware(AsyncStorage));

export default store;