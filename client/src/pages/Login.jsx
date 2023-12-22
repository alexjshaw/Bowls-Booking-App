import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logInWithEmailAndPassword, signInWithGoogle, auth } from "../utils/firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import { TextInput, Button, Box, Container, Anchor } from '@mantine/core';
import classes from "./Login.module.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <Container size="xs" className={classes.login}>
      <Box className={classes.loginContainer}>
        <TextInput
          type="text"
          className={classes.textBox}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <TextInput
          type="password"
          className={classes.textBox}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button fullWidth className={classes.btn} onClick={() => logInWithEmailAndPassword(email, password)}>
          Login
        </Button>
        <Button fullWidth variant="outline" color="blue" className={`${classes.btn} ${classes.google}`} onClick={signInWithGoogle}>
          Login with Google
        </Button>

        <Box className={classes.footerText}>
          <Anchor component={Link} to="/reset">Forgot Password</Anchor>
        </Box>
        <Box className={classes.footerText}>
          Don't have an account? <Anchor component={Link} to="/register">Register</Anchor> now.
        </Box>
      </Box>
    </Container>
  )
}

export default Login