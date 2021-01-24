// import actionTypes from '../../actions/actionTypes';
// import get from 'lodash/get';
import { getAllProjects } from '../../../selectors/common'

const initialState = [...getAllProjects()];

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default projectsReducer;
