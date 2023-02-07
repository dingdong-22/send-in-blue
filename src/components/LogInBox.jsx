import { useState } from "react";

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
      <button className="log-in-button" onClick={() => handleSubmit()}>
        Log In
      </button>
      <div className="horizontal_line_or">
        <hr />
        OR
        <hr />
      </div>
      <button className="google_log_in_button">
        <img
          className="google-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png"
        ></img>
        Sign in with Google
      </button>
      <button className="apple_log_in_button">
        <img
          className="apple-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
        ></img>
        Sign in with Apple
      </button>
    </div>
  );
}

export default LogInBox;
