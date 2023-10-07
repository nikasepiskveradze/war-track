import React from 'react';
import { FiltersState } from '@/molecules/filters/FiltersState';
import { groupBy } from 'lodash';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { EquipmentLossesDynamicState } from '@/molecules/equipmentLossesDynamics/EquipmentLossesDynamicsState';

const EquipmentLossesDynamicsChart = () => {
  const { lossesDynamicsQuery } = FiltersState.useContainer();
  const { data, isLoading } = lossesDynamicsQuery;
  const { status } = EquipmentLossesDynamicState.useContainer();

  const groupedByDate = groupBy(data, 'date');
  const chartData = Object.keys(groupedByDate).map((item) => {
    const groupedByCountry = groupBy(groupedByDate[item], 'country');

    return {
      date: item,
      russia: groupedByCountry['Russia'] ? groupedByCountry['Russia'][0] : null,
      ukraine: groupedByCountry['Ukraine']
        ? groupedByCountry['Ukraine'][0]
        : null,
    };
  });

  return (
    <div className="flex justify-center">
      <LineChart id="dynamics" width={1024} height={400} data={chartData}>
        <CartesianGrid />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Line
          type="monotone"
          dataKey={`russia.${status}`}
          name="Russia"
          stroke="#8884d8"
          legendType="circle"
          dot={false}
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey={`ukraine.${status}`}
          name="Ukraine"
          stroke="#82ca9d"
          legendType="circle"
          dot={false}
          strokeWidth={2}
        />
      </LineChart>
    </div>
  );
};

export default EquipmentLossesDynamicsChart;
