import classes from "./RinkDisplay.module.css"

import React from 'react';
import { Box, Text, Button } from '@mantine/core';

export default function RinkDisplay({ currentDate, selectedTimeSlot }) {
  const rinks = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
  ];

  const bookings = [
    { rink: 1, date: '2023-11-21', slot: '8-10am', bookedBy: "Jane Doe" },
    { rink: 3, date: '2023-11-21', slot: '4-6pm', bookedBy: "Adam Shaw" },
    { rink: 2, date: '2023-11-22', slot: '12-2pm', bookedBy: "Joe Bloggs" },
  ];

  const getBookingDetails = (rinkNumber) => {
    return bookings.find(
      (booking) =>
        booking.rink === rinkNumber &&
        booking.date === currentDate.format('YYYY-MM-DD') &&
        booking.slot === selectedTimeSlot
    );
  };

  const handleBookrink = (rinkNumber) => {
    console.log("Booking Details:", {
      date: currentDate.format('YYYY-MM-DD'),
      timeSlot: selectedTimeSlot,
      rinkNumber
    });
  };

  return (
    <Box className={classes.rinkContainer}>
      {rinks.map((rink) => {
        const booking = getBookingDetails(rink.number);
        const isAvailable = !booking;

        return (
          <Box key={rink.number} className={classes.rinkCard}>
            <Box className={classes.rinkInfo}>
              <Text>Rink {rink.number}</Text>
              <Text>Status: {booking ? `Booked by ${booking.bookedBy}` : 'Available'}</Text>
            </Box>
            
            {isAvailable && (
              <Box className={classes.bookButtonContainer}>
                <Button onClick={() => handleBookRink(rink.number)}>Book</Button>
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
}