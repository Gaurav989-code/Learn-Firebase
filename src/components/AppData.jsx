import React from "react";
import { app } from "../firebase";
import { getDatabase, ref, set } from "firebase/database";

const AppData = () => {
  const addDemoData = (userId , name ,phone) => {
    console.log(userId , name ,phone);
    const db= getDatabase(app)
    set(ref(db, "faculty/" + userId), {
      name: name,
      phone: phone,
    });
  };

  return (
    <div>
      <h1>Add Data</h1>
      <button onClick={() => addDemoData(14, "aman", 91111140)}>Add demo data</button>
    </div>
  );
};

export default AppData;
