import { getDatabase, ref, set } from "firebase/database";
//import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(null);
  const [studentId, setStudentId] = useState(null);
  const Navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);

  const handelFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    console.log(file);
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();

    const db = getDatabase(app);
    // const storage = getStorage(app);
    // const myRef = storageRef(storage, `images/${studentId}`);
    // await uploadBytes(myRef, selectedFile);
    // const imageUrl = await getDownloadURL(myRef);

    set(ref(db, "students/" + studentId), {
      studentName: name,
      phoneNumber: phone,
      //imageUrl: imageUrl,
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
        {/* <input onChange={handelFileChange} type="file" />
        <button type="submit">Submit</button> */}
      </form>
    </div>
  );
};

export default AddStudent;
