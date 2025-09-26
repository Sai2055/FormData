import { useState } from "react";
// import { updateIndexSignature } from "typescript";
export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [addTodo, setAddTodo] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddClick = () => {
    if (todo.trim() == "") return;
    //handling the edit logic
    if (isEdit) {
      const updatedTodo = [...addTodo];
      updatedTodo[editIndex].text = todo;
      setAddTodo(updatedTodo);
      setIsEdit(false);
      setEditIndex(null);
    } else {
      setAddTodo((prev) => [...prev, { text: todo, isChecked: false }]);
    }
    setTodo("");
  };

  const handleToggleCheck = (indexToToggle) => {
    setAddTodo((prevTodo) =>
      prevTodo.map((item, index) =>
        index === indexToToggle ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  function handleRemove(indexToRemove) {
    const FilterInput = addTodo.filter(
      (item, index) => index !== indexToRemove
    );
    setAddTodo(FilterInput);
  }

  const handleEdit = (index) => {
    setTodo(addTodo[index].text);
    setIsEdit(true);
    setEditIndex(index);
  };

  return (
    <>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAddClick}>{isEdit ? "Update" : "Add"}</button>
      <div>
        {addTodo.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => handleToggleCheck(index)}
            />
            {
              <span
                style={{
                  textDecoration: item.isChecked ? "line-through" : "none",
                }}
              >
                {item.text}
              </span>
            }
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </div>
    </>
  );
}
