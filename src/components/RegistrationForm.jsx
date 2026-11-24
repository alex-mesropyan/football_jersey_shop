import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    gender: "",
    terms: false
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.terms) {
      newErrors.terms = "You must agree to the Terms";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmittedData(formData);
    } else {
      setSubmittedData(null);
    }
  }

  return (
    <div className="mx-auto my-10 max-w-xl rounded-2xl bg-white p-8 shadow-lg">

      <h1 className="mb-6 text-center text-3xl font-bold">
        User Registration
      </h1>

      <form onSubmit={handleSubmit}>

        <div className="mb-4">
          <label className="mb-1 block">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />
          <p className="text-sm text-red-500">{errors.firstName}</p>
        </div>

        <div className="mb-4">
          <label className="mb-1 block">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />
          <p className="text-sm text-red-500">{errors.lastName}</p>
        </div>

        <div className="mb-4">
          <label className="mb-1 block">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />
          <p className="text-sm text-red-500">{errors.email}</p>
        </div>

        <div className="mb-4">
          <label className="mb-1 block">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />
          <p className="text-sm text-red-500">{errors.password}</p>
        </div>

        <div className="mb-4">
          <label className="mb-1 block">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />
          <p className="text-sm text-red-500">
            {errors.confirmPassword}
          </p>
        </div>

        <div className="mb-4">
          <label className="mb-1 block">Date of Birth</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />
            I agree to the Terms
          </label>
          <p className="text-sm text-red-500">{errors.terms}</p>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700"
        >
          Register
        </button>

      </form>

      {submittedData && (
        <div className="mt-8 rounded-xl bg-green-50 p-5">
          <h2 className="mb-4 text-xl font-bold text-green-700">
            Registration Successful!
          </h2>

          <p>First Name: {submittedData.firstName}</p>
          <p>Last Name: {submittedData.lastName}</p>
          <p>Email: {submittedData.email}</p>
          <p>Birth Date: {submittedData.birthDate}</p>
          <p>Gender: {submittedData.gender}</p>
          <p>Terms Accepted: Yes</p>
        </div>
      )}

    </div>
  );
}

export default RegistrationForm;
