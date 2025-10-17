// Registration form component
import React, { useState } from "react";

export function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    // Simulate registration
    alert("Registered!");
  };

  return (
    <form className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded shadow" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Email</label>
        <input
          type="email"
          className="w-full px-4 py-2 border rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 border rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Confirm Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 border rounded"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition-colors">
        Register
      </button>
    </form>
  );
}
