import { combineReducers } from 'redux'
import itemReducer from './itemReducer'
import notificationReducer from './notificationReducer'

export default combineReducers({
  items: itemReducer,
  notification: notificationReducer
});
