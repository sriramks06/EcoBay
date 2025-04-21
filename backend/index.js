// === EcoBay Backend with AI Scoring Logic (Node.js + Express) ===

const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// === Sustainability Score Logic ===
function calculateSustainabilityScore(product) {
  let score = 100;

  // Penalize for non-eco keywords
  const badWords = ["plastic", "non-recyclable", "toxic", "coal", "synthetic"];
  const goodWords = ["organic", "biodegradable", "recycled", "renewable", "eco"];

  badWords.forEach((word) => {
    if (product.description.toLowerCase().includes(word)) score -= 10;
  });

  goodWords.forEach((word) => {
    if (product.description.toLowerCase().includes(word)) score += 5;
  });

  if (product.certifications && product.certifications.includes("FSC")) score += 10;
  if (product.certifications && product.certifications.includes("Fair Trade")) score += 10;

  return Math.max(0, Math.min(score, 100));
}

// === API Endpoint to Analyze Product ===
app.post("/api/analyze", async (req, res) => {
  const { name, description, certifications } = req.body;

  // Simulated OpenAI logic - use actual API in real case
  const sustainabilityScore = calculateSustainabilityScore({
    name,
    description,
    certifications,
  });

  // Recommend alternatives - placeholder
  const alternatives = [
    {
      name: "EcoPack Bamboo Toothbrush",
      score: 92,
    },
    {
      name: "GreenLife Organic Cotton Tote",
      score: 88,
    },
  ];

  res.json({
    score: sustainabilityScore,
    alternatives,
  });
});

app.listen(port, () => {
  console.log(`EcoBay backend running on http://localhost:${port}`);
});
