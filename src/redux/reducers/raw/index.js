// import actionTypes from '../../actions/actionTypes';
// import get from 'lodash/get';
import { getAllProjects, getAllUsers, getAllDevices } from '../../../selectors/common'

const initialState = {
  projects: getAllProjects(),
  users: getAllUsers(),
  devices: getAllDevices(),
};

const rawReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rawReducer;
