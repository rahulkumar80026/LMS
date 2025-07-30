import React from "react";
import loginImage from "../assets/Images/login.webp"
import LoginForm from "../components/core/Auth/LoginForm";

function Login() {
  return <LoginForm title="Welcome Back"
  description1 ="Build skills for today, tomorrow, and beyond"
  description2="Education to future-proof your career."
  image = {loginImage}
  formType = "login"></LoginForm>;
}

export default Login;
