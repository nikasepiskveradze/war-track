'use client';
import { EquipmentLossesDynamicState } from '@/molecules/equipmentLossesDynamics/EquipmentLossesDynamicsState';
import { PropsWithChildren } from 'react';

export const EquipmentLossesDynamicsProvider = ({
  children,
}: PropsWithChildren) => {
  return (
    <EquipmentLossesDynamicState.Provider>
      {children}
    </EquipmentLossesDynamicState.Provider>
  );
};
