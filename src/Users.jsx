// PURPOSE: to fetch data from api
// RECEIVES: as component gets data
// RETURNS: display data to user as soon as component gets rendered

import { useEffect, useState } from "react";

// 1. declare state for data
// 2. declare state for loading
// 3. declare state for error
// 4. useEffect with empty array
// 5. inside effect — fetch, handle loading, handle error
// 6. return JSX — show loading text, error text, or data

function Users() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch the URL
  // if response not ok, throw error
  // convert to json
  // setData with the result
  // if anything goes wrong, setError
  // either way, setLoading to false when done
  useEffect(() => {
    async function getData() {
      try {
        let res = await fetch(`https://jsonplaceholder.typicode.com/broken`);
        let result = await res.json();
        if (res.ok) {
          setData(result);
          return result;
        } else {
          return setError("Failed to fetch Data");
        }
      } catch (error) {
        setError("No data Yet");
      }finally{
        setLoading(false);
      }
    }
    getData();
  }, []);

  if(loading){
    return 'Loading...';
  }
  if(error){
    return 'Data not Found';
  }

  return (
    <div>
        {data.map((user)=>(
            <p key={user.id}>{user.name}</p>
        ))}
    </div>
);
}

export default Users;
