import projects from '../data/project.json';
import devices from '../data/device.json';
import users from '../data/user.json';

export const getAllProjects = () => {
  return projects.reduce((acc, project) => {
    const isExist = acc.find((item) => item.id === project.id);

    if (isExist) {
      return acc;
    }

    return [...acc, project];
  }, []);
};

export const getAllUsers = () => {
  return users.reduce((acc, user) => {
    const isExist = acc.find((item) => item.appuserId === user.appuserId);

    if (isExist) {
      return acc;
    }

    return [...acc, user];
  }, []);
};

export const getAllDevices = () => {
  return devices.reduce((acc, device) => {
    const isExist = acc.find((item) => item.deviceId === device.deviceId);

    if (isExist) {
      return acc;
    }

    return [...acc, device];
  }, []);
};

export const getUsersByProject = (id) => {
  return users.filter(user => user.projectId === id)
}

export const getDevicesByProject = (id) => {
  return devices.filter(device => device.projectId === id)
}
