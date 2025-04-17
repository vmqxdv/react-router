import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
  }, []);

  const displayPosts = (posts) => {
    return posts.map(post => (
      <div key={post.id}>
        <h3><Link to={`${post.id}`}>{post.title}</Link></h3>
      </div>
    ))
  };

  return (
    <div className='posts'>
      {displayPosts(posts)}
    </div>
  );
};