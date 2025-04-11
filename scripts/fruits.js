// fruits.js
const fruits = [
    {
      name: "Gomu Gomu no Mi",
      type: "Paramecia",
      ability: "Turns user's body into rubber"
    },
    {
      name: "Mera Mera no Mi",
      type: "Logia",
      ability: "Grants control over fire"
    },
    {
      name: "Hito Hito no Mi",
      type: "Zoan",
      ability: "Allows human transformation"
    }
  ];
  
  const fruitList = document.getElementById("fruit-list");
  
  fruits.forEach(fruit => {
    const fruitCard = document.createElement("div");
    fruitCard.classList.add("fruit-card");
    fruitCard.innerHTML = `
      <h3>${fruit.name}</h3>
      <p><strong>Type:</strong> ${fruit.type}</p>
      <p>${fruit.ability}</p>
    `;
    fruitList.appendChild(fruitCard);
  });
  