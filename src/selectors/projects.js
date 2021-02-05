import get from 'lodash/get';
import { useSelector } from 'react-redux';

export const useProjectsSelect = () =>
  useSelector((state) => get(state, ['projects'], []));

export const useProjectSelect = (id) =>
  useSelector((state) => get(state, ['projects'], []).find((project) => `${project.id}` === id));
