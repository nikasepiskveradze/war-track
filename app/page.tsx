import Hero from '@/components/hero/Hero';
import OverallEquipmentLosses from '@/molecules/overallEquipmentLosses/OverallEquipmentLosses';
import Filters from '@/molecules/filters/Filters';
import { FiltersProvider } from '@/molecules/filters/FiltersProvider';
import { fetchEquipmentTypes } from '@/services/equipment.service';
import EquipmentLossesDynamics from '@/molecules/equipmentLossesDynamics/EquipmentLossesDynamics';
import { EquipmentLossesDynamicsProvider } from '@/molecules/equipmentLossesDynamics/EquipmentLossesDynamicsProvider';

export default async function Home() {
  const equipmentTypes = await fetchEquipmentTypes();

  return (
    <>
      <Hero />
      <div className="container mx-auto my-5 px-6">
        <FiltersProvider equipmentTypes={equipmentTypes}>
          <Filters />
          <OverallEquipmentLosses />
          <EquipmentLossesDynamicsProvider>
            <EquipmentLossesDynamics />
          </EquipmentLossesDynamicsProvider>
        </FiltersProvider>
      </div>
    </>
  );
}
