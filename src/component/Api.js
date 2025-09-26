import { useEffect, useState } from "react";

export default function Api() {
  const [ApiData, setApiData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
        console.log(data);
      }, []);
  });
  return <>{ApiData.users.id}</>;
}
