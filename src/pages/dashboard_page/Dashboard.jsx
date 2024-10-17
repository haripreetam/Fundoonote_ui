import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./dashboard.css";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";

function Dashboard() {
  const [notes, setNotes] = useState([]);

  return (
    <div className="main-layout">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

const styles = {
  content: {
    padding: "20px",
    marginLeft: "200px", // Adjust based on your sidebar width
  },
};

export default Dashboard;
