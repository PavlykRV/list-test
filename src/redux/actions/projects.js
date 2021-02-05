import actionTypes from './actionTypes';

export const projectDelete = (id) => ({
  type: actionTypes.PROJECT.DELETE,
  payload: id
});

export const projectUpdate = (project) => ({
  type: actionTypes.PROJECT.UPDATE,
  payload: project
});
