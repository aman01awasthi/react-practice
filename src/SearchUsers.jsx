//Purpose: to let users search user and then display data
//Receives: receives user name as input
//Returns: display data as per users search

import { useEffect, useState } from "react";

function SearchUsers({ title }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [inputVal, setInputVal] = useState("");

  // fetch Url data
  // if response not ok throw error
  // convert to json
  // setData with result
  // if anything wrong, setError
  // setLoading to false
  // get inputValue

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        let res = await fetch(
          `https://jsonplaceholder.typicode.com/users?id=${inputVal}`,
        );
        let result = await res.json();
        if (res.ok) {
          setData(result);
          return result;
        }
      } catch (eror) {
        return setError("Data not found");
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [inputVal]);

  const displayName = (e) => {
    setInputVal(e.target.value);
  };

  if (loading) {
    return "Loading...";
  }
  if (error) {
    return "User not found";
  }
  return (
    <div>
      <h2>{title}</h2>

      <label htmlFor="user">User</label>
      <input
        type="text"
        id="user"
        name="user"
        placeholder="Enter name to search"
        value={inputVal}
        onChange={displayName}
      />

      <div>
        {data.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  );
}
export default SearchUsers;
