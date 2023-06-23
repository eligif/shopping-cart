import React from "react";

export default function SignUp() {
  return (
    <div>
      <label htmlFor="email">E-mail</label>
      <input id="email" type="text"></input>
      <label htmlFor="password">Password</label>
      <br />
      <input id="email" type="password"></input>
      <button type="submit">Sign In</button>
    </div>
  );
}
