export interface EquipmentType {
  type: string;
}

export interface SerializedEquipmentType {
  key: string;
  value: string;
}

export interface TotalLossesFilter {
  country?: string;
  types?: string[];
}

export interface LossesDynamicsFilter {
  types?: string[];
  date?: string[];
}

export interface EquipmentItem {
  id: number;
  country: string;
  type: string;
  destroyed: number;
  abandoned: number;
  captured: number;
  damaged: number;
  total: number;
}

export interface EquipmentItemWithDate extends EquipmentItem {
  date: string;
}
