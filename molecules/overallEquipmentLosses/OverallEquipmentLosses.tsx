'use client';
import React from 'react';
import { FiltersState } from '@/molecules/filters/FiltersState';

const OverallEquipmentLosses = () => {
  const { country } = FiltersState.useContainer();

  return (
    <div>
      <h2 className="font-medium text-2xl flex justify-center">
        Oryx no longer making statistics, so it does not make sense to continue
        this project
      </h2>
    </div>
  );
};

export default OverallEquipmentLosses;
