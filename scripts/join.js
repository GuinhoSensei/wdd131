// join.js
document.getElementById("joinForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const dream = document.getElementById("dream").value;
  
    const message = `Ahoy, ${name}! You've signed up as a ${role}. May your dream of "${dream}" come true on the Grand Line!`;
  
    document.getElementById("result").textContent = message;
  
    // Save to localStorage
    localStorage.setItem("crewApplication", JSON.stringify({ name, role, dream }));
  });
  