import React, { useEffect, useState } from "react";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
  auth,
} from "../utils/firebase.js";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { TextInput, Button, Box, Container, Select } from "@mantine/core";
import classes from "./Register.module.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("")
  const [club, setClub] = useState("");
  const [clubs, setClubs] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

  useEffect(() => {
    fetch("http://localhost:5000/club")
      .then((response) => response.json())
      .then((data) => {
        const clubOptions = data.map((club) => ({
          value: club._id,
          label: club.name,
        }));
        setClubs(clubOptions);
      });
  }, []);

  const addUserToDatabase = async (firstName, lastName, email, phone, club, firebaseUID) => {
    const user = { firstName, lastName, email, phone, club, firebaseUID };
    const response = await fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Failed to add user to database");
    }

    return response.json();
  };

  const register = async () => {
    if (!firstName || !lastName) {
      alert("Please enter your name");
      return;
    }

    if (!club) {
      alert("Please select your club")
      return
    }

    try {
      const firebaseUID = await registerWithEmailAndPassword(
        email,
        password
      );
      if (firebaseUID) {
        await addUserToDatabase(firstName, lastName, email, phone, club, firebaseUID);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container size="xs" className={classes.register}>
      <Box className={classes.registerContainer}>
        <TextInput
          type="text"
          className={classes.textBox}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <TextInput
          type="text"
          className={classes.textBox}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <Select
          className={classes.textBox}
          placeholder="Select Club"
          data={clubs}
          value={club}
          onChange={setClub}
        />
        <TextInput
          type="number"
          className={classes.textBox}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
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
        <Button
          fullWidth
          variant="outline"
          color="blue"
          className={`${classes.btn} ${classes.google}`}
          onClick={signInWithGoogle}
        >
          Register with Google
        </Button>

        <Box className={classes.footerText}>
          Already have an account? <Link to="/">Login</Link> now.
        </Box>
      </Box>
    </Container>
  );
}

export default Register;
