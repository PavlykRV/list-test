import React from 'react';
import { useDevicesByProjectSelect } from '../../../../selectors/devices';

const DeviceList = ({ id }) => {
  const devices = useDevicesByProjectSelect(id);
  return (
    <div>
      {devices.map((device) => (
        <div key={device.deviceId}>{device.serialNumber}</div>
      ))}
    </div>
  );
};

export default DeviceList;
