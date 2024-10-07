import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch post details from backend
    fetch(`/api/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error('Error fetching post:', error));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
      {post.videoUrl && <video src={post.videoUrl} controls />}
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
