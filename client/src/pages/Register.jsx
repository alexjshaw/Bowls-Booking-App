import React, { useEffect, useState } from "react";
import { registerWithEmailAndPassword, signInWithGoogle, auth } from "../utils/firebase.js"
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { TextInput, Button, Box, Container } from '@mantine/core';
import classes from "./Register.module.css";

function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter your name")
    registerWithEmailAndPassword(name, email, password)
  }

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

  return (
<Container size="xs" className={classes.register}>
      <Box className={classes.registerContainer}>
        <TextInput
          type="text"
          className={classes.textBox}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
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
        <Button fullWidth className={classes.btn} onClick={register}>
          Register
        </Button>
        <Button fullWidth variant="outline" color="blue" className={`${classes.btn} ${classes.google}`} onClick={signInWithGoogle}>
          Register with Google
        </Button>

        <Box className={classes.footerText}>
          Already have an account? <Link to="/">Login</Link> now.
        </Box>
      </Box>
    </Container>
  )
}

export default Register