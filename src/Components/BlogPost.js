import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../Data/blogs.json'; // Ensure you have the correct path to your data
import './BlogPost.css';

const BlogPostDetail = () => {
  const { id } = useParams();
  console.log("ID from URL:", id);
  
  const blog = blogData.find(blog => blog.id === parseInt(id));
  console.log("Found blog:", blog);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-wrap">
      <div className="w-full lg:w-3/4 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mt-14 mb-4">{blog.title}</h1>
        <div className="text-gray-500 mb-4 flex items-center space-x-4">
          <span className="flex items-center">
            <span className="material-icons mr-2">Person:</span>
            {blog.author}
          </span>
          <span className="flex items-center">
            <span className="material-icons mr-2">Date_range:</span>
            {blog.date}
          </span>
        </div>
        <div className="text-gray-600 mb-8">
          <p>{blog.content}</p>
        </div>
      </div>
      <div className="w-full lg:w-1/4 px-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img src={blog.authorImage} alt={blog.author} className="w-full h-40 object-cover rounded-full mt-10 mb-8" style={{
      borderRadius: '12px',
      transition: 'transform 0.4s ease, opacity 0.3s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.05)';
      e.currentTarget.style.opacity = '0.9';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.opacity = '1';
    }}
   />
          <h2 className="text-xl font-bold mb-2">{blog.author}</h2>
          <p>{blog.authorBio}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
