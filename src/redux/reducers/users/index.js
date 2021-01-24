// import actionTypes from '../../actions/actionTypes';
// import get from 'lodash/get';
import { getAllUsers } from '../../../selectors/common'

const initialState = [...getAllUsers()];

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default usersReducer;
