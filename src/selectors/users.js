import get from 'lodash/get';
import { useSelector } from 'react-redux';

export const useUsersByProjectSelect = (id) =>
  useSelector((state) => get(state, ['users'], []).filter((user) => `${user.projectId}` === id));