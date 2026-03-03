const celestialData = [

{
  id: 1,
  name: "Mercury",
  category: "Planet",
  description: "The smallest planet in the Solar System and closest to the Sun.",
  tags: ["inner planet", "rocky", "no atmosphere"],
  specifications: { gravity: "3.7 m/s²", radius: "2439.7 km", orbitalPeriod: "88 days" }
},
{
  id: 2,
  name: "Venus",
  category: "Planet",
  description: "Second planet from the Sun with a thick toxic atmosphere.",
  tags: ["runaway greenhouse", "hottest planet"],
  specifications: { gravity: "8.87 m/s²", radius: "6051.8 km", orbitalPeriod: "225 days" }
},
{
  id: 3,
  name: "Earth",
  category: "Planet",
  description: "The only known planet to support life.",
  tags: ["habitable", "water", "life"],
  specifications: { gravity: "9.8 m/s²", radius: "6371 km", orbitalPeriod: "365 days" }
},
{
  id: 4,
  name: "Mars",
  category: "Planet",
  description: "Known as the Red Planet due to iron oxide on its surface.",
  tags: ["red planet", "rover missions"],
  specifications: { gravity: "3.71 m/s²", radius: "3389.5 km", orbitalPeriod: "687 days" }
},
{
  id: 5,
  name: "Jupiter",
  category: "Planet",
  description: "The largest planet in the Solar System.",
  tags: ["gas giant", "great red spot"],
  specifications: { gravity: "24.79 m/s²", radius: "69911 km", moons: "95+" }
},
{
  id: 6,
  name: "Saturn",
  category: "Planet",
  description: "Famous for its extensive ring system.",
  tags: ["rings", "gas giant"],
  specifications: { gravity: "10.44 m/s²", radius: "58232 km", moons: "140+" }
},
{
  id: 7,
  name: "Uranus",
  category: "Planet",
  description: "An ice giant that rotates on its side.",
  tags: ["ice giant", "tilted axis"],
  specifications: { gravity: "8.69 m/s²", radius: "25362 km", orbitalPeriod: "84 years" }
},
{
  id: 8,
  name: "Neptune",
  category: "Planet",
  description: "The farthest known planet in the Solar System.",
  tags: ["ice giant", "strong winds"],
  specifications: { gravity: "11.15 m/s²", radius: "24622 km", orbitalPeriod: "165 years" }
},
{
  id: 9,
  name: "Pluto",
  category: "Dwarf Planet",
  description: "Reclassified as a dwarf planet in 2006.",
  tags: ["kuiper belt", "new horizons"],
  specifications: { gravity: "0.62 m/s²", radius: "1188 km", orbitalPeriod: "248 years" }
},
{
  id: 10,
  name: "Sun",
  category: "Star",
  description: "The star at the center of our Solar System.",
  tags: ["g-type star", "fusion"],
  specifications: { temperature: "5500°C", age: "4.6 billion years", type: "G2V" }
},
{
  id: 11,
  name: "Sirius",
  category: "Star",
  description: "The brightest star in the night sky.",
  tags: ["binary system", "brightest"],
  specifications: { distance: "8.6 light years", type: "A1V" }
},
{
  id: 12,
  name: "Betelgeuse",
  category: "Star",
  description: "A red supergiant star in the Orion constellation.",
  tags: ["supergiant", "variable star"],
  specifications: { distance: "642 light years", type: "M1-2 Ia-ab" }
},
{
  id: 13,
  name: "Sagittarius A*",
  category: "Black Hole",
  description: "Supermassive black hole at the center of the Milky Way.",
  tags: ["milky way", "supermassive"],
  specifications: { mass: "4 million solar masses", discovered: "1974" }
},
{
  id: 14,
  name: "Cygnus X-1",
  category: "Black Hole",
  description: "One of the first strong black hole candidates.",
  tags: ["x-ray source"],
  specifications: { distance: "6070 light years" }
},
{
  id: 15,
  name: "Andromeda Galaxy",
  category: "Galaxy",
  description: "Nearest spiral galaxy to the Milky Way.",
  tags: ["spiral galaxy"],
  specifications: { distance: "2.5 million light years" }
},
{
  id: 16,
  name: "Milky Way",
  category: "Galaxy",
  description: "Our home galaxy.",
  tags: ["spiral galaxy", "solar system"],
  specifications: { diameter: "100,000 light years" }
},
{
  id: 17,
  name: "Hubble Space Telescope",
  category: "Mission",
  description: "Space telescope launched in 1990.",
  tags: ["nasa", "telescope"],
  specifications: { launchYear: 1990 }
},
{
  id: 18,
  name: "James Webb Space Telescope",
  category: "Mission",
  description: "Infrared space telescope launched in 2021.",
  tags: ["infrared", "deep space"],
  specifications: { launchYear: 2021 }
},
{
  id: 19,
  name: "Apollo 11",
  category: "Mission",
  description: "First crewed Moon landing mission.",
  tags: ["moon landing"],
  specifications: { year: 1969 }
},
{
  id: 20,
  name: "Voyager 1",
  category: "Mission",
  description: "Farthest human-made object from Earth.",
  tags: ["interstellar"],
  specifications: { launchYear: 1977 }
},
{
  id: 21,
  name: "Kepler-22b",
  category: "Exoplanet",
  description: "First confirmed planet in the habitable zone of a Sun-like star.",
  tags: ["exoplanet", "habitable zone"]
},
{
  id: 22,
  name: "TRAPPIST-1",
  category: "Star System",
  description: "Star system with seven Earth-sized exoplanets.",
  tags: ["exoplanets"]
},
{
  id: 23,
  name: "Halley's Comet",
  category: "Comet",
  description: "Visible from Earth every 76 years.",
  tags: ["periodic comet"]
},
{
  id: 24,
  name: "Oort Cloud",
  category: "Region",
  description: "Hypothetical cloud of icy bodies surrounding the Solar System.",
  tags: ["outer solar system"]
},
{
  id: 25,
  name: "Kuiper Belt",
  category: "Region",
  description: "Region beyond Neptune filled with icy bodies.",
  tags: ["dwarf planets"]
},
{
  id: 26,
  name: "Ceres",
  category: "Dwarf Planet",
  description: "The largest object in the asteroid belt between Mars and Jupiter.",
  tags: ["asteroid belt", "dwarf planet"],
  specifications: { radius: "473 km", discoveryYear: 1801 }
},
{
  id: 27,
  name: "Eris",
  category: "Dwarf Planet",
  description: "A distant dwarf planet more massive than Pluto.",
  tags: ["kuiper belt", "trans-neptunian"],
  specifications: { discoveryYear: 2005 }
},
{
  id: 28,
  name: "Makemake",
  category: "Dwarf Planet",
  description: "A dwarf planet located in the Kuiper Belt.",
  tags: ["kuiper belt"],
  specifications: { discoveryYear: 2005 }
},
{
  id: 29,
  name: "Haumea",
  category: "Dwarf Planet",
  description: "An elongated dwarf planet with a rapid rotation.",
  tags: ["rapid rotation"],
  specifications: { discoveryYear: 2004 }
},
{
  id: 30,
  name: "Europa",
  category: "Moon",
  description: "A moon of Jupiter believed to have a subsurface ocean.",
  tags: ["jupiter moon", "subsurface ocean"],
  specifications: { orbitalPeriod: "3.5 days" }
},
{
  id: 31,
  name: "Titan",
  category: "Moon",
  description: "Saturn's largest moon with lakes of liquid methane.",
  tags: ["saturn moon", "methane lakes"],
  specifications: { atmosphere: "Nitrogen-rich" }
},
{
  id: 32,
  name: "Ganymede",
  category: "Moon",
  description: "The largest moon in the Solar System.",
  tags: ["jupiter moon"],
  specifications: { radius: "2634 km" }
},
{
  id: 33,
  name: "Callisto",
  category: "Moon",
  description: "A heavily cratered moon of Jupiter.",
  tags: ["jupiter moon"],
  specifications: { orbitalPeriod: "16.7 days" }
},
{
  id: 34,
  name: "Enceladus",
  category: "Moon",
  description: "A moon of Saturn known for water geysers.",
  tags: ["saturn moon", "water plumes"],
  specifications: { surfaceTemperature: "-201°C" }
},
{
  id: 35,
  name: "Chandra X-ray Observatory",
  category: "Mission",
  description: "NASA space telescope observing X-rays from high-energy regions.",
  tags: ["nasa", "x-ray telescope"],
  specifications: { launchYear: 1999 }
},
{
  id: 36,
  name: "Spitzer Space Telescope",
  category: "Mission",
  description: "Infrared space telescope that operated from 2003 to 2020.",
  tags: ["infrared telescope"],
  specifications: { launchYear: 2003 }
},
{
  id: 37,
  name: "ISS",
  category: "Space Station",
  description: "International Space Station orbiting Earth since 1998.",
  tags: ["low earth orbit", "microgravity research"],
  specifications: { altitude: "408 km" }
},
{
  id: 38,
  name: "Falcon 9",
  category: "Rocket",
  description: "Reusable rocket developed by SpaceX.",
  tags: ["spacex", "reusable"],
  specifications: { firstLaunch: 2010 }
},
{
  id: 39,
  name: "Artemis I",
  category: "Mission",
  description: "Uncrewed test flight around the Moon in 2022.",
  tags: ["nasa", "moon mission"],
  specifications: { year: 2022 }
},
{
  id: 40,
  name: "Mars Curiosity Rover",
  category: "Mission",
  description: "Mars rover exploring Gale Crater since 2012.",
  tags: ["mars rover"],
  specifications: { landingYear: 2012 }
},
{
  id: 41,
  name: "Mars Perseverance Rover",
  category: "Mission",
  description: "Mars rover searching for signs of ancient life.",
  tags: ["mars rover", "sample collection"],
  specifications: { landingYear: 2021 }
},
{
  id: 42,
  name: "New Horizons",
  category: "Mission",
  description: "Spacecraft that performed a flyby of Pluto in 2015.",
  tags: ["pluto mission"],
  specifications: { launchYear: 2006 }
},
{
  id: 43,
  name: "Event Horizon Telescope",
  category: "Observatory",
  description: "Captured first image of a black hole in 2019.",
  tags: ["black hole imaging"],
  specifications: { firstImageYear: 2019 }
},
{
  id: 44,
  name: "Proxima Centauri",
  category: "Star",
  description: "Closest known star to the Sun.",
  tags: ["red dwarf"],
  specifications: { distance: "4.24 light years" }
},
{
  id: 45,
  name: "Alpha Centauri",
  category: "Star System",
  description: "Closest star system to Earth.",
  tags: ["binary system"],
  specifications: { distance: "4.37 light years" }
},
{
  id: 46,
  name: "Vega",
  category: "Star",
  description: "Bright star in the Lyra constellation.",
  tags: ["bright star"],
  specifications: { distance: "25 light years" }
},
{
  id: 47,
  name: "Rigel",
  category: "Star",
  description: "Blue supergiant in the Orion constellation.",
  tags: ["supergiant"],
  specifications: { distance: "860 light years" }
},
{
  id: 48,
  name: "Sombrero Galaxy",
  category: "Galaxy",
  description: "A spiral galaxy with a bright nucleus.",
  tags: ["spiral galaxy"],
  specifications: { distance: "29 million light years" }
},
{
  id: 49,
  name: "Whirlpool Galaxy",
  category: "Galaxy",
  description: "Interacting grand-design spiral galaxy.",
  tags: ["spiral galaxy"],
  specifications: { distance: "23 million light years" }
},
{
  id: 50,
  name: "Large Magellanic Cloud",
  category: "Galaxy",
  description: "Satellite galaxy of the Milky Way.",
  tags: ["dwarf galaxy"],
  specifications: { distance: "163,000 light years" }
},
{
  id: 51,
  name: "Small Magellanic Cloud",
  category: "Galaxy",
  description: "A dwarf galaxy near the Milky Way.",
  tags: ["dwarf galaxy", "satellite galaxy"],
  specifications: { distance: "200,000 light years" }
},
{
  id: 52,
  name: "Messier 87",
  category: "Galaxy",
  description: "Galaxy containing the first black hole ever imaged.",
  tags: ["elliptical galaxy", "supermassive black hole"],
  specifications: { distance: "53 million light years" }
},
{
  id: 53,
  name: "TON 618",
  category: "Black Hole",
  description: "One of the most massive known black holes.",
  tags: ["ultramassive black hole"],
  specifications: { mass: "66 billion solar masses" }
},
{
  id: 54,
  name: "V404 Cygni",
  category: "Black Hole",
  description: "A stellar-mass black hole in the Milky Way.",
  tags: ["x-ray binary"],
  specifications: { distance: "7,800 light years" }
},
{
  id: 55,
  name: "Orion Nebula",
  category: "Nebula",
  description: "A stellar nursery where new stars are forming.",
  tags: ["star formation", "messier 42"],
  specifications: { distance: "1,344 light years" }
},
{
  id: 56,
  name: "Crab Nebula",
  category: "Nebula",
  description: "Supernova remnant observed in 1054 AD.",
  tags: ["supernova remnant"],
  specifications: { distance: "6,500 light years" }
},
{
  id: 57,
  name: "Helix Nebula",
  category: "Nebula",
  description: "A planetary nebula in the constellation Aquarius.",
  tags: ["planetary nebula"],
  specifications: { distance: "650 light years" }
},
{
  id: 58,
  name: "Horsehead Nebula",
  category: "Nebula",
  description: "Dark nebula in the Orion constellation.",
  tags: ["dark nebula"],
  specifications: { distance: "1,500 light years" }
},
{
  id: 59,
  name: "Pillars of Creation",
  category: "Nebula",
  description: "Iconic image of star-forming gas columns in the Eagle Nebula.",
  tags: ["eagle nebula", "star formation"],
  specifications: { discovered: 1995 }
},
{
  id: 60,
  name: "Big Bang",
  category: "Cosmology",
  description: "The leading theory describing the origin of the universe.",
  tags: ["cosmology", "universe origin"],
  specifications: { ageOfUniverse: "13.8 billion years" }
},
{
  id: 61,
  name: "Dark Matter",
  category: "Cosmology",
  description: "Invisible matter that makes up about 27% of the universe.",
  tags: ["invisible mass"],
  specifications: { composition: "Unknown" }
},
{
  id: 62,
  name: "Dark Energy",
  category: "Cosmology",
  description: "Mysterious force accelerating the expansion of the universe.",
  tags: ["universal expansion"],
  specifications: { percentageOfUniverse: "68%" }
},
{
  id: 63,
  name: "Cosmic Microwave Background",
  category: "Cosmology",
  description: "Thermal radiation left over from the Big Bang.",
  tags: ["relic radiation"],
  specifications: { temperature: "2.7 K" }
},
{
  id: 64,
  name: "James Clerk Maxwell Telescope",
  category: "Observatory",
  description: "Submillimeter telescope located in Hawaii.",
  tags: ["radio astronomy"],
  specifications: { location: "Mauna Kea" }
},
{
  id: 65,
  name: "Very Large Telescope",
  category: "Observatory",
  description: "ESO's flagship optical telescope in Chile.",
  tags: ["optical telescope"],
  specifications: { location: "Atacama Desert" }
},
{
  id: 66,
  name: "Arecibo Observatory",
  category: "Observatory",
  description: "Former radio telescope in Puerto Rico (collapsed in 2020).",
  tags: ["radio telescope"],
  specifications: { operational: "1963–2020" }
},
{
  id: 67,
  name: "LIGO",
  category: "Observatory",
  description: "Detected gravitational waves for the first time in 2015.",
  tags: ["gravitational waves"],
  specifications: { firstDetection: 2015 }
},
{
  id: 68,
  name: "Chicxulub Crater",
  category: "Impact Crater",
  description: "Impact crater linked to dinosaur extinction.",
  tags: ["mass extinction"],
  specifications: { age: "66 million years" }
},
{
  id: 69,
  name: "Asteroid Belt",
  category: "Region",
  description: "Region between Mars and Jupiter filled with rocky objects.",
  tags: ["minor planets"],
  specifications: { location: "Between Mars and Jupiter" }
},
{
  id: 70,
  name: "Van Allen Radiation Belts",
  category: "Space Phenomenon",
  description: "Zones of charged particles trapped by Earth's magnetic field.",
  tags: ["radiation"],
  specifications: { discovered: 1958 }
},
{
  id: 71,
  name: "Solar Flare",
  category: "Space Phenomenon",
  description: "Sudden flash of increased brightness on the Sun.",
  tags: ["solar activity"],
  specifications: { duration: "Minutes to hours" }
},
{
  id: 72,
  name: "Aurora Borealis",
  category: "Space Phenomenon",
  description: "Northern lights caused by solar particles interacting with Earth's atmosphere.",
  tags: ["northern lights"],
  specifications: { location: "Polar regions" }
},
{
  id: 73,
  name: "Gamma-Ray Burst",
  category: "Space Phenomenon",
  description: "Extremely energetic explosion observed in distant galaxies.",
  tags: ["high energy"],
  specifications: { duration: "Milliseconds to minutes" }
},
{
  id: 74,
  name: "Supernova",
  category: "Space Phenomenon",
  description: "Explosion marking the death of a massive star.",
  tags: ["stellar explosion"],
  specifications: { brightness: "Outshines galaxies temporarily" }
},
{
  id: 75,
  name: "White Dwarf",
  category: "Stellar Remnant",
  description: "Dense remnant of a low-mass star.",
  tags: ["stellar remnant"],
  specifications: { size: "Earth-sized" }
},
{
  id: 76,
  name: "Neutron Star",
  category: "Stellar Remnant",
  description: "Extremely dense remnant formed after a supernova explosion.",
  tags: ["dense object", "stellar evolution"],
  specifications: { diameter: "20 km", mass: "1.4 solar masses" }
},
{
  id: 77,
  name: "Pulsar",
  category: "Stellar Remnant",
  description: "Rapidly rotating neutron star emitting beams of radiation.",
  tags: ["radio waves", "rotating star"],
  specifications: { rotationSpeed: "Up to 716 rotations per second" }
},
{
  id: 78,
  name: "Magnetar",
  category: "Stellar Remnant",
  description: "A type of neutron star with an extremely strong magnetic field.",
  tags: ["extreme magnetism"],
  specifications: { magneticField: "10^15 gauss" }
},
{
  id: 79,
  name: "Event Horizon",
  category: "Black Hole Feature",
  description: "Boundary around a black hole beyond which nothing can escape.",
  tags: ["point of no return"],
  specifications: { escapeVelocity: "Greater than speed of light" }
},
{
  id: 80,
  name: "Accretion Disk",
  category: "Black Hole Feature",
  description: "Disk of gas and dust spiraling into a black hole.",
  tags: ["x-ray emissions"],
  specifications: { temperature: "Millions of degrees" }
},
{
  id: 81,
  name: "Barnard's Star",
  category: "Star",
  description: "A red dwarf star with one of the highest proper motions observed.",
  tags: ["red dwarf"],
  specifications: { distance: "5.96 light years" }
},
{
  id: 82,
  name: "Polaris",
  category: "Star",
  description: "Also known as the North Star, used for navigation.",
  tags: ["navigation"],
  specifications: { distance: "433 light years" }
},
{
  id: 83,
  name: "Kepler Space Telescope",
  category: "Mission",
  description: "NASA mission that discovered thousands of exoplanets.",
  tags: ["exoplanet hunter"],
  specifications: { launchYear: 2009 }
},
{
  id: 84,
  name: "Gaia Mission",
  category: "Mission",
  description: "ESA mission mapping over a billion stars in the Milky Way.",
  tags: ["star mapping"],
  specifications: { launchYear: 2013 }
},
{
  id: 85,
  name: "Cassini–Huygens",
  category: "Mission",
  description: "Mission that studied Saturn and its moons.",
  tags: ["saturn mission"],
  specifications: { operational: "2004–2017" }
},
{
  id: 86,
  name: "SpaceX Starship",
  category: "Rocket",
  description: "Fully reusable spacecraft designed for deep space travel.",
  tags: ["mars mission"],
  specifications: { firstLaunchTest: 2023 }
},
{
  id: 87,
  name: "Blue Origin New Shepard",
  category: "Rocket",
  description: "Suborbital rocket for space tourism.",
  tags: ["space tourism"],
  specifications: { firstFlight: 2015 }
},
{
  id: 88,
  name: "Solar Wind",
  category: "Space Phenomenon",
  description: "Stream of charged particles emitted by the Sun.",
  tags: ["charged particles"],
  specifications: { speed: "400–800 km/s" }
},
{
  id: 89,
  name: "Exoplanet WASP-12b",
  category: "Exoplanet",
  description: "A hot Jupiter being consumed by its parent star.",
  tags: ["hot jupiter"],
  specifications: { distance: "1,400 light years" }
},
{
  id: 90,
  name: "HD 209458 b",
  category: "Exoplanet",
  description: "First exoplanet observed transiting its star.",
  tags: ["transit method"],
  specifications: { discoveryYear: 1999 }
},
{
  id: 91,
  name: "Red Giant",
  category: "Stellar Evolution",
  description: "Late stage in the life of a medium-sized star.",
  tags: ["stellar aging"],
  specifications: { phaseDuration: "Millions of years" }
},
{
  id: 92,
  name: "Protostar",
  category: "Stellar Evolution",
  description: "Early stage in star formation before nuclear fusion begins.",
  tags: ["star formation"],
  specifications: { temperature: "Below main-sequence levels" }
},
{
  id: 93,
  name: "Main Sequence Star",
  category: "Stellar Evolution",
  description: "Star fusing hydrogen into helium in its core.",
  tags: ["stable fusion"],
  specifications: { lifespan: "Billions of years" }
},
{
  id: 94,
  name: "Galactic Year",
  category: "Cosmology",
  description: "Time taken by the Sun to orbit the Milky Way center.",
  tags: ["milky way orbit"],
  specifications: { duration: "225–250 million years" }
},
{
  id: 95,
  name: "Light Year",
  category: "Astronomy Unit",
  description: "Distance light travels in one year.",
  tags: ["distance measurement"],
  specifications: { value: "9.46 trillion km" }
},
{
  id: 96,
  name: "Astronomical Unit",
  category: "Astronomy Unit",
  description: "Average distance between Earth and the Sun.",
  tags: ["distance measurement"],
  specifications: { value: "149.6 million km" }
},
{
  id: 97,
  name: "Parsec",
  category: "Astronomy Unit",
  description: "Distance at which 1 AU subtends an angle of one arcsecond.",
  tags: ["distance measurement"],
  specifications: { value: "3.26 light years" }
},
{
  id: 98,
  name: "Gravitational Lensing",
  category: "Space Phenomenon",
  description: "Bending of light due to massive objects in space.",
  tags: ["einstein theory"],
  specifications: { predictedBy: "Albert Einstein" }
},
{
  id: 99,
  name: "Hawking Radiation",
  category: "Black Hole Theory",
  description: "Theoretical radiation emitted by black holes.",
  tags: ["quantum mechanics"],
  specifications: { proposedBy: "Stephen Hawking" }
},
{
  id: 100,
  name: "Observable Universe",
  category: "Cosmology",
  description: "The portion of the universe visible from Earth.",
  tags: ["cosmic horizon"],
  specifications: { diameter: "93 billion light years" }
}

];

module.exports = celestialData;