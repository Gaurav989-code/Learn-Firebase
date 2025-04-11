import { getDatabase, onValue, ref, remove } from "firebase/database";
// import { getStorage, ref as storageRef, deleteObject } from "firebase/storage";

import React, { useEffect, useState } from "react";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

const StudentList = () => {
  const [studentsData, setStudentsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const db = getDatabase(app);
    const studentRef = ref(db, "students");
    onValue(studentRef, (snapshot) => {
      const data = snapshot.val();
      setStudentsData(data);
    });
  }, []);

  const deleteData = (key) =>{
    const db = getDatabase(app);
    // const storage = getStorage(app);
    // const myRef = storageRef(storage, "images/" + key);
    const studentRef = ref(db, "students/" + key);

    // deleteObject(myRef).then(res => {
    //   remove(studentRef);
    // }).catch(err => {
    //   console.log(err);
    // })

    remove(studentRef);
  }

  return (
    <div>
      <h1>Students List</h1>
      {studentsData && (
        <div>
          {Object.entries(studentsData).map(([key, value]) => (
            <div key={key}>
              {/* <img style={{width: '60px'}} src={value.imageUrl}  /> */}
              <p>{value.studentName} : {value.phoneNumber}</p>
              <button onClick={() => deleteData(key)}>delete</button>
              <br />
              <button onClick={() => navigate('/updateStudent', {state: [key ,value]})}>update</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentList;
