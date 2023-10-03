import { createContainer } from 'unstated-next';
import { useState } from 'react';
import { countries } from '@/molecules/filters/types';
import { SerializedEquipmentType } from '@/services/types';

const useFilters = (initialState: SerializedEquipmentType[] = []) => {
  const [country, setCountry] = useState(countries[0].key);
  const [equipment, setEquipment] = useState('All Types');

  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
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
  };
};

export const FiltersState = createContainer(useFilters);
