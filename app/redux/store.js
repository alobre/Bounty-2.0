import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import RBSheetReducer from './reducers'

const rootReducer = combineReducers({RBSheetReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));