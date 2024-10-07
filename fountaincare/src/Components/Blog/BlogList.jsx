import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from backend
    fetch('/api/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="blog-list">
      {posts.map((post) => (
        <div className="blog-item" key={post.id}>
          <img src={post.imageUrl} alt={post.title} className="blog-thumbnail" />
          <div className="blog-content">
            <h2>{post.title}</h2>
            <p>{post.shortDescription}</p>
            <Link to={`/post/${post.id}`} className="read-more">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
