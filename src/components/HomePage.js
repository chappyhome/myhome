import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const BlogPostSummary = ({ id, title, summary }) => (
  <div className="blog-post-summary">
    <h2>{title}</h2>
    <p>{summary}</p>
    <Link to={`/post/${id}`}>阅读更多</Link>
  </div>
);

const HomePage = () => {
  const posts = [
    { id: 1, title: '我的第一篇博客文章', summary: '这是我的第一篇博客文章的摘要。欢迎来到我的博客!' },
    { id: 2, title: 'React简介', summary: 'React是一个用于构建用户界面的JavaScript库。本文将介绍React的基础知识。' },
  ];

  return (
    <div className="home-page">
      <h1>欢迎来到我的博客</h1>
      {posts.map(post => (
        <BlogPostSummary key={post.id} id={post.id} title={post.title} summary={post.summary} />
      ))}
    </div>
  );
};

export default HomePage;