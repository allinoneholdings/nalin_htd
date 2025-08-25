import React, { useState } from "react";
import { useNavigate } from "react-router";

const ApplicationForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    course: "Beginner",
    transmission: "Automatic",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-950/30 shadow-lg rounded-2xl p-8 w-full max-w-lg space-y-3"
      >
        <h2 className="text-4xl font-bold text-primary text-center">
          Application Form
        </h2>

        <div>
          <label className="block text-gray-200 mb-2">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 bg-gray-900 focus:ring-2 focus:ring-primary"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label className="block text-gray-200 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 bg-gray-900 focus:ring-2 focus:ring-primary"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label className="block text-gray-200 mb-2">Phone Number</label>
          <input
            type="number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 bg-gray-900 focus:ring-2 focus:ring-primary"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div>
          <label className="block text-gray-200 mb-2">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 bg-gray-900 focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block text-gray-200 mb-2">Address</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 bg-gray-900 focus:ring-2 focus:ring-primary"
            placeholder="Enter your address"
            required
          />
        </div>

        <div>
          <label className="block text-gray-200 mb-2">Course Type</label>
          <select
            name="course"
            value={form.course}
            onChange={handleChange}
            className="w-full border bg-gray-900 rounded-lg p-3 focus:ring-2 focus:ring-primary"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-200 mb-2">Transmission</label>
          <select
            name="transmission"
            value={form.transmission}
            onChange={handleChange}
            className="w-full border bg-gray-900 rounded-lg p-3 focus:ring-2 focus:ring-primary"
          >
            <option>Automatic</option>
            <option>Manual</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-black font-semibold py-3 rounded-lg hover:bg-primary-dull transition"
          onSubmit={() => {navigate('/'); window.scrollTo(0,0);}}
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default ApplicationForm