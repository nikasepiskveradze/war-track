import { API_URL } from '@/utils/api';
import {
  EquipmentItem,
  EquipmentItemWithDate,
  EquipmentType,
  LossesDynamicsFilter,
  SerializedEquipmentType,
  TotalLossesFilter,
} from '@/services/types';
import axios from 'axios';
import { CountryKeys } from '@/molecules/filters/types';

export const fetchEquipmentTypes = async (): Promise<
  SerializedEquipmentType[]
> => {
  const response = await fetch(`${API_URL}/equipment-types`);
  const equipmentTypes: EquipmentType[] = await response.json();

  return equipmentTypes.map((item) => ({ key: item.type, value: item.type }));
};

export const fetchEquipmentsTotalLosses = async (
  filters: TotalLossesFilter,
): Promise<EquipmentItem[]> => {
  const response = await axios.post(`${API_URL}/equipments`, filters);
  return response.data;
};

export const fetchEquipmentsLossesDynamic = async (
  country: string,
  filters: LossesDynamicsFilter,
): Promise<EquipmentItemWithDate[]> => {
  const response = await axios.post(
    `${API_URL}/equipments/${country}`,
    filters,
  );

  return response.data;
};
