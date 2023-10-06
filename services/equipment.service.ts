import { API_URL } from '@/utils/api';
import { EquipmentType, SerializedEquipmentType } from '@/services/types';
import axios from 'axios';

export const fetchEquipmentTypes = async (): Promise<
  SerializedEquipmentType[]
> => {
  const response = await fetch(`${API_URL}/equipment-types`);
  const equipmentTypes: EquipmentType[] = await response.json();

  return equipmentTypes.map((item) => ({ key: item.type, value: item.type }));
};

export const fetchEquipments = async (filters: any) => {
  const response = await axios.post(`${API_URL}/equipments`, filters);
  return response.data;
};
