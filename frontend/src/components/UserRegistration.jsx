import React from "react";
import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import ErrorModal from "./ErrorModal";
import styles from "./UserRegistration.module.css";

const UserRegistration = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const registerHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "INVALID INPUT",
        message: "ENTER PROPER NAME AND AGE",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "INVALID INPUT",
        message: "ENTER VALID AGE",
      });
      return;
    }
    props.onAddUser(username, age);
    setUsername("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onError={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={registerHandler}>
          <label htmlFor="username">USERNAME</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="age">AGE</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <Button type="submit">REGISTER USER</Button>
        </form>
      </Card>
    </>
  );
};

export default UserRegistration;
