import ArticleContents from "@/app/_components/ui/Articles/ArticleContents";
import ArticleMeta from "@/app/_components/ui/Articles/ArticleMeta";
import CommentCard from "@/app/_components/ui/Articles/Comments/CommentCard";
import CommentForm from "@/app/_components/ui/Articles/Comments/CommentForm";

export const articleGetData = async (article) => {
  const res = await fetch(`http://localhost:3000/api/articles/${article}`);
  const data = await res.json();
  return data;
};

export default async function Articles({ params }) {
  const { article } = params;
  const articleData = await articleGetData(article);
  console.log(articleData);

  const userData = {
    username: "Eric Simons",
    image: "http://i.imgur.com/Qr71crq.jpg",
  };

  const commentData = [
    {
      body: "It takes a Jacobian",
      author: {
        username: "jake",
        image: "https://i.stack.imgur.com/xHWG8.jpg",
      },
      createdAt: "December 29th",
    },
    {
      body: "hogehogehugahuga",
      author: {
        username: "hoge",
        image: "https://i.stack.imgur.com/xHWG8.jpg",
      },
      createdAt: "December 28th",
    },
  ];

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{articleData.title}</h1>

          <ArticleMeta userData={userData} articleData={articleData} />
        </div>
      </div>

      <div className="container page">
        <ArticleContents articleData={articleData} />

        <hr />

        <div className="article-actions">
          <ArticleMeta userData={userData} articleData={articleData} />
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <CommentForm userData={userData} />
            {commentData.map((ele, key) => (
              <CommentCard commentData={ele} key={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
