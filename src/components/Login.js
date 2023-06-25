import React from "react";

export default function Login() {
  return (
    <div>
      <div className="signInContainer">
        <h1>Sign in</h1>
        <form className="signForm" action="/action_page.php">
          <div>
            <label htmlFor="email">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; E-mail{" "}
            </label>
            <input id="email" type="email"></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password"></input>
          </div>
          <div className="sign_help">
            <ul>
              <li id="signup">Sign up</li>
              <span style={{ fontSize: "25px", position: "relative" }}>
                &#8739;
              </span>
              <li id="forgot">Forgot your Password</li>
            </ul>
          </div>
          <button id="btn_signin" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
