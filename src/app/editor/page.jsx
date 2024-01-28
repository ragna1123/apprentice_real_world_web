"use client";
import React, { useEffect, useState } from "react";
import ArticleForm from "../_components/ui/Articles/Form/ArticleForm";
import { useRouter } from "next/navigation";

const apiURL = "http://localhost:3000/api/articles";

export default function Editor() {
  const [authToken, setAuthToken] = useState(null);
  const [flashMessage, setFlashMessage] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuthToken(token);
  }, []);

  const handleFromSubmit = async (article) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({ article }),
    };

    try {
      const res = await fetch(apiURL, requestOptions);
      if (!res.ok) {
        throw new Error("API error");
      } else {
        router.push("/");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Submission failed:", error);
      setFlashMessage(true);
      // ここでエラーをユーザーに通知する
    }
  };

  const onSubmit = (article) => {
    handleFromSubmit(article);
  };

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <ul className="error-messages">
              {flashMessage && "入力が有効ではありません"}
            </ul>

            <ArticleForm onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
