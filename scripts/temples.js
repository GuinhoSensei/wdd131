document.addEventListener('DOMContentLoaded', function() {
    // First paragraph
    var footerCopyright = document.getElementById('copyright');
    var currentYear = new Date().getFullYear();
    var name = 'Thiago Gomes Gouveia';
    var location  = 'Richmond, CA';

    footerCopyright.innerHTML = '&copy; ' + currentYear + ' ' + name + ' | ' + location;

    // Second paragraph
    var lastModified = document.getElementById('lastModified');
    var lastModifiedDate = new Date(document.lastModified);
    lastModified.innerHTML = 'Last Modified: ' + lastModifiedDate.toLocaleString();
  });


const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function () {
        const isOpen = navMenu.style.display === "block";
        navMenu.style.display = isOpen ? "none" : "block";
        menuToggle.textContent = isOpen ? "☰" : "✖";
    });

    // Set footer copyright year and last modified date
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});

