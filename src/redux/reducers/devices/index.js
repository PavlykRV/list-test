// import actionTypes from '../../actions/actionTypes';
// import get from 'lodash/get';
import { getUniqueDevices } from '../../../selectors/common'

const initialState = [...getUniqueDevices()];

const devicesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default devicesReducer;
