import React from "react";
import { Paper, Text, Button, Grid } from "@mantine/core";
import dayjs from "dayjs";
import classes from "./BookingCard.module.css";

const BookingCard = ({ booking }) => {
  const formattedDate = dayjs(booking.date).format("DD-MM-YYYY");

  const handleChangeBooking = () => {
    console.log("Change", booking._id);
  };

  const handleDeleteBooking = () => {
    console.log("Delete", booking._id);
  };

  return (
    <Paper shadow="sm" className={classes.card}>
      <Grid gutter="xl">
        <Grid.Col span="auto">
          <Text className={classes.date}>{formattedDate}</Text>
          <Text className={classes.details}>Time: {booking.time}</Text>
          <Text className={classes.details}>
            Rink Number: {booking.rink.number}
          </Text>
        </Grid.Col>
        <Grid.Col span="auto" className={classes.buttonColumn}>
          <Button onClick={handleChangeBooking} className={classes.button}>
            Change Booking
          </Button>
          <Button onClick={handleDeleteBooking} className={classes.button}>
            Delete Booking
          </Button>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export default BookingCard;
