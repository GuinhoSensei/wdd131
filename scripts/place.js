document.addEventListener("DOMContentLoaded", () => {
    // Static data
    const data = {
        Area: "1,521 sq km",
        Population: "12,330,000",
        Country: "Brazil",
        Languages: "Portuguese",
        Currency: "Brazilian Real",
        "Time Zone": "UTC-3",
        "Calling Code": "+55",
        "Internet TLD": ".br"
    };
  
    const dataList = document.getElementById("data-list");
    Object.entries(data).forEach(([key, value]) => {
      const li = document.createElement("li");
      li.textContent = `${key}: ${value}`;
      dataList.appendChild(li);
    });
  
    // Weather data from OpenWeatherMap API
    const apiKey = "deec6a3c399e4cb60e5ccaf8aa746390"; // Replace with your actual OpenWeatherMap API key
    const city = "Sao Paulo";
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    fetch(weatherUrl)
      .then(response => response.json())
      .then(data => {
        const weather = {
          Temperature: `${data.main.temp} °C`,
          Conditions: data.weather[0].description,
          Wind: `${data.wind.speed} km/h`,
          "Wind Chill": `${data.main.feels_like} °C`
        };
  
        const weatherList = document.getElementById("weather-list");
        Object.entries(weather).forEach(([key, value]) => {
          const li = document.createElement("li");
          li.textContent = `${key}: ${value}`;
          weatherList.appendChild(li);
        });
      })
      .catch(err => console.error("Weather fetch error:", err));
  
      const modifiedElement = document.getElementById("last-modified");
      const now = new Date();
      const formatted = now.toLocaleDateString("en-GB") + " " + now.toLocaleTimeString("en-GB");
      modifiedElement.textContent = formatted;
  
  
    });
  