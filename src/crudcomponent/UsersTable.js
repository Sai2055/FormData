import { useState, useEffect } from "react";
import axios from "axios";
export default function UsersTable() {
  const [apiData, setApiData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingRow, setEditingRow] = useState({});

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => {
      setApiData(res.data.users);
      console.log(res.data);
    });
  }, []);

  handleEdit = (index) => {
    setEditingIndex(index);
    setEditingRow({ ...apiData[index] });
  };

  handleChange = (filed, value) => {
    setEditingRow((prev) => ({ ...prev, [filed]: value }));
  };

  handleSave = (index) => {
    let updatedData = [...apiData];
    updatedData[index] = editingRow;
    setApiData(updatedData);
    setEditingIndex(null);
  };
  handleDelete = (index) => {
    const Confirmed = window.confirm("are you sure to delete");
    if (Confirmed) {
      const filteredData = apiData.filter((_, i) => i !== index);
      setApiData(filteredData);
    }
  };
  const tableStyle = { border: "1px solid" };
  return (
    <>
      <table style={tableStyle}>
        <thead>
          <tr style={{ border: "1px solid" }}>
            <th style={{ borderBottom: "1px solid" }}>Name</th>
            <th style={{ borderBottom: "1px solid" }}>Phone</th>
            <th style={{ borderBottom: "1px solid" }}>Email</th>
            <th style={{ borderBottom: "1px solid" }}>Age</th>
            <th style={{ borderBottom: "1px solid" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((item, index) => (
            <tr key={index} className="users-tableData">
              <td className="users-tableData">
                {editingIndex === index ? (
                  <input
                    value={editingRow.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                  />
                ) : (
                  item.firstName
                )}
              </td>
              <td className="users-tableData">
                {editingIndex === index ? (
                  <input
                    value={editingRow.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />
                ) : (
                  item.phone
                )}
              </td>
              <td className="users-tableData">
                {editingIndex === index ? (
                  <input
                    value={editingRow.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                ) : (
                  item.email
                )}
              </td>
              <td className="users-tableData">
                {editingIndex === index ? (
                  <input
                    value={editingRow.age}
                    onChange={(e) => handleChange("age", e.target.value)}
                  />
                ) : (
                  item.age
                )}
              </td>
              <td className="users-tableData">
                {editingIndex === index ? (
                  <>
                    <button onClick={() => handleSave(index)}>Save</button>
                    <button
                      onClick={
                        (handleCancel = () => {
                          setEditingIndex(false);
                        })
                      }
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(index)}>✏️</button>
                    <button onClick={() => handleDelete(index)}> 🗑️</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
