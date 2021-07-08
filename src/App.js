import React, { useState }from 'react';
import MemberForm from "./Components/MemberForm";
import Members from "./Components/Members";

import './App.css';

const  App = () => {
  const [members, setMember] = useState([
    {
      id:1,
      name: "Cedric",
      email: "cawinbushjr@gmail.com",
      role: "Full Stack"
    }

  ]);
console.log(members)
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };

    setMember([...members, newMember]);
  };

  return (
    <div className="App">
        <h1>List of Team Members</h1>
        <MemberForm addNewMember={addNewMember} />
        <Members members={members} />
        

    </div>
  );
}

export default App;
