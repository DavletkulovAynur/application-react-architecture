import {combineReducers} from 'redux'
import {appReducer} from './reducers/appReducer'
import {folderReducer} from './reducers/folderReducer'

const reducer = combineReducers({
  appReducer,
  folderReducer
})

export default reducer
