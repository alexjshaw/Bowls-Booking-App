import React from "react";
import classes from "./Footer.module.css";
import { Box, Button, Group } from "@mantine/core";
import { useUser } from "../contexts/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/firebase"

export default function Footer() {
  const navigate = useNavigate();
  const { currentUser } = useUser(); // Access user state

  const handleMyBookingsClick = () => {
    navigate("/bookings");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <Group>
      <Button onClick={handleHomeClick}>Home</Button>
      <Button onClick={handleMyBookingsClick}>My Bookings</Button>
      <Button>Upcoming Events</Button>
      <Button onClick={logout}>Log Out</Button>
    </Group>
  );
}
