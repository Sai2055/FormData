import { useState, useEffect } from "react";
import axios from "axios";
export default function TestApi() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => setData(res.data.users));
  }, []);
  return (
    <>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.firstName}</li>
        ))}
      </ul>
    </>
  );
}
