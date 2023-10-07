import { createContainer } from 'unstated-next';
import { useState } from 'react';
import { Status } from '@/molecules/equipmentLossesDynamics/types';

const useEquipmentLossesDynamic = () => {
  const [status, setStatus] = useState(Status.Total as string);

  return {
    status,
    setStatus,
  };
};

export const EquipmentLossesDynamicState = createContainer(
  useEquipmentLossesDynamic,
);
