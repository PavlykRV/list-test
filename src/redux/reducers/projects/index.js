import actionTypes from '../../actions/actionTypes';
import { getAllProjects } from '../../../selectors/common';

const initialState = [...getAllProjects()];

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PROJECT.DELETE:
      const { payload } = action;
    
      return state.filter((item) => item.id !== payload);
    default:
      return state;
  }
};

export default projectsReducer;
