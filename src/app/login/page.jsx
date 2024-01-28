"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormGroup from "../_components/ui/Auth/FormGroup";

const apiURL = "http://localhost:3000/api/users/login";

export default function Login() {
  const router = useRouter();
  // フラッシュメッセージのステートを作成
  const [flashMessage, setFlashMessage] = useState(false);

  const handleFormSubmit = async (email, password) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: email, password }),
    };
    const response = await fetch(apiURL, requestOptions);
    const data = await response.json();
    console.log(data.user);
    if (data.user) {
      localStorage.setItem("token", data.token);
      router.push("/");
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
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <a href="/register">Need an account?</a>
            </p>

            <ul className="error-messages">
              {flashMessage && <li>メールアドレスかパスワードが違います。</li>}
            </ul>

            <FormGroup isSignUp={false} onSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
