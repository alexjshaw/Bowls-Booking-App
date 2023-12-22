import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { TextInput, Button, Box, Container, Anchor } from "@mantine/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { sendPasswordReset, auth } from "../utils/firebase";
import classes from "./Reset.module.css";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

  return (
    <Container size="xs" className={classes.reset}>
      <Box className={classes.resetContainer}>
        <TextInput
          type="text"
          className={classes.textBox}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <Button
          fullWidth
          className={classes.btn}
          onClick={() => sendPasswordReset(email)}
        >
          Send password reset email
        </Button>

        <Box className={classes.footerText}>
          Don't have an account?{" "}
          <Anchor component={Link} to="/register">
            Register
          </Anchor>{" "}
          now.
        </Box>
      </Box>
    </Container>
  );
}

export default Reset