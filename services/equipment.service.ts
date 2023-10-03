import { API_URL } from '@/utils/api';
import { EquipmentType, SerializedEquipmentType } from '@/services/types';

export const fetchEquipmentTypes = async (): Promise<
  SerializedEquipmentType[]
> => {
  const response = await fetch(`${API_URL}/equipment-types`);
  const equipmentTypes: EquipmentType[] = await response.json();

  return equipmentTypes.map((item) => ({ key: item.type, value: item.type }));
};
