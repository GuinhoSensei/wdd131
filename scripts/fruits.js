const fruits = [
  {
    name: "Gomu Gomu no Mi",
    type: "Paramecia",
    description: "Grants the user's body rubber-like properties.",
    image: "https://static.wikia.nocookie.net/onepiece/images/b/bd/Gomu_Gomu_no_Mi_Infobox.png"
  },
  {
    name: "Mera Mera no Mi",
    type: "Logia",
    description: "Grants control and transformation into fire.",
    image: "https://static.wikia.nocookie.net/onepiece/images/3/3d/Mera_Mera_no_Mi_Infobox.png"
  },
  {
    name: "Hito Hito no Mi",
    type: "Zoan",
    description: "Grants the ability to transform into a human.",
    image: "https://static.wikia.nocookie.net/onepiece/images/f/fb/Hito_Hito_no_Mi_Infobox.png"
  },
  {
    name: "Bara Bara no Mi",
    type: "Paramecia",
    description: "Allows the user to split their body into pieces and control them.",
    image: "https://static.wikia.nocookie.net/onepiece/images/d/de/Bara_Bara_no_Mi_Infobox.png"
  },
  {
    name: "Suna Suna no Mi",
    type: "Logia",
    description: "Allows the user to control, create, and transform into sand.",
    image: "https://static.wikia.nocookie.net/onepiece/images/4/48/Suna_Suna_no_Mi_Infobox.png"
  },
  {
    name: "Yami Yami no Mi",
    type: "Logia",
    description: "Grants control over darkness and the ability to nullify other Devil Fruit powers.",
    image: "https://static.wikia.nocookie.net/onepiece/images/4/4f/Yami_Yami_no_Mi_Infobox.png"
  },
  {
    name: "Gura Gura no Mi",
    type: "Paramecia",
    description: "Grants the ability to create powerful shockwaves, akin to earthquakes.",
    image: "https://static.wikia.nocookie.net/onepiece/images/2/2f/Gura_Gura_no_Mi_Infobox.png"
  },
  {
    name: "Tori Tori no Mi, Model: Falcon",
    type: "Zoan",
    description: "Allows the user to transform into a falcon.",
    image: "https://static.wikia.nocookie.net/onepiece/images/b/be/Tori_Tori_no_Mi_Model_Falcon_Infobox.png"
  },
  {
    name: "Ushi Ushi no Mi, Model: Bison",
    type: "Zoan",
    description: "Allows the user to transform into a bison or a bison-human hybrid.",
    image: "https://static.wikia.nocookie.net/onepiece/images/2/26/Ushi_Ushi_no_Mi_Model_Bison_Infobox.png"
  },
  {
    name: "Ope Ope no Mi",
    type: "Paramecia",
    description: "Allows the user to create a spherical operating room to manipulate objects and people within.",
    image: "https://static.wikia.nocookie.net/onepiece/images/1/14/Ope_Ope_no_Mi_Infobox.png"
  }
];

const fruitList = document.getElementById("fruit-list");

fruits.forEach(fruit => {
  const fruitCard = document.createElement("div");
  fruitCard.classList.add("fruit-card");
  fruitCard.innerHTML = `
  <img src="${fruit.image}" alt="${fruit.name}" class="fruit-image" loading="lazy">
  <h3>${fruit.name}</h3>
  <p><strong>Type:</strong> ${fruit.type}</p>
  <p>${fruit.description}</p>
`;

  fruitList.appendChild(fruitCard);
});