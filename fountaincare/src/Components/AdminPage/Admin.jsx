import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  // Handle post submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      content,
      imageUrl,
    };

    // Post this data to the backend
    fetch('https://fountaincare-hospital-limited-backend-4ilsnanbu.vercel.app/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Post added:', data);
        // Reset form fields
        setTitle('');
        setContent('');
        setImageUrl('');
      })
      .catch((error) => console.error('Error adding post:', error));
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Clear the auth flag
    navigate('/admin-login'); // Redirect to login page
  };

  // Automatically log out when admin page is closed
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('isAuthenticated'); // Clear the auth flag on page close
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      // Cleanup the event listener when the component unmounts
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className="admin-page">
      {/* Logout Button */}
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default Admin;
