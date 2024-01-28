"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // useRouter フックのインポート

export const articleDelete = async (articleData, router) => {
  const token = localStorage.getItem("token");
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await fetch(
      `http://localhost:3000/api/articles/${articleData.id}`,
      requestOptions
    );

    if (!res.ok) {
      throw new Error("API error");
    }
    router.push("/"); // リダイレクト処理
  } catch (error) {
    console.error("Article deletion failed:", error);
    // エラーハンドリング
  }
};

export default function ArticleMeta(props) {
  const { userData, articleData } = props;
  const router = useRouter();

  const onDeleteArticle = async () => {
    await articleDelete(articleData, router);
  };

  return (
    <div className="article-meta">
      <Link href={`/profile/${userData.username}`}>
        <img src={userData.image} alt={userData.username} />
      </Link>
      <div className="info">
        <Link href={`/profile/${userData.username}`} className="author">
          {userData.username}
        </Link>
        <span className="date">{articleData.created_at}</span>
      </div>
      <button className="btn btn-sm btn-outline-secondary">
        <i className="ion-plus-round"></i>
        &nbsp; Follow {userData.username} <span className="counter">(10)</span>
      </button>
      &nbsp;&nbsp;
      <button className="btn btn-sm btn-outline-primary">
        <i className="ion-heart"></i>
        &nbsp; Favorite Post <span className="counter">(10)</span>
      </button>
      {/* 以下のリンクは適切なルーティングに合わせて調整してください */}
      <Link
        href={`/editor/${articleData.id}`}
        className="btn btn-sm btn-outline-secondary"
      >
        <i className="ion-edit"></i> Edit Article
      </Link>
      <button
        href={`/article/delete/${articleData.id}`}
        className="btn btn-sm btn-outline-danger"
        onClick={onDeleteArticle}
      >
        <i className="ion-trash-a"></i> Delete Article
      </button>
    </div>
  );
}
