import classes from "./RinkDisplay.module.css"

import React, { useEffect, useState } from 'react';
import { Box, Text, Button } from '@mantine/core';
import { useUser } from "../contexts/UserContext";

export default function RinkDisplay({ currentDate, selectedTimeSlot }) {
  // const rinks = [
  //   { number: 1 },
  //   { number: 2 },
  //   { number: 3 },
  //   { number: 4 },
  //   { number: 5 },
  //   { number: 6 },
  // ];

  // const bookings = [
  //   { rink: 1, date: '2023-11-21', slot: '8-10am', bookedBy: "Jane Doe" },
  //   { rink: 3, date: '2023-11-21', slot: '4-6pm', bookedBy: "Adam Shaw" },
  //   { rink: 2, date: '2023-11-22', slot: '12-2pm', bookedBy: "Joe Bloggs" },
  // ];

  const [rinks, setRinks] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchRinks = async () => {
      try {
        const response = await fetch(`http://localhost:5000/rink/byClub/${user.club}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const rinksData = await response.json();
        setRinks(rinksData);
      } catch (error) {
        console.error('Error fetching rinks:', error);
      }
    };

    if (user.club) {
      fetchRinks();
    }
  }, [user.club, currentDate, selectedTimeSlot]);


  // const getBookingDetails = (rinkNumber) => {
  //   return bookings.find(
  //     (booking) =>
  //       booking.rink === rinkNumber &&
  //       booking.date === currentDate.format('YYYY-MM-DD') &&
  //       booking.slot === selectedTimeSlot
  //   );
  // };

  const handleBookRink = async (rinkId) => {
    const bookingData = {
      user: user._id,
      rink: rinkId,
      date: currentDate.format('YYYY-MM-DD'),
      time: selectedTimeSlot,
    };
    console.log('bookingData', bookingData)

    try {
      const response = await fetch('http://localhost:5000/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle the response here. For example, you might want to update the state to reflect the new booking
      console.log('Booking successful', await response.json());
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };


  const testFunction = () => {
    console.log('currentDate', currentDate)
    console.log('selectedTimeSlot', selectedTimeSlot)
  }

  return (
    <Box className={classes.rinkContainer}>
      {rinks.map((rink) => {
        // const booking = getBookingDetails(rink.number);
        // const isAvailable = !booking;
        let booking
        let isAvailable = true

        return (
          <Box key={rink.number} className={classes.rinkCard}>
            <Box className={classes.rinkInfo}>
              <Text>Rink {rink.number}</Text>
              <Text>Status: {booking ? `Booked by ${booking.bookedBy}` : 'Available'}</Text>
            </Box>
            
            {isAvailable && (
              <Box className={classes.bookButtonContainer}>
                <Button onClick={() => handleBookRink(rink._id)}>Book</Button>
              </Box>
            )}
          </Box>
        );
      })}
      <Button onClick={() => testFunction()}>Test</Button>
    </Box>
  );
}