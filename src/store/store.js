import { compose, applyMiddleware, createStore } from 'redux'
import OtoMotoReducer from './../reducers/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})

const store = createStore(
    OtoMotoReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store