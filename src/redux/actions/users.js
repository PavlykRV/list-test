import actionTypes from './actionTypes';

export const userDelete = (ids) => ({
  type: actionTypes.USER.DELETE,
  payload: ids
});

export const userAdd = (user) => ({
  type: actionTypes.USER.ADD,
  payload: user
});
