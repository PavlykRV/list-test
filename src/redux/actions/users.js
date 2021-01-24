import actionTypes from './actionTypes';

export const userDelete = (ids) => ({
  type: actionTypes.USER.DELETE,
  payload: ids
});
