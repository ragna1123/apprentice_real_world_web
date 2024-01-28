"use client";
import React, { useEffect, useState } from "react";

export default function ArticleForm(props) {
  const { onSubmit , articleData} = props;
  const [article, setArticle] = useState({
    title: "",
    description: "",
    body: "",
  });
  useEffect(() => {
    if (articleData) {
      setArticle(articleData);
    }
  }, [articleData]);


  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(article);
    onSubmit(article);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle((prevArticle) => ({
      ...prevArticle,
      [name]: value,
    }));
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <fieldset className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Article Title"
            value={article.title}
            onChange={handleChange}
            name="title"
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="What's this article about?"
            value={article.description}
            onChange={handleChange}
            name="description"
          />
        </fieldset>
        <fieldset className="form-group">
          <textarea
            className="form-control"
            rows="8"
            placeholder="Write your article (in markdown)"
            value={article.body}
            onChange={handleChange}
            name="body"
          ></textarea>
        </fieldset>

        <button className="btn btn-lg pull-xs-right btn-primary" type="submit">
          Publish Article
        </button>
      </fieldset>
    </form>
  );
}
