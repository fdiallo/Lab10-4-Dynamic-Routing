import { Link, useParams } from 'react-router-dom';
import type { Post } from '../types/types';

const mockPosts: Post[] = [
  { id: '1', title: 'React is Cool', content: 'Context and Routing are powerful...' },
  { id: '2', title: 'TypeScript Tips', content: 'Interfaces make code safer...' },
];

// Main Index Page
export const BlogIndex = () => (
  <div>
    <h1>My Blog</h1>
    {mockPosts.map(post => (
      <div key={post.id}>
        <Link to={`/post/${post.id}`}><h3>{post.title}</h3></Link>
      </div>
    ))}
  </div>
);

// Dynamic Post Page
export const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = mockPosts.find(p => p.id === id);

  if (!post) return <h2>Post not found!</h2>;

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
};
