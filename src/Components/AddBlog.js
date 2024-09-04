import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for styling
import blogData from '../Data/blogs.json';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');
  const [authorImage, setAuthorImage] = useState('');
  const [authorBio, setAuthorBio] = useState('');
  const [date, setDate] = useState(new Date()); // Initialize with the current date
  const navigate = useNavigate();

  const handleAddBlog = () => {
    const newBlog = {
      id: blogData.length + 1,
      title,
      content,
      image,
      author,
      date: date.toISOString().split('T')[0], // Format the date as YYYY-MM-DD
      authorImage,
      authorBio,
    };

    // Update the blogData array (in practice, you might want to update it on a server or local storage)
    blogData.push(newBlog);
    
    navigate('/');
  };

  return (
    <div className="max-w-lg mx-auto text-center px-6 py-16">
      <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent mt-7 mb-8">Add New Blog</h1>
      <div className="space-y-6">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Author Image URL"
          value={authorImage}
          onChange={(e) => setAuthorImage(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Author Bio"
          value={authorBio}
          onChange={(e) => setAuthorBio(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <div className="w-full">
        <label placeholder="Date" className="block text-gray-400 mb-2">Date</label>
        
          <DatePicker
            selected={date}
            placeholder="Date"
            onChange={(date) => setDate(date)}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            dateFormat="yyyy-MM-dd"
          />
        </div>
        <button
          onClick={handleAddBlog}
          className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 text-center"
        >
          Add Blog
        </button>
      </div>
    </div>
  );
};

export default AddBlog;
