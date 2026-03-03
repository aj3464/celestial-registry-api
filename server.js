const express = require("express");
const app = express();
const data = require("./data");

const PORT = process.env.PORT || 3000;

console.log("Space Facts API starting...");


// ===============================
// ROOT → Show Random Space Fact
// ===============================
app.get("/", (req, res) => {
  const randomIndex = Math.floor(Math.random() * data.length);
  const randomFact = data[randomIndex];

  res.status(200).json({
    status: "success",
    message: "Random Space Fact",
    timestamp: new Date(),
    data: randomFact
  });
});


// ==================================
// GET ALL SPACE FACTS (with filters)
// ==================================
app.get("/api/space-facts", (req, res) => {
  const { category, search } = req.query;

  let results = data;

  // Filter by category
  if (category) {
    results = results.filter(item =>
      item.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Search by name, tags, or description
  if (search) {
    const searchTerm = search.toLowerCase();

    results = results.filter(item =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm) ||
      item.tags.some(tag =>
        tag.toLowerCase().includes(searchTerm)
      )
    );
  }

  res.status(200).json({
    status: "success",
    results: results.length,
    timestamp: new Date(),
    data: results
  });
});


// ===============================
// GET RANDOM FACT (API Endpoint)
// ===============================
app.get("/api/space-facts/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * data.length);

  res.status(200).json({
    status: "success",
    timestamp: new Date(),
    data: data[randomIndex]
  });
});


// ===============================
// GET BY ID
// ===============================
app.get("/api/space-facts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = data.find(d => d.id === id);

  if (!item) {
    return res.status(404).json({
      status: "fail",
      message: "Space fact not found"
    });
  }

  res.status(200).json({
    status: "success",
    timestamp: new Date(),
    data: item
  });
});


// ===============================
// START SERVER
// ===============================
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});