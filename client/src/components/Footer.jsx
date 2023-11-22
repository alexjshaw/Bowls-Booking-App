import classes from "./Footer.module.css"

import { Box, Button, Group } from "@mantine/core"

export default function Footer () {
  return (
    <Box className={classes.footerBox}>
      <Group>
        <Button>My Bookings</Button>
        <Button>Upcoming Events</Button>
      </Group>
    </Box>
  )
}