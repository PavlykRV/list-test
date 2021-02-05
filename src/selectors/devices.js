import get from 'lodash/get';
import { useSelector } from 'react-redux';

export const useDevicesByProjectSelect = (id) =>
  useSelector((state) => get(state, ['raw','devices'], []).filter((device) => `${device.projectId}` === id));