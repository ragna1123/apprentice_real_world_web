"use client";
import ArticlePreview from "./_components/ui/Articles/Preview/ArticlePreview";
import TagList from "./_components/ui/Base/TagList/TagList";
import Pagination from "./_components/ui/Home/Pagination/Pagination";
import Feed from "./_components/ui/Home/FeedToggle/Feed";
import { useEffect, useState } from "react";

const apiURL = "http://localhost:3000/api/articles";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [token, setToken] = useState(null);

  const getArticles = async () => {
    const res = await fetch(apiURL);
    const data = await res.json();
    console.log(data);
    setArticles(data);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    getArticles();
  }, []);

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <Feed isFeed={false} isUser={token}/>
            {articles.map((article) => (
              <ArticlePreview
                article_id={article.id}
                username="haga"
                date={article.createdAt}
                likes="10"
                title={article.title}
                about={article.description}
                key={article.id}
              />
            ))}
            <Pagination />
          </div>

          <div className="col-md-3">
            <TagList />
          </div>
        </div>
      </div>
    </div>
  );
}
