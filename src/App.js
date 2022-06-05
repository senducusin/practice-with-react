import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const onAddUserHandler = (username, age) => {
    setUserList((previousUserList) => {
      return [
        ...previousUserList,
        { id: uuidv4(), username: username, age: age },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddNewUser={onAddUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
