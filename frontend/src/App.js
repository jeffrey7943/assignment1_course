import React, { useState } from "react";
import UserRegistration from "./components/UserRegistration";
import UsersList from "./components/UsersList";

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <UserRegistration onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </div>
  );
};

export default App;
