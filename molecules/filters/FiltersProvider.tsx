'use client';
import { ReactNode } from 'react';
import { FiltersState } from '@/molecules/filters/FiltersState';
import { SerializedEquipmentType } from '@/services/types';

export const FiltersProvider = ({
  children,
  equipmentTypes,
}: {
  children: ReactNode;
  equipmentTypes: SerializedEquipmentType[];
}) => {
  return (
    <FiltersState.Provider initialState={equipmentTypes}>
      {children}
    </FiltersState.Provider>
  );
};
