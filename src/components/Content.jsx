import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Todo from "./Todo";
import Meetings from "./Meetings";
import Calendar from "./Calendar";

const Content = () => {
  const [isNavShown, setIsNavShown] = useState(false);

  const toggleNavDisplay = () => {
    setIsNavShown((prevDisplay) => !prevDisplay);
  };

  return (
    <div className="text-slate-300">
      <button
        className="bg-slate-700 w-fit rounded-md p-1 m-2"
        onClick={toggleNavDisplay}
      >
        {isNavShown ? "Hide" : "Show"}
      </button>

      {/* NAVIGATION */}

      <ul
        className={`nav-links ${
          isNavShown ? "show-nav-animation" : "hide-nav-animation"
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
          <Route path="/todo" element={<Todo />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </div>
  );
};

export default Content;
