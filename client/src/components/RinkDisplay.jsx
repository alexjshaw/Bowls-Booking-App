import classes from "./RinkDisplay.module.css"

import React, { useEffect, useState } from 'react';
import { Box, Text, Button } from '@mantine/core';
import { useUser } from "../contexts/UserContext";

export default function RinkDisplay({ currentDate, selectedTimeSlot }) {

  const [rinks, setRinks] = useState([]);
  const [bookings, setBookings] = useState([]);
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

    const fetchBookings = async () => {
      try {
        const rinkIds = rinks.map(rink => `rink=${rink._id}`).join('&');
        const response = await fetch(`http://localhost:5000/booking?${rinkIds}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const bookingsData = await response.json();
        setBookings(bookingsData);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };    

    if (user.club) {
      fetchRinks();
      fetchBookings();
    }
  }, [user.club, currentDate, selectedTimeSlot]);

  const isRinkBooked = (rinkId) => {
    return bookings.some(booking => 
      booking.rink._id === rinkId && 
      booking.date === currentDate.format('YYYY-MM-DD') && 
      booking.time === selectedTimeSlot
    );
  };

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
    console.log('bookings', bookings)
  }

  return (
    <Box className={classes.rinkContainer}>
      {rinks.map((rink) => {
        const booked = isRinkBooked(rink._id);
        return (
          <Box key={rink._id} className={classes.rinkCard}>
            <Box className={classes.rinkInfo}>
              <Text>Rink {rink.number}</Text>
              <Text>Status: {booked ? `Booked by ${bookings.find(b => b.rink._id === rink._id).user.firstName}` : 'Available'}</Text>
            </Box>
            {!booked && (
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
