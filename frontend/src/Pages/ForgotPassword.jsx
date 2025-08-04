import React, { useState } from "react";
import { useSelector } from "react-redux";

function ForgotPassword() {
  const [emailSent, setEmailSent] = useState(false);
  const { loading } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>{!emailSent ? "Reset your Password" : "Check Your Email "}</h1>
          <p>
            {!emailSent
              ? "Have no fear. we'll email you instructions to reset password. If you don't have access to your email we can try account recovery"
              : `We have sent the reset email to your ${email}`}
          </p>
          <form>
            {!emailSent && (
              <label>
                <p>Email Address</p>
                <input
                  type="email"
                  required
                  name="email"
                  value={email}
                  placeholder="Enter your Email Address"
                  onChange={(e) => {
                    e.target.value;
                  }}
                />
              </label>
            )}
            <button>{!emailSent ? "Reset Password" : "Resend Email"}</button>
          </form>
          <div>
            <Link to="/login">
              <p>Back to Login</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
