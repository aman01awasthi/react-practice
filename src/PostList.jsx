import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import Skeleton from "./Skeleton";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setPosts(data);

        // initialize likes
        const initialLikes = {};
        data.forEach(post => {
          initialLikes[post.id] = 0;
        });
        setLikes(initialLikes);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  // callback passed to child
  function handleLike(id) {
    setLikes(prev => ({
      ...prev,
      [id]: prev[id] + 1
    }));
  }

  // 🔹 Conditional Rendering
  if (loading) return <Skeleton />;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Posts</h2>

      {posts.map(post => (
        <PostCard
          key={post.id}   // ✅ correct key
          post={post}
          likes={likes[post.id]}
          onLike={handleLike}
        />
      ))}
    </div>
  );
}