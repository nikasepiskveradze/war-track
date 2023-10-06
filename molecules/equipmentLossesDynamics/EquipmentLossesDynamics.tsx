import React from 'react';
import dynamic from 'next/dynamic';
const EquipmentLossesDynamicsChart = dynamic(
  () =>
    import('@/molecules/equipmentLossesDynamics/EquipmentLossesDynamicsChart'),
);

const EquipmentLossesDynamics = () => {
  return (
    <div className="mt-3">
      <hr className="my-10 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

      <h2 className="font-medium text-2xl mb-8 text-center capitalize">
        Dynamic of losses, by country, type and date
      </h2>

      <EquipmentLossesDynamicsChart />
    </div>
  );
};

export default EquipmentLossesDynamics;
