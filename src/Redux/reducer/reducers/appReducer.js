import {TEST} from '../../types'

const initialState = {
  Aynur: 26,
  Ilmira: 21,
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return {...state, TEST: 'super'}
    default:
      return {...state}
  }
}

