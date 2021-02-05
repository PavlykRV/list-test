import get from 'lodash/get';
import { useSelector } from 'react-redux';

export const useUsersByProjectSelect = (id) =>
  useSelector((state) =>
    get(state, ['raw', 'users'], []).filter(
      (user) => `${user.projectId}` === `${id}`,
    ),
  );

export const useUserByIdSelect = (id) =>
  useSelector((state) =>
    get(state, ['users'], []).filter((user) => `${user.appuserId}` === `${id}`),
  );

export const useAllUserSelect = () =>
  useSelector((state) => get(state, ['users'], []));
