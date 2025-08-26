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
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-950 via-black to-gray-800 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-black/50 backdrop-blur-2xl shadow-2xl rounded-2xl p-10 w-full max-w-xl space-y-6 border border-blue-900/50"
      >
        <h2 className="text-4xl font-extrabold text-primary text-center drop-shadow-lg">
          Application Form
        </h2>

        <div>
          <label className="block text-gray-200 mb-2 font-medium">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 bg-gray-900/70 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none transition"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label className="block text-gray-200 mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 bg-gray-900/70 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none transition"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label className="block text-gray-200 mb-2 font-medium">
            Phone Number
          </label>
          <input
            type="number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 bg-gray-900/70 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none transition"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div>
          <label className="block text-gray-200 mb-2 font-medium">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 bg-gray-900/70 text-gray-100 focus:ring-2 focus:ring-primary focus:outline-none transition"
            required
          />
        </div>

        <div>
          <label className="block text-gray-200 mb-2 font-medium">Address</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 bg-gray-900/70 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none transition"
            placeholder="Enter your address"
            rows="3"
            required
          />
        </div>

        <div>
          <label className="block text-gray-200 mb-2 font-medium">
            Course Type
          </label>
          <select
            name="course"
            value={form.course}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 bg-gray-900/70 text-gray-100 focus:ring-2 focus:ring-primary focus:outline-none transition"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-200 mb-2 font-medium">
            Transmission
          </label>
          <select
            name="transmission"
            value={form.transmission}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 bg-gray-900/70 text-gray-100 focus:ring-2 focus:ring-primary focus:outline-none transition"
          >
            <option>Automatic</option>
            <option>Manual</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-primary-dull text-black font-bold py-3 rounded-lg shadow-lg hover:scale-[1.02] transition-transform"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
