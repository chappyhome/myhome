import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPage.css';

const BlogPost = ({ title, content }) => (
  <div className="blog-post">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const BlogPage = () => {
  const { id } = useParams();
  const posts = [
    { id: 1, title: '我的第一篇博客文章', content: '这是我的第一篇博客文章的内容。欢迎来到我的博客!' },
    { id: 2, title: 'React简介', content: 'React是一个用于构建用户界面的JavaScript库。它让创建交互式UI变得轻而易举。' },
  ];

  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return <div>文章未找到</div>;
  }

  return (
    <div className="blog-page">
      <Link to="/">返回主页</Link>
      <BlogPost title={post.title} content={post.content} />
    </div>
  );
};

export default BlogPage;