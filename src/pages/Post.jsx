import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        setPost(response.data);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return <p>Caricamento in corso...</p>;

  if (!post)
    return <p>Post non trovato.</p>;

  const { title, body } = post;


  const thereIsPost = (postId) => {
    return postId !== undefined && postId !== null && postId !== '' && postId > 0;
  };

  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>

      <div className='buttons'>
        {thereIsPost(post.id - 1) && <button><Link to={`/posts/${post.id - 1}`}>⬅️Precedente</Link></button>}
        {thereIsPost(post.id + 1) && <button><Link to={`/posts/${post.id + 1}`}>➡️Successivo</Link></button>}
      </div>
    </>
  );
};