import classes from "./Header.module.css"

import React, { useState } from 'react';
import { Box, Button, Text, Group } from '@mantine/core';
import dayjs from 'dayjs';


import { DatePickerInput } from '@mantine/dates';


export default function Header({currentDate, setCurrentDate}) {

  const goToPreviousDate = () => {
    setCurrentDate(currentDate.subtract(1, 'day'));
  };

  const goToNextDate = () => {
    setCurrentDate(currentDate.add(1, 'day'));
  };

  const handleDateChange = (date) => {
    if (date) {
      setCurrentDate(dayjs(date));
    }
  };

  return (
    <Box className={classes.headerBox}>
      <Group>
        <Button onClick={goToPreviousDate}>{"<<"}</Button>
        <DatePickerInput
          placeholder="Pick date"
          value={currentDate.toDate()}
          onChange={handleDateChange}
        />
        <Button onClick={goToNextDate}>{">>"}</Button>
      </Group>
    </Box>
  );
}