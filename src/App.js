import React from "react";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes> 
    </div>
  );
}

export default App;
