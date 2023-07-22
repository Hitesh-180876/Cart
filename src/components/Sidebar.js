import React from "react";
import "./Sidebar.css"; // Import the CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">Dashboard</div>
      <div className="sidebar-item">Bookings</div>
      <div className="sidebar-item">Booked Rooms</div>
      <div className="sidebar-item">Booked Hall</div>
      <div className="sidebar-item">Guests</div>
      <div className="sidebar-item">Menus</div>
      <div className="sidebar-item">Availability Calender</div>
    </div>
  );
};

export default Sidebar;
