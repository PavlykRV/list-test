// import actionTypes from '../../actions/actionTypes';
// import get from 'lodash/get';
import { getUniqueUsers } from '../../../selectors/common'

const initialState = [...getUniqueUsers()];

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default usersReducer;
