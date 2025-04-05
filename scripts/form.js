// Product array
const products = [
    { id: "prod001", name: "EcoFan 3000" },
    { id: "prod002", name: "SolarSmart Panel" },
    { id: "prod003", name: "GreenThermo Heater" },
    { id: "prod004", name: "AquaSaver Pump" },
  ];
  
  // Populate select options
  window.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("product");
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      select.appendChild(option);
    });
  
    // Track review count if on review.html
    if (window.location.pathname.includes("review.html")) {
      let count = localStorage.getItem("reviewCount") || 0;
      localStorage.setItem("reviewCount", ++count);
      const counterDisplay = document.createElement("p");
      counterDisplay.textContent = `You have submitted ${count} review(s).`;
      document.body.appendChild(counterDisplay);
    }
  });
  