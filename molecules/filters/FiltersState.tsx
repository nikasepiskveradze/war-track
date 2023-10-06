import { createContainer } from 'unstated-next';
import { useState } from 'react';
import { countries, CountryKeys } from '@/molecules/filters/types';
import { SerializedEquipmentType } from '@/services/types';
import { useQuery } from '@tanstack/react-query';
import {
  fetchEquipmentsLossesDynamic,
  fetchEquipmentsTotalLosses,
} from '@/services/equipment.service';
import moment from 'moment';

const useFilters = (initialState: SerializedEquipmentType[] = []) => {
  const [country, setCountry] = useState(CountryKeys.All as string);
  const [equipment, setEquipment] = useState('All Types');

  const [dateRange, setDateRange] = useState({
    startDate: moment().startOf('year').format('YYYY-MM-DD'),
    endDate: moment().format('YYYY-MM-DD'),
  });

  const totalLossesQuery = useQuery({
    queryKey: ['total-losses', country, equipment],
    queryFn: () =>
      fetchEquipmentsTotalLosses({
        ...(country === CountryKeys.All ? {} : { country }),
        types: [equipment],
      }),
  });

  const lossesDynamicsQuery = useQuery({
    queryKey: ['losses-dynamic', country, equipment, dateRange],
    queryFn: () =>
      fetchEquipmentsLossesDynamic(country, {
        types: [equipment],
        date: [dateRange.startDate, dateRange.endDate],
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
    totalLossesQuery,
    lossesDynamicsQuery,
  };
};

export const FiltersState = createContainer(useFilters);
