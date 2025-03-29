// Temple data
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "São Paulo Brazil",
      location: "São Paulo, Brazil",
      dedicated: "1978, November, 2",
      area: 59246,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
    },
    {
      templeName: "Rio de Janeiro Brazil",
      location: "Rio de Janeiro, Brazil",
      dedicated: "2022, May, 8",
      area: 29966,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8167-main.jpg"
    },
    {
      templeName: "Fortaleza Brazil",
      location: "Fortaleza, Brazil",
      dedicated: "2019, June, 2",
      area: 36000,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-5569-main.jpg"
    }
  ];
  
  // Wait for DOM
  document.addEventListener("DOMContentLoaded", function () {
    // Footer setup
    const yearEl = document.getElementById("year");
    const lastModifiedEl = document.getElementById("lastModified");
    const copyrightEl = document.getElementById("copyright");
    const currentYear = new Date().getFullYear();
    const lastModifiedDate = new Date(document.lastModified);
    const name = "Thiago Gomes Gouveia";
    const location = "Richmond, CA";
  
    if (yearEl) yearEl.textContent = currentYear;
    if (lastModifiedEl) lastModifiedEl.textContent = `Last Modified: ${lastModifiedDate.toLocaleString()}`;
    if (copyrightEl) {
      copyrightEl.innerHTML = `&copy; ${currentYear} ${name} | ${location}`;
    }
  
    // Visit tracking
    const visitsDisplay = document.querySelector(".visits");
    let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
    visitsDisplay.textContent = numVisits !== 0 ? numVisits : `This is your first visit. 🥳 Welcome!`;
    numVisits++;
    localStorage.setItem("numVisits-ls", numVisits);
  
    // Menu toggle (mobile)
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    if (menuToggle && navMenu) {
      menuToggle.addEventListener("click", function () {
        const isOpen = navMenu.style.display === "block";
        navMenu.style.display = isOpen ? "none" : "block";
        menuToggle.textContent = isOpen ? "☰" : "✖";
      });
    }
  
    // Initial card display
    renderTempleCards(temples);
  
    // Add filter event listeners
    document.querySelectorAll("#nav-menu button").forEach(button => {
      button.addEventListener("click", (e) => {
        const filter = button.getAttribute("data-filter");
        filterTemples(filter);
        updateActiveNav(button);
      });
    });
  });
  
  // Render cards to the page
  function renderTempleCards(filteredTemples) {
    const gallery = document.querySelector(".temple-gallery");
    gallery.innerHTML = ""; // Clear existing
  
    filteredTemples.forEach(temple => {
      const card = document.createElement("section");
      const name = document.createElement("h3");
      const location = document.createElement("p");
      const dedicated = document.createElement("p");
      const area = document.createElement("p");
      const image = document.createElement("img");
  
      name.textContent = temple.templeName;
      location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
      dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
      area.innerHTML = `<strong>Area:</strong> ${temple.area} sq ft`;
      image.setAttribute("src", temple.imageUrl);
      image.setAttribute("alt", `${temple.templeName} Temple`);
      image.setAttribute("loading", "lazy");
  
      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedicated);
      card.appendChild(area);
      card.appendChild(image);
      gallery.appendChild(card);
    });
  }
  
  // Filter logic
  function filterTemples(criteria) {
    let result;
  
    switch (criteria) {
      case "old":
        result = temples.filter(t => {
          const year = parseInt(t.dedicated.split(",")[0]);
          return year < 1900;
        });
        break;
      case "new":
        result = temples.filter(t => {
          const year = parseInt(t.dedicated.split(",")[0]);
          return year > 2000;
        });
        break;
      case "large":
        result = temples.filter(t => t.area > 90000);
        break;
      case "small":
        result = temples.filter(t => t.area < 10000);
        break;
      case "home":
      default:
        result = temples;
    }
  
    renderTempleCards(result);
  }
  
  // Add "active" class to selected nav button
  function updateActiveNav(activeButton) {
    document.querySelectorAll("#nav-menu button").forEach(btn => {
      btn.classList.remove("active");
    });
    activeButton.classList.add("active");
  }
  