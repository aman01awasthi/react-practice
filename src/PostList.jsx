//This is the Parent COmponent
//Purpose: Post list will fetch data from api and then pass each data to child Post Card
//Receives: here will receive data from ap

import { useEffect, useState } from "react";
import PostCard from "./PostCard";

//Returns: will pass data to child component
function PostList() {
  const [data, setData] = useState([]);
  const [like, setLike] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        let response = await res.json();
        if (res.ok) {
          setData(response);
          return response;
        }
      } catch (error) {
        return setError("Data Not found");
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  let handleLike = (id) => {
    setLike((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  if (loading) {
    return "loading...";
  }
  if (error) {
    return "Data not found";
  }

  return (
    <>
      <div>
        <h1>Postlist Here</h1>
        {data.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            likes={like}
            onLike={handleLike}
          />
        ))}
      </div>
    </>
  );
}

export default PostList;
