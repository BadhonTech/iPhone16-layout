// Generate a random number between 1 and 10
const randomNum = Math.floor(Math.random() * 45) + 1;

// Set the background image of the body
document.body.style.backgroundImage = `url("assets/wallpaper/${randomNum}.jpeg")`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";

function updateBatteryIcon(batteryLevel) {
  const percentageElement = document.querySelector('.percentage');
  percentageElement.textContent = Math.round(batteryLevel) ; // Update the percentage text
}

function getBatteryStatus() {
  navigator.getBattery().then(function(battery) {
    const batteryLevel = battery.level * 100; // Get battery percentage (0-1 scale and convert to percentage)
    
    // Update the battery percentage text
    updateBatteryIcon(batteryLevel);
  });
}

// Call the function to get the battery status when the page loads
getBatteryStatus();

// Optionally, you can update the battery level periodically
setInterval(getBatteryStatus, 60000); // Update every minute

time = new Date();
let hour = time.getHours();
let minute = time.getMinutes();
let second = time.getSeconds();

function updateTime() {
  hour = (hour % 12) || 12; // Convert to 12-hour format
  minute = String(minute).padStart(2, '0'); // Add leading zero if minute is less than 10
  second = String(second).padStart(2, '0'); // Add leading zero if second is less than 10

  const clockElement = document.querySelector('.clock');
  clockElement.textContent = `${hour}:${minute}`; // Update the clock text
}

updateTime(); // Update the time when the page loads
setInterval(updateTime, 1000); // Update every second