import React, { useEffect, useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://fountaincare-hospital-limited-backend-4ilsnanbu.vercel.app/api/posts');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (Array.isArray(data)) {
          setPosts(data.reverse());  // Latest posts first
        } else {
          setError('Data format error.');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPosts();
  }, []);

  const handleThumbnailClick = (post) => {
    setSelectedPost(post);
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="blog-container">
      {error && <p className="error-message">Error: {error}</p>}
      {!selectedPost && posts.length === 0 && !error && <p className="loading-message">Loading...</p>}

      {!selectedPost ? (
        <div className="thumbnail-container">
          {posts.map((post) => (
            <div className="thumbnail" key={post._id} onClick={() => handleThumbnailClick(post)}>
              <img src={post.imageUrl} alt={post.title} className="thumbnail-image" />
              <h2 className="thumbnail-title">{post.title}</h2>
              <p className="thumbnail-date">{formatDate(post.createdAt)}</p> {/* Display Date below thumbnail */}
            </div>
          ))}
        </div>
      ) : (
        <div className="blog-post">
          <button className="back-button" onClick={handleBackClick}>Back to posts</button>
          <div className="post-image-container">
            <img src={selectedPost.imageUrl} alt={selectedPost.title} className="post-image" />
          </div>
          <h2 className="post-title">{selectedPost.title}</h2>
          <p className="post-date">{formatDate(selectedPost.createdAt)}</p> {/* Display Date below title */}
          <p className="post-content">{selectedPost.content}</p>
          {selectedPost.videoUrl && (
            <div className="post-video-container">
              <video src={selectedPost.videoUrl} controls className="post-video" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Blog;
