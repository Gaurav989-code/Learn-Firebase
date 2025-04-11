import {
  collection,
  doc,
  deleteDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

const FacultyList = () => {
  const [facultyData, setFacultyData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const db = getFirestore(app);
    const docRef = collection(db, "faculty");
    const docSnap = await getDocs(docRef);
    const data = docSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(data);
    setFacultyData(data);
  };

  const deleteData = async () => {
    const db = getFirestore(app);
    const dataRef = doc(db, "faculty", id);
    try {
      await deleteDoc(dataRef);
      getData()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>faculty List</h1>

      {facultyData.map((item) => (
        <div key={item.id}>
          <p>{item.facultyName}</p>
          <p>{item.phone}</p>
          <button onClick={() => deleteData(item.id)}>Delete</button>
          <button onClick={() => navigate('/updateFaculty', {state: [faculty]})}>update</button>
        </div>
      ))}
    </div>
  );
};

export default FacultyList;
