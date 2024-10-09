
const copyrightYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");


const today = new Date();
copyrightYear.textContent = today.getFullYear(); 


lastModified.textContent = "Last Modified: " + document.lastModified; 

const temperature = 5; // Static temperature in °C
const windSpeed = 10; // Static wind speed in km/h

const windChillElement = document.querySelector(".weather-data:nth-of-type(4)"); // Assuming Wind Chill is the fourth item

// Function to calculate wind chill
function calculateWindChill(temp, speed) {
    return Math.round(13.12 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16)));
}

// Check conditions for wind chill calculation
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = "Wind Chill: " + windChill + " °C";
} else {
    windChillElement.textContent = "Wind Chill: N/A";
}
