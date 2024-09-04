import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import blogData from '../Data/blogs.json';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogData);
  }, []);

  const handleDeleteBlog = (id) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);

    // In practice, you might also need to update the data source (e.g., server or local storage)
    // e.g., save the updatedBlogs to localStorage or send a DELETE request to a server
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent mt-10 mb-12">
        Blog Posts
      </h1>
      <div className="mb-8 text-center">
        <Link to="/add-blog" className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 text-center">
          Add New Blog
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{blog.title}</h2>
              <p className="text-gray-600 line-clamp-3">{blog.content}</p>
              <div className="flex justify-between mt-4">
                <Link to={`/blogs/${blog.id}`} className="text-blue-600 font-semibold hover:underline">
                  Read More →
                </Link>
                <button
                  onClick={() => handleDeleteBlog(blog.id)}
                  className="text-red-600 font-semibold hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
