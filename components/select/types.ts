import { ChangeEvent } from 'react';

export interface Props {
  label: string;
  name: string;
  value: string;
  options: { key: string; value: string }[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
