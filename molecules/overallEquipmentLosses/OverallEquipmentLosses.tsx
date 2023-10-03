'use client';
import React from 'react';
import { FiltersState } from '@/molecules/filters/FiltersState';

const OverallEquipmentLosses = () => {
  const { country } = FiltersState.useContainer();

  return (
    <div>
      <h2 className="font-medium text-2xl">Overall Equipment Losses</h2>
    </div>
  );
};

export default OverallEquipmentLosses;
