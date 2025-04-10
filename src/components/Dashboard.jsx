import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{ width: "20%", backgroundColor: "royalblue", height: "100vh" }}
      >
        <h3 style={{ paddingLeft: "30px" }}>
          <Link to={"/addStudent"} style={{ color: "white", display: "block" }}>Add Student</Link>
        </h3>
        <h3 style={{ paddingLeft: "30px" }}>
          <Link to={"/studentList"} style={{ color: "white", display: "block" }}>Student List</Link>
        </h3>
      </div>
      <div style={{ width: "80%", height: "100vh" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
