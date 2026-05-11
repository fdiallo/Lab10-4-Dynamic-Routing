import { useParams } from 'react-router-dom';
import { BLOG_POSTS } from '../lib/data';


export const PostDetail = () => {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) return <h2>Post not found!</h2>;

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
};