
import { createStore,compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';    
import rootReducer from "./reducers/index";
const middlewares = [];
middlewares.push(thunkMiddleware);

const initialState = localStorage.getItem("store") ? JSON.parse(localStorage.getItem("store")) : {};
const win = window;
const storeEnhancers = compose(
    applyMiddleware(thunkMiddleware),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);
let store = null;
if (process.env.NODE_ENV === 'development') {
    store = createStore(rootReducer, initialState, storeEnhancers);
} else {
    store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware))
}
export default store