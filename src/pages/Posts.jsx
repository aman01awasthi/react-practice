import { Link, useNavigate } from "react-router-dom";

function Posts() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Posts</h2>
      <Link to="/posts/1">
        <button>One</button>
      </Link>

      <Link to="/posts/2">
      <button>Two</button>
      </Link>

      <button onClick={() =>navigate('/posts/3')}>Three</button>
    </div>
  );
}
export default Posts;
