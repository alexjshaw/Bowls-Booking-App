import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import classes from "./TestPage.module.css";
import dayjs from "dayjs";

import Header from "../components/Header";
import RinkDisplay from "../components/RinkDisplay";
import TimeSelect from "../components/TimeSelect";
import Footer from "../components/Footer";

import { Center, Box, Container } from "@mantine/core";

export default function TestPage() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("8-10am");

  return (
    <Center className={classes.center}>
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

      {/* <Box className={classes.footer}>
        <Footer />
      </Box> */}
    </Center>
  );
}
