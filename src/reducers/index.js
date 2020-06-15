import {combineReducers} from 'redux';
import counter from './counter';
import addClient from './addclient';

const _combineReducers = combineReducers({
  counter,
  addClient,
});
export default _combineReducers;
