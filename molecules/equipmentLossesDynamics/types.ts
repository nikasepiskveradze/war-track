export enum Status {
  Destroyed = 'destroyed',
  Abandoned = 'abandoned',
  Captured = 'captured',
  Damaged = 'damaged',
  Total = 'total',
}

export const statuses = [
  { key: Status.Destroyed, value: 'Destroyed' },
  { key: Status.Abandoned, value: 'Abandoned' },
  { key: Status.Captured, value: 'Captured' },
  { key: Status.Damaged, value: 'Damaged' },
  { key: Status.Total, value: 'Total' },
];
