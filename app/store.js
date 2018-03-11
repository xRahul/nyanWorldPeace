import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import peaceCardsReducer from './reducers/peaceCards'
import appStatusReducer from './reducers/appStatus'

// Combine all the reducers
const rootReducer = combineReducers({
  appStatus: appStatusReducer,
  peaceCards: peaceCardsReducer
})

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
)
