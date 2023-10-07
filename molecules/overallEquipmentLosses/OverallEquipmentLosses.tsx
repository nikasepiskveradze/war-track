import React from 'react';
import dynamic from 'next/dynamic';
const OverallEquipmentChart = dynamic(
  () => import('@/molecules/overallEquipmentLosses/OverallEquipmentChart'),
);

const OverallEquipmentLosses = () => {
  return (
    <div className="mt-3">
      <h2 className="font-medium mt-10 text-2xl text-center capitalize">
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
