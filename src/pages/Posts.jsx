import { Link } from "react-router-dom";

function Posts() {
  return (
    <div>
      <h2>Posts</h2>
      <Link to="/posts/1">
        <button>One</button>
      </Link>

      <Link to="/posts/2">
      <button>Two</button>
      </Link>
    </div>
  );
}
export default Posts;
