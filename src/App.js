import React from "react";
import Login from "./components/login/Login";
import Signup from "./components/login/SignUp";
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
