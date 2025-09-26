import { useEffect, useState, useRef } from "react";

export default function TableData() {
  const [ApiData, setApiData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const DebounceRef = useRef(null);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setApiData(data.users);
        setFilterData(data.users);
        console.log(data.users);
      });
  }, []);

  function handleSearchInput(e) {
    const keyword = e.target.value.toLowerCase();
    setSearchTerm(e.target.value);

    // if (keyword == "") return "";
    if (DebounceRef.current) {
      clearTimeout(DebounceRef.current);
    }

    DebounceRef.current = setTimeout(() => {
      const FilteredData = ApiData.filter((item) =>
        item.firstName.toLowerCase().includes(keyword)
      );
      setFilterData(FilteredData);
    }, 300);
  }

  return (
    <>
      <table className="table-styl">
        <thead>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((item) => (
            <tr key={item.id}>
              <td>{item.firstName}</td>
              <td>{item.age}</td>
              <td>{item.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <label>
        Enter the name to filter:
        <input type="text" value={searchTerm} onChange={handleSearchInput} />
      </label>
    </>
  );
}
