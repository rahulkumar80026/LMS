import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NavBar from "./components/Common/NavBar";
import Signup from "./Pages/Signup";
import OpenRoute from "./components/core/Auth/OpenRoute";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import About from "./Pages/About";

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

          <Route
            path="forgot-password"
            element={
              <OpenRoute>
                <ForgotPassword></ForgotPassword>
              </OpenRoute>
            }
          ></Route>

          <Route
            path="about"
            element={
              <OpenRoute>
                <About></About>
              </OpenRoute>
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
