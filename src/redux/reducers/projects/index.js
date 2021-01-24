import actionTypes from '../../actions/actionTypes';
import get from 'lodash/get';
import { getAllProjects } from '../../../selectors/common';

const initialState = [...getAllProjects()];

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PROJECT.DELETE:
      const id = get(action, ['payload'], '');
    
      return state.filter((item) => `${item.id}` !== `${id}`);
    case actionTypes.PROJECT.UPDATE:
      const project = get(action, ['payload'], {});
    
      return [...state.filter((item) => `${item.id}` !== `${project.id}`), project];
    default:
      return state;
  }
};

export default projectsReducer;
