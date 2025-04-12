// crew.js - Local JSON data for Straw Hat crew with wanted posters

const crew = [
  {
    name: "Monkey D. Luffy",
    bounty: "3,000,000,000 Berries",
    role: "Captain",
    affiliation: "Straw Hat Pirates",
    poster: "images/luffy_wanted.webp"
  },
  {
    name: "Roronoa Zoro",
    bounty: "1,111,000,000 Berries",
    role: "Swordsman",
    affiliation: "Straw Hat Pirates",
    poster: "images/zoro_wanted.webp"
  },
  {
    name: "Nami",
    bounty: "366,000,000 Berries",
    role: "Navigator",
    affiliation: "Straw Hat Pirates",
    poster: "images/nami_wanted.webp"
  },
  {
    name: "Usopp",
    bounty: "500,000,000 Berries",
    role: "Sniper",
    affiliation: "Straw Hat Pirates",
    poster: "images/usopp_wanted.webp"
  },
  {
    name: "Sanji",
    bounty: "1,032,000,000 Berries",
    role: "Cook",
    affiliation: "Straw Hat Pirates",
    poster: "images/sanji_wanted.webp"
  },
  {
    name: "Tony Tony Chopper",
    bounty: "1,000 Berries",
    role: "Doctor",
    affiliation: "Straw Hat Pirates",
    poster: "images/chopper_wanted.webp"
  },
  {
    name: "Nico Robin",
    bounty: "930,000,000 Berries",
    role: "Archaeologist",
    affiliation: "Straw Hat Pirates",
    poster: "images/robin_wanted.webp"
  },
  {
    name: "Franky",
    bounty: "394,000,000 Berries",
    role: "Shipwright",
    affiliation: "Straw Hat Pirates",
    poster: "images/franky_wanted.webp"
  },
  {
    name: "Brook",
    bounty: "383,000,000 Berries",
    role: "Musician",
    affiliation: "Straw Hat Pirates",
    poster: "images/brook_wanted.webp"
  },
  {
    name: "Jinbe",
    bounty: "1,100,000,000 Berries",
    role: "Helmsman",
    affiliation: "Straw Hat Pirates",
    poster: "images/jinbe_wanted.webp"
  }
];

const container = document.getElementById("crew-container");

crew.forEach(member => {
  const card = document.createElement("div");
  card.classList.add("crew-card");
  card.innerHTML = `
    <img src="${member.poster}" alt="${member.name} Wanted Poster" class="wanted-poster" loading="lazy">
    <h3>${member.name}</h3>
    <p><strong>Bounty:</strong> ${member.bounty}</p>
    <p><strong>Role:</strong> ${member.role}</p>
    <p><strong>Affiliation:</strong> ${member.affiliation}</p>
  `;
  container.appendChild(card);
});
