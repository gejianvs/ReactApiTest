
import { combineReducers } from 'redux'
import user from './user'
import address from './address'
import fetchdata from './fetch'

export default combineReducers({
  user,
  address,
  fetchdata
})