import actionTypes from './actionTypes';

export const projectDelete = (id) => ({
  type: actionTypes.PROJECT.DELETE,
  payload: id
});
