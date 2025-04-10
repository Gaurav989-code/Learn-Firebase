import { getDatabase, ref, set } from "firebase/database";
import React, { useState } from "react";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(null);
  const [studentId, setStudentId] = useState(null);
  const Navigate = useNavigate();

  const SubmitHandler = (e) => {
    e.preventDefault();

    const db = getDatabase(app);
    set(ref(db, "students/" + studentId), {
      studentName: name,
      phoneNumber: phone,
    })
      .then((res) => {
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
          onChange={(e) => setStudentId(e.target.value)}
          type="Number"
          placeholder="Student Id"
        />
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          placeholder="phone number"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddStudent;
