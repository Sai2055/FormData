import React from "react";
import { useState } from "react";
export default function Form() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [language,setLanguage] = useState('');
  // const [gender, setGender] = useState('');
  // const [formData, setFormData] = useState('');
  // const [formEmail, setFormEmail] = useState('')
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    language: "",
  });
  const [submitedData, setSubmittedData] = useState();
  function handleSubmit(e) {
    // setFormData(prev=>[...prev, gender])
    // setFormEmail(prev=>[...prev, email])
    // setLanguage(prev=>[...prev, language])
    // setGender(prev=>[...prev, gender])
    // setFormData(prev=>[...prev, formData])
    e.preventDefault();
    setSubmittedData(formData);
    console.log(formData);
  }

  function handleFormData(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <>
      <label>
        Name:
        <input
          type="text"
          name="name"
          placeholder="Enter the name"
          value={formData.name}
          onChange={handleFormData}
        />
      </label>
      <div>
        <label>
          Email:
          <input
            type="name"
            name="email"
            placeholder="Enter the Email"
            value={formData.email}
            onChange={handleFormData}
          />
        </label>
      </div>
      <label>Select the Gender:</label>

      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleFormData}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleFormData}
        />
        Female
      </label>
      <div>
        <label>Select Language:</label>
        <select
          name="language" // ✅ Add this line
          value={formData.language}
          onChange={handleFormData}
        >
          <option
            value="
"
          >
            --select--
          </option>
          <option value="English">English</option>
          <option value="Telugu">Telugu</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>
      <button onClick={handleSubmit}>Submit Form</button>
      <button>Reset Form</button>
      <div>
        <p>
          {submitedData
            ? `name:${submitedData.name},
        email:${submitedData.email},
        gender:${submitedData.gender},
        language:${submitedData.language}`
            : null}
        </p>
      </div>
    </>
  );
}
