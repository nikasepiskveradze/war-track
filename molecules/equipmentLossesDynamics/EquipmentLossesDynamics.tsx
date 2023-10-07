'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Select from '@/components/select/Select';
import { statuses } from '@/molecules/equipmentLossesDynamics/types';
import { EquipmentLossesDynamicState } from '@/molecules/equipmentLossesDynamics/EquipmentLossesDynamicsState';
const EquipmentLossesDynamicsChart = dynamic(
  () =>
    import('@/molecules/equipmentLossesDynamics/EquipmentLossesDynamicsChart'),
);

const EquipmentLossesDynamics = () => {
  const { status, setStatus } = EquipmentLossesDynamicState.useContainer();

  return (
    <div className="mt-3">
      <hr className="my-10 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

      <div className="flex justify-around items-center mb-8">
        <h2 className="font-medium text-2xl mt-8 text-center capitalize">
          Dynamic of losses, by country, type and date
        </h2>

        <div className="w-60">
          <Select
            label="Status"
            name="status"
            value={status}
            options={statuses}
            onChange={(event) => setStatus(event.target.value)}
          />
        </div>
      </div>

      <EquipmentLossesDynamicsChart />
    </div>
  );
};

export default EquipmentLossesDynamics;
