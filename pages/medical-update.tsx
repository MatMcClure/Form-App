import React, { useState } from "react";

export default function MedicalUpdateForm() {
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    allergies: "",
    medications: "",
    dentistName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // you could send this to a backend, store locally, etc.
  };

  return (
    <div className="form-container">
      <h1>Medical Update Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>

        <label>
          Date of Birth:
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
        </label>

        <label>
          Allergies:
          <textarea name="allergies" value={formData.allergies} onChange={handleChange} />
        </label>

        <label>
          Current Medications:
          <textarea name="medications" value={formData.medications} onChange={handleChange} />
        </label>

        <label>
          Dentist Name:
          <input type="text" name="dentistName" value={formData.dentistName} onChange={handleChange} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
