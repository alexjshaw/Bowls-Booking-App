import { useState, useEffect } from "react";
import { Center, Box, Button, Title, Container } from "@mantine/core";
import classes from "./MyBookingsPage.module.css";
import { useUser } from "../contexts/UserContext";
import BookingCard from "../components/BookingCard";
import dayjs from "dayjs";

import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(isSameOrAfter);

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/booking?user=${user._id}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const bookingsData = await response.json();
        setBookings(bookingsData);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, [user]);

  const isUpcoming = (date) => {
    return dayjs(date).isSameOrAfter(dayjs(), "day");
  };

  const timeSlotOrder = {
    "8-10am": 1,
    "10-12pm": 2,
    "12-2pm": 3,
    "2-4pm": 4,
    "4-6pm": 5,
    "6-8pm": 6,
  };

  const sortedBookings = bookings
    .filter((booking) => isUpcoming(booking.date))
    .sort((a, b) => {
      const dateA = dayjs(a.date);
      const dateB = dayjs(b.date);
      if (dateA.isSame(dateB, "day")) {
        return timeSlotOrder[a.time] - timeSlotOrder[b.time];
      }
      return dateA.isAfter(dateB) ? 1 : -1;
    });

  const testFunction = () => {
    console.log(bookings);
  };

  return (
    <>
      <Title order={1} className={classes.pageTitle}>
        My Bookings
      </Title>
      <Center className={classes.centeredContainer}>
        {sortedBookings.map((booking) => (
          <BookingCard key={booking._id} booking={booking} />
        ))}
        <Button onClick={() => testFunction()}>Log Bookings</Button>
      </Center>
    </>
  );
}
