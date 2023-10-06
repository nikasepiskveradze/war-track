'use client';
import React from 'react';
import dynamic from 'next/dynamic';
const OverallEquipmentChart = dynamic(
  () => import('@/molecules/overallEquipmentLosses/OverallEquipmentChart'),
);

const OverallEquipmentLosses = () => {
  return (
    <div className="mt-3">
      <hr className="my-10 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

      <h2 className="font-medium text-2xl text-center capitalize">
        Overall losses by country and equipment type
      </h2>
      <p className="font-medium text-sm text-center mb-8">
        *Date range is not supported this chart, since it is overall data.
      </p>

      <OverallEquipmentChart />
    </div>
  );
};

export default OverallEquipmentLosses;
