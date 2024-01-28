"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import FormGroup from "../_components/ui/Auth/FormGroup";

const apiURL = "http://127.0.0.1:3000/api/users";

export default function Register() {
  const router = useRouter();
  const [flashMessage, setFlashMessage] = useState(false);

  const handleFormSubmit = async (username, email, password) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: username, email, password }),
    };
    const response = await fetch(apiURL, requestOptions);
    const data = await response.json();
    console.log(data);
    if (data.user) {
      router.push("/login");
    } else {
      setFlashMessage(true);
      console.log(data.errors);
    }
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <a href="/login">Have an account?</a>
            </p>

            <ul className="error-messages">
              {flashMessage && <li>既にメールアドレスが使用されています。</li>}
            </ul>

            <FormGroup isSignUp={true} onSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
