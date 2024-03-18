import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import TodoPage from "./TodoPage";
import Meetings from "./Meetings";
import Calendar from "./Calendar";
import CalendarDays from "./CalendarDays";
import MenuIcon from "../images/icons/menu.svg";
import HideMenuIcon from "../images/icons/arrow-left.svg";

const Content = () => {
  const [isNavShown, setIsNavShown] = useState(false);

  const toggleNavDisplay = () => {
    setIsNavShown((prevDisplay) => !prevDisplay);
  };

  const month = "February"

  return (
    <div className="text-slate-300">
      <button
        className="bg-slate-800 w-fit rounded-md p-1 m-2 hover:bg-slate-700 duration-300"
        onClick={toggleNavDisplay}
      >
        {isNavShown ? (
          <img src={HideMenuIcon} className="nav-icon" alt="menu-icon" />
        ) : (
          <img src={MenuIcon} className="nav-icon" alt="menu-icon" />
        )}
      </button>

      {/* NAVIGATION */}
      <ul
        className={`nav-links ${isNavShown ? "show-nav-animation" : "hide-nav-animation"
          }`}
      >
        <Link to="/" className="nav-link" onClick={toggleNavDisplay}>
          Home
        </Link>
        <Link to="/todo" className="nav-link" onClick={toggleNavDisplay}>
          Todo
        </Link>
        <Link to="/meetings" className="nav-link" onClick={toggleNavDisplay}>
          Meetings
        </Link>
        <Link to="/calendar" className="nav-link" onClick={toggleNavDisplay}>
          Calendar
        </Link>
      </ul>

      {/* CONTENT */}
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path={`/calendar/CalendarDays/${month}`} element={<CalendarDays />} />
        </Routes>
      </div>
    </div>
  );
};

export default Content;
