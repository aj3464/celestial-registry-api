const celestialData = [
  {
    id: 1,
    name: "Mars",
    category: "Planet",
    description: "The fourth planet from the Sun.",
    tags: ["red planet", "rocky", "exploration"],
    specifications: {
      gravity: "3.71 m/s²",
      radius: "3389.5 km",
      discovered: "Known since antiquity"
    }
  },
  {
    id: 2,
    name: "Jupiter",
    category: "Planet",
    description: "Largest planet in the Solar System.",
    tags: ["gas giant", "largest"],
    specifications: {
      gravity: "24.79 m/s²",
      radius: "69911 km",
      discovered: "Known since antiquity"
    }
  },
  {
    id: 3,
    name: "Sagittarius A*",
    category: "Black Hole",
    description: "Supermassive black hole at the center of the Milky Way.",
    tags: ["milky way", "supermassive"],
    specifications: {
      mass: "4.3 million solar masses",
      discovered: "1974"
    }
  },
  {
    id: 4,
    name: "Apollo 11",
    category: "Mission",
    description: "First crewed Moon landing mission.",
    tags: ["moon landing", "NASA"],
    specifications: {
      year: 1969,
      crew: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins"]
    }
  }
];

module.exports = celestialData;