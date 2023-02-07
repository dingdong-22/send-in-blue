import { useState } from "react";

function LogInBox() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [showPassword, setShowPassword] = useState(false);

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
      <button onClick={() => setShowPassword(!showPassword)}>
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
      <button className="google_log_in_button">Sign In With Google</button>
      <button className="apple_log_in_button">Sign In With Apple</button>
    </div>
  );
}

export default LogInBox;
