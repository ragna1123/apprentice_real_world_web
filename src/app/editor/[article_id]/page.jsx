"use client";
import React, { useState, useEffect } from "react";
import ArticleForm from "@/app/_components/ui/Articles/Form/ArticleForm";
import { useRouter } from "next/navigation";

const apiURL = "http://localhost:3000/api/articles";

export default function Editor({ params }) {
  const { article_id } = params;
  const [authToken, setAuthToken] = useState(null);
  const [flashMessage, setFlashMessage] = useState(false);
  const [articleData, setArticleData] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuthToken(token);

    const fetchArticleData = async () => {
      try {
        const res = await fetch(`${apiURL}/${article_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }); // 正しいURLを使用
        const data = await res.json();
        const selectData = {
          title: data.title,
          description: data.description,
          body: data.body,
        };
        setArticleData(selectData);
      } catch (error) {
        console.error("Error fetching article data:", error);
        setFlashMessage("Error fetching article data.");
      }
    };

    fetchArticleData();
  }, [article_id]);
  const handleFromSubmit = async (article) => {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({ article }),
    };

    try {
      const res = await fetch(`${apiURL}/${article_id}`, requestOptions);
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
              {flashMessage && (
                <div className="flash-message">{flashMessage}</div>
              )}
            </ul>

            <ArticleForm articleData={articleData} onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
