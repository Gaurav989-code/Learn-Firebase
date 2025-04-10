import { getDatabase, ref, set, update } from "firebase/database";
import React, { useState } from "react";
import { app } from "../firebase";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateStudents = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const [studentId, setStudentId] = useState(location.state[0]);
  const [name, setName] = useState(location.state[1].studentName);
  const [phone, setPhone] = useState(location.state[1].phoneNumber);

  const SubmitHandler = (e) => {
    e.preventDefault();

    const db = getDatabase(app);
    const studentRef = ref(db, "students/" + location.state[0]);
    update(studentRef, {
      studentName: name,
      phoneNumber: phone,
    })
      .then(() => {
        Navigate("/studentList");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <input
          disabled
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          type="Number"
          placeholder="Student Id"
        />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          placeholder="phone number"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateStudents;
