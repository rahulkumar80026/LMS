import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NavBar from "./components/Common/NavBar";
import Signup from "./Pages/Signup";
import OpenRoute from "./components/core/Auth/OpenRoute";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <div className="w-screen min-h-screen  bg-richblack-900  flex flex-col font-inter">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="signup"
            element={
              <OpenRoute>
                <Signup></Signup>
              </OpenRoute>
            }
          ></Route>
          <Route
            path="login"
            element={
              <OpenRoute>
                <Login></Login>
              </OpenRoute>
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
