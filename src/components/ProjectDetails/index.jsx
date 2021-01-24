import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import UsersList from './components/UsersList'
import DevicesList from './components/DevicesList'
import { useProjectSelect } from '../../selectors/projects'

const ProjectDetails = () => {
  const params = useParams();
  const { id } = params;

  const [project, setProject] = useState(useProjectSelect(id));

  
  return (
    <div>
      Project page
      <UsersList id={id} />
      <DevicesList id={id} />
    </div>
  )
};

export default ProjectDetails;
