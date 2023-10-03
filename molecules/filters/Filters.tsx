'use client';
import React, { useState } from 'react';
import Select from '@/components/select/Select';
import { FiltersState } from '@/molecules/filters/FiltersState';
import Datepicker from 'react-tailwindcss-datepicker';

const Filters = () => {
  const {
    country,
    countries,
    equipmentTypes,
    equipment,
    dateRange,
    setCountry,
    setEquipment,
    setDateRange,
  } = FiltersState.useContainer();

  return (
    <div className="mb-4 flex items-center justify-around">
      <Select
        name="country"
        label="Search by country"
        value={country}
        options={countries}
        onChange={(event) => setCountry(event.target.value)}
      />

      <Select
        name="equipment"
        label="Search by equipment type"
        value={equipment}
        options={equipmentTypes}
        onChange={(event) => setEquipment(event.target.value)}
      />

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick date range</span>
        </label>
        <Datepicker
          primaryColor="blue"
          inputClassName="w-full border border-blue-500 rounded-md p-3"
          value={dateRange}
          onChange={(range: any) =>
            setDateRange({
              startDate: range?.startDate,
              endDate: range?.endDate,
            })
          }
        />
      </div>
    </div>
  );
};

export default Filters;