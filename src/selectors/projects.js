import get from 'lodash/get';
import { useSelector } from 'react-redux';

export const useProjectsSelect = () =>
  useSelector((state) => get(state, ['projects'], []));
