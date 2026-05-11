import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../lib/data';

/**
 * Blog's posts
 */
export const PostList = () => (
    <div>
        <h1>Blog Posts</h1>
        {BLOG_POSTS.map(post => (
            <div key={post.id}>
                <Link to={`/posts/${post.id}`}><h3>{post.title}</h3></Link>
            </div>
        ))}
    </div>
);

