const express = require("express");
const app = express();
const data = require("./data");

const PORT = process.env.PORT || 3000;

// GET all or filtered
app.get("/", (req, res) => {
  res.redirect("/api/celestial");

  let results = data;

  if (category) {
    results = results.filter(item =>
      item.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (search) {
    results = results.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.tags.some(tag =>
        tag.toLowerCase().includes(search.toLowerCase())
      )
    );
  }

  res.json({
    results: results.length,
    data: results
  });
});

// GET by ID
app.get("/api/celestial/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = data.find(d => d.id === id);

  if (!item) {
    return res.status(404).json({ message: "Not Found" });
  }

  res.json(item);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});