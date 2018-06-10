import {applyMiddleware, createStore, compose} from 'redux';

import promise from 'redux-promise-middleware';

import reducer from './reducers';
import Storage from "redux-state-save";
 
const storage = new Storage();
storage.setConfig({
    storage_type: "local_storage",
    local_key: "redux-state"
});


const middleware = compose( 
    applyMiddleware(promise(), storage.saveState()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

let store = createStore(reducer, middleware);

store = storage.loadState(store);
export default store;