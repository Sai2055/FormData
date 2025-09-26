import { useState } from "react";
export default function FormValidation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    const newError = {};
    console.log("Clkicked");
    if (!name.trim()) {
      newError.name = "please provide the name";
    }
    if (!email.trim) {
      newError.email = "Enter the email";
    } else if (!emailRegex.test(email)) {
      newError.email = "Enter the valid Email";
    }

    setError(newError);
    if (Object.keys(newError).length === 0) {
      alert("already submitted");
      setError("");
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error.name && <p style={{ color: "red" }}> {error.name}</p>}
        </div>
        <div>
          <label htmlFor="">Email: </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && <p style={{ color: "red" }}> {error.email}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
