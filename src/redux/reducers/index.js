import { combineReducers } from 'redux';
import projects from './projects';
import users from './users';
import devices from './devices';
import raw from './raw';


export default combineReducers({
  projects,
  users,
  devices,
  raw
});