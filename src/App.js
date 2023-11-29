import React from "react";
import Login from "./components/login_signin/Login";
import Signup from "./components/login_signin/SignUp";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";


function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
