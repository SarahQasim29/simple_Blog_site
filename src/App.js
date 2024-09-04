
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import BlogList from './Components/BlogList';
import BlogPost from './Components/BlogPost'; // Make sure this file exis
import AddBlog from './Components/AddBlog';
import About from './Components/About'; // Ensure this component exists
import Contact from './Components/Contact'; // Ensure this component exists
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
        
        <Route path="/edit-blog/:id" element={<AddBlog />} />
       
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
