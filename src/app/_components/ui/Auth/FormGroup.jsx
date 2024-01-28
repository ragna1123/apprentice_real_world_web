"use client";
import { useState } from "react";
import FormInput from "./FormInput";

export default function FormGroup(props) {
  const { isSignUp, onSubmit } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = isSignUp
      ? { email, password, username }
      : { email, password };
    onSubmit(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {isSignUp && (
        <FormInput
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      )}
      <FormInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
        {isSignUp ? "SignUp" : "SignIn"}
      </button>
    </form>
  );
}
