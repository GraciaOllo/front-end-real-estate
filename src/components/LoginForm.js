import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { FaSignInAlt } from "react-icons/fa"; // Importing login icon
import { Toast, ToastContainer } from "react-bootstrap";

const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success"); // "success" or "error"
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simple authentication check
    try {
      const response = await fetch("http://localhost:8086/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.text();
      console.log("Response data:", data);
      // Set success toast
      setToastType("success");
      setToastMessage("Login successful");
      setShowToast(true);
      navigate("/"); // Redirect to home or dashboard after successful login
    } catch (error) {
      // Set error toast
      setToastType("error");
      setToastMessage("Login failed");
      setShowToast(true);
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <ToastContainer >
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          bg={toastType === "success" ? "success" : "danger"} // Set background color based on type
        >
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
      <div align="center" className="form-container">
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            

            <label>
              <b>Email: </b>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              <b>Password: </b>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button type="submit">
              <FaSignInAlt className="login-icon" />
              Login
            </button>
          </form>
          <div className="signup-link">
            <p>
              Don't have an account? <a href="/signup">Sign up here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
