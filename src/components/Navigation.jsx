import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Todo from "./Todo";
import Meetings from "./Meetings";
import Calendar from "./Calendar";

const Navigation = () => {
  const [isNavShown, setIsNavShown] = useState(true);

  const toggleNavDisplay = () => {
    setIsNavShown((prevDisplay) => !prevDisplay);
  };

  return (
    <div className="fixed text-slate-300 z-50 left-0 top-0">
      <button
        className="bg-slate-700 w-fit rounded-md p-1 m-2"
        onClick={toggleNavDisplay}
      >
        {isNavShown ? "Hide" : "Show"}
      </button>

      {isNavShown ? (
        <ul className="bg-slate-700 p-2 gap-2 flex flex-col rounded-r-md">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/todo">Todo</Link>
          </li>
          <li className="nav-link">
            <Link to="/meetings">Meetings</Link>
          </li>
          <li className="nav-link">
            <Link to="/calendar">Calendar</Link>
          </li>
        </ul>
      ) : null}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </div>
  );
};

export default Navigation;
