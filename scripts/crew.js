// crew.js
const crew = [
    {
      name: "Monkey D. Luffy",
      role: "Captain",
      power: "Gomu Gomu no Mi (Rubber Powers)",
      quote: "I'm gonna be King of the Pirates!"
    },
    {
      name: "Roronoa Zoro",
      role: "Swordsman",
      power: "Three Sword Style",
      quote: "Nothing happened."
    },
    {
      name: "Nami",
      role: "Navigator",
      power: "Clima-Tact",
      quote: "I'm a navigator, not a fighter!"
    }
  ];
  
  const container = document.getElementById("crew-container");
  
  crew.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("crew-card");
    card.innerHTML = `
      <h3>${member.name}</h3>
      <p><strong>Role:</strong> ${member.role}</p>
      <p><strong>Power:</strong> ${member.power}</p>
      <blockquote>"${member.quote}"</blockquote>
    `;
    container.appendChild(card);
  });
  