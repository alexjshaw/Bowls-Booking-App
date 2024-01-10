import classes from "./TimeSelect.module.css"

import React, { useState } from 'react';
import { Group, Button } from '@mantine/core';

export default function TimeSelect({ selectedTimeSlot, setSelectedTimeSlot }) {
  const timeSlots = ['8-10am', '10-12pm', '12-2pm', '2-4pm', '4-6pm', '6-8pm'];

  return (
    <Group direction="column" justify="center">
      {timeSlots.map((slot) => (
        <Button
          key={slot}
          variant={slot === selectedTimeSlot ? "filled" : "outline"}
          onClick={() => setSelectedTimeSlot(slot)}
          className={slot === selectedTimeSlot ? classes.selectedTimeButton : classes.timeButton}
        >
          {slot}
        </Button>
      ))}
    </Group>
  );
}
