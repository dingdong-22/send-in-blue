import { useState } from "react";
import google_logo from "../images/google_logo.png";
import apple_logo from "../images/apple_logo.png";

function LogInBox() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
    let toggleButton = document.getElementById("toggle_show_password_button");
    toggleButton.classList.toggle("showing");
  }

  function handleSubmit() {
    alert(`Credentials Entered\nEmail: ${email}\nPassword: ${password}`);
  }

  return (
    <div className="log-in-container">
      <h2>Log In</h2>
      <div className="input-title">
        <h5>Email Address</h5>
      </div>
      <input
        className="email_input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <div className="input-title">
        <h5>Password</h5>
      </div>
      <input
        className="password_input"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button
        id="toggle_show_password_button"
        onClick={() => toggleShowPassword()}
      >
        Show Password
      </button>
      {/* <button className="log-in-button" onClick={() => handleSubmit()}>
        Log In
      </button> */}
      <a
        className="log-in-button"
        href="https://sendinblue-dashboard-ae1371.netlify.app/"
      >
        Log In
      </a>
      <div className="horizontal_line_or">
        <hr />
        OR
        <hr />
      </div>
      <button className="google_log_in_button">
        <img className="google-logo" src={google_logo} alt="google_logo"></img>
        Sign in with Google
      </button>
      <button className="apple_log_in_button">
        <img className="apple-logo" src={apple_logo} alt="apple_logo"></img>
        Sign in with Apple
      </button>
    </div>
  );
}

export default LogInBox;
