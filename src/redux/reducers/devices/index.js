// import actionTypes from '../../actions/actionTypes';
// import get from 'lodash/get';
import { getAllDevices } from '../../../selectors/common'

const initialState = [...getAllDevices()];

const devicesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default devicesReducer;
