import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./components/Content";
import Login from "./components/Login";
import Calendar from "./components/Calendar";
import CalendarDays from "./components/CalendarDays";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true); //w useState() dać true, żeby widzieć stronę po zalogowaninu

  const handleLogin = (data) => {
    if (data.login === "cannoncode" && data.password === "siema") setIsLoggedIn(true)
  };

  return (
    <div>
      {isLoggedIn ? (
        //kontent widoczny po zalogowaniu
        <Router>
          <Routes>
            <Route path="/Calendar/CalendarDays/:{month}"/>
          </Routes>
          <Content />
        </Router>
      ) : (
        // kontent widoczny przed zalogowaniem
        <div className="video-background">
          <video autoPlay loop muted className="video">
            <source src="./assets/videos/jezus.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
          <div className="login-container">
            <Login onLogin={handleLogin} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
