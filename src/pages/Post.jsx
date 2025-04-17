import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>
    </>
  );
};