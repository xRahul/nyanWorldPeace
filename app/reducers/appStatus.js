import * as ActionTypes from '../actionTypes'

const defaultState = {
  isReady: false
}

const appStatusReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.EXPO_FONTS_LOADED:
      state = Object.assign({}, state, {
        isReady: true
      })
      return state
    default:
      return state
  }
}

export default appStatusReducer
