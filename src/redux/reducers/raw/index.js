import actionTypes from '../../actions/actionTypes';
import get from 'lodash/get';
import { getProjects, getUsers, getDevices } from '../../../selectors/common';

const initialState = {
  projects: getProjects(),
  users: getUsers(),
  devices: getDevices(),
};

const rawReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER.DELETE: {
      const users = get(state, 'users', []);
      const { projectId, userId } = get(action, ['payload'], {});

      const newUsers = users.filter(
        (user) =>
          !(
            `${user.appuserId}` === `${userId}` &&
            `${user.projectId}` === `${projectId}`
          ),
      );

      return {
        ...state,
        users: newUsers,
      };
    }

    default:
      return state;
  }
};

export default rawReducer;
