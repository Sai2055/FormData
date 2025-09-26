import { useEffect, useState } from "react";
import axios from "axios";
export default function FilterInput() {
  //   const [filterData, setFilterData] = useState();
  const [ApiData, setApiData] = useState([]);
  const [inputdata, setInputData] = useState("");
  const [DummyFilterData, setDummyFilterData] = useState([]);

  useEffect(() => {
    axios("https://dummyjson.com/products").then((res) => {
      console.log(res.data);
      setApiData(res.data.products);
      setDummyFilterData(res.data.products);
      //   console.log(ApiData);
    });
  }, []);
  function handleFilter() {
    const FilterData = DummyFilterData.filter((item) =>
      item.title.toLowerCase().includes(inputdata.toLowerCase())
    );
    setApiData(FilterData);
  }

  return (
    <>
      <input
        type="text"
        value={inputdata}
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />
      <button onClick={handleFilter}>Filter</button>
      <div>
        {ApiData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </div>
    </>
  );
}
