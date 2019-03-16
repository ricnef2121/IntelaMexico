import 'regenerator-runtime/runtime';
import {createStore,compose} from 'redux'
import rootReducer from './reducers/reducer-element'

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,storeEnhancers());

export default store;