import React from 'react';
import classes from "./Footer.module.css"
import { Box, Button, Group } from "@mantine/core"
import { useUser } from '../contexts/UserContext.jsx'; // Import useUser hook

export default function Footer () {

  const { user } = useUser(); // Access user state

  const handleMyBookingsClick = () => {
    console.log('User State:', user); // Log user state to console
  };

  return (
    <Box className={classes.footerBox}>
      <Group>
        <Button onClick={handleMyBookingsClick}>My Bookings</Button>
        <Button>Upcoming Events</Button>
      </Group>
    </Box>
  )
}