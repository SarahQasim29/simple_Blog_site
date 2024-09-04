import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../Data/blogs.json';
import './BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div className="blog-detail-container">
      <div className="blog-content">
        <h1 className="blog-title">{blog.title}</h1>
        <p className="blog-date">{blog.date}</p>
        <p className="blog-body">{blog.content}</p>
      </div>
      <div className="author-info">
        <img src={blog.image} alt={blog.author} className="author-image" />
        <div className="author-details">
          <h3>{blog.author}</h3>
          <p>Date: {blog.date}</p>
          <p>Bio: {blog.authorBio || 'No bio available.'}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
