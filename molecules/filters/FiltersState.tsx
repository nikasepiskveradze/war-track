import { createContainer } from 'unstated-next';
import { useState } from 'react';
import { countries, CountryKeys } from '@/molecules/filters/types';
import { SerializedEquipmentType } from '@/services/types';
import { useQuery } from '@tanstack/react-query';
import { fetchEquipments } from '@/services/equipment.service';

const useFilters = (initialState: SerializedEquipmentType[] = []) => {
  const [country, setCountry] = useState(CountryKeys.All as string);
  const [equipment, setEquipment] = useState('All Types');

  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  const equipmentsQuery = useQuery({
    queryKey: ['equipments', country, equipment],
    queryFn: () =>
      fetchEquipments({
        ...(country === CountryKeys.All ? {} : { country }),
        types: [equipment],
      }),
  });

  return {
    country,
    equipment,
    dateRange,
    countries,
    equipmentTypes: initialState,
    setCountry,
    setEquipment,
    setDateRange,
    equipmentsQuery,
  };
};

export const FiltersState = createContainer(useFilters);
