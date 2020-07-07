import {createStore, applyMiddleware, combineReducers} from 'redux'
import {} from 'react-redux'
import thunk from 'redux-thunk'

import * as reducers from '../../redux'

const globalState = combineReducers(reducers)
//  const reducer = combineReducers(reducers)
const store = createStore(globalState, applyMiddleware(thunk))

export default store
