import React from 'react';
import { FiltersState } from '@/molecules/filters/FiltersState';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const OverallEquipmentChart = () => {
  const { totalLossesQuery } = FiltersState.useContainer();
  const { data } = totalLossesQuery;

  return (
    <div className="flex justify-center">
      <BarChart id="overall" width={1024} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="country" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar
          dataKey="destroyed"
          fill="#FF5733"
          name="Destroyed"
          legendType="circle"
        />
        <Bar
          dataKey="abandoned"
          fill="#3498DB"
          name="Abandoned"
          legendType="circle"
        />
        <Bar
          dataKey="captured"
          fill="#27AE60"
          name="Captured"
          legendType="circle"
        />
        <Bar
          dataKey="damaged"
          fill="#F1C40F"
          name="Damaged"
          legendType="circle"
        />
        <Bar dataKey="total" fill="#9B59B6" name="Total" legendType="circle" />
      </BarChart>
    </div>
  );
};

export default OverallEquipmentChart;
