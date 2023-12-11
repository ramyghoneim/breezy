import React, { useState } from 'react';
import "../css/Calendar.css"
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import CheckIcon from '@mui/icons-material/Check';

export const Calendar = () => {
  const [value, setValue] = useState(new Date());


  return (
    <main className='calendar'>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          // mask='____/__/__'
          variant='static'
          orientation='portrait'
          value={value}
          // disableFuture
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) => {
            <TextField {...params} />;
          }}
        />
      </LocalizationProvider>
    </main>
  );
};
