// === EcoBay Frontend - Chrome Extension (React) ===

import React, { useState } from "react";
import './popup.css';

function Popup() {
  const [product, setProduct] = useState({ name: "", description: "", certifications: "" });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...product,
        certifications: product.certifications.split(",")
      }),
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="p-4 w-[300px]">
      <h2 className="text-lg font-bold mb-2">EcoBay Analyzer</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <input name="name" placeholder="Product Name" onChange={handleChange} className="border p-1 rounded" />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="border p-1 rounded" />
        <input name="certifications" placeholder="Certifications (comma-separated)" onChange={handleChange} className="border p-1 rounded" />
        <button type="submit" className="bg-green-600 text-white p-1 rounded">Analyze</button>
      </form>
      {result && (
        <div className="mt-4">
          <p><strong>Score:</strong> {result.score}</p>
          <p className="mt-2 font-semibold">Eco-Friendly Alternatives:</p>
          <ul className="list-disc ml-5">
            {result.alternatives.map((alt, index) => (
              <li key={index}>{alt.name} (Score: {alt.score})</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Popup;
