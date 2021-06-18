import { combineReducers } from 'redux'
 import  toReducer from './todoReducer'


export default combineReducers ( {
    todos:toReducer
})