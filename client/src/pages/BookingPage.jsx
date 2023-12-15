import { useState } from "react";
import classes from "./BookingPage.module.css";
import dayjs from "dayjs";

import Header from "../components/Header";
import RinkDisplay from "../components/RinkDisplay";
import TimeSelect from "../components/TimeSelect";

import { Center, Box } from "@mantine/core";

export default function TestPage() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("8-10am");

  return (
    <>
      <Box className={classes.header}>
        <Header currentDate={currentDate} setCurrentDate={setCurrentDate} />
      </Box>

      <Box className={classes.mainContent}>
        <Box className={classes.leftColumn}>
          <RinkDisplay
            currentDate={currentDate}
            selectedTimeSlot={selectedTimeSlot}
          />
        </Box>
        <Box className={classes.rightColumn}>
          <TimeSelect
            selectedTimeSlot={selectedTimeSlot}
            setSelectedTimeSlot={setSelectedTimeSlot}
          />
        </Box>
      </Box>
    </>
  );
}
