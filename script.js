// Generate a random number between 1 and 10
const randomNum = Math.floor(Math.random() * 45) + 1;

// Set the background image of the body
document.body.style.backgroundImage = `url("assets/wallpaper/${randomNum}.jpeg")`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";

function updateBatteryIcon(batteryLevel) {
  const percentageElement = document.querySelector('.percentage');
  percentageElement.textContent = Math.round(batteryLevel); // Update the percentage text
}

function getBatteryStatus() {
  navigator.getBattery().then(function (battery) {
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


// weather

// Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
const API_KEY = '67aa6ded13d0bfe242e33c585a2247b2';
const CITY = 'Dhaka';
let temp = "";
let condition = "";
let img = "";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`;

// Fetch weather data
fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    // Extract relevant data
    const weather = {
      temp: data.main.temp,
      condition: data.weather[0].main,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      windSpeed: data.wind.speed
    };

    // Log results (or use in your app)
    temp = Math.floor(`${weather.temp}`);
    condition = weather.condition;
    weatherIcon = weather.icon;
    wind = weather.windSpeed;

    w = document.querySelectorAll(".weather-info *");
    w[1].textContent = temp + "°";
    w[2].src = weatherIcon;
    w[3].textContent = condition + " " + wind + "m/s";
  })
  .catch(error => console.error('Error fetching data:', error));


// fullScreen

document.getElementById('fullscreen-button').addEventListener('click', () => {
  const element = document.documentElement; // Targets the entire page
  const button = document.getElementById('fullscreen-button');

  if (!document.fullscreenElement) {
    // Enter fullscreen
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari, Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
      element.msRequestFullscreen();
    }
    button.textContent = 'Close'; // Change button text
  } else {
    // Exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }
    button.textContent = 'Fullscreen'; // Change button text back
  }
});


// Date 
let eDay = document.getElementById('c-day');
let eMon = document.getElementById('c-month');
let eDate = document.getElementById('c-date');

let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let day = dayNames[time.getDay()];
let month = monthNames[time.getMonth()];
let date = time.getDate();

eDay.textContent = day;
eMon.textContent = month;
eDate.textContent = date;

// List of 25 songs (file names)
const songs = Array.from({ length: 25 }, (_, i) => `song${i + 1}.mp3`);

// List of song titles and artists (optional, customize as needed)
const songDetails = [
  { "title": "Utshorgo Tasnif", "artist": "Bangla Song" },
  { "title": "Stereo Hearts", "artist": "Gym Class Heroes ft. Adam Levine" },
  { "title": "Amar Dehokhan", "artist": "Odd Signature" },
  { "title": "Khola Janala", "artist": "Tahsin Ahmed" },
  { "title": "Ami Tomar", "artist": "Song Karone, Okarone STXCT" },
  { "title": "Night Changes", "artist": "One Direction" },
  { "title": "Encore", "artist": "Protoshinni" },
  { "title": "Cold", "artist": "NEFFEX" },
  { "title": "Prostab", "artist": "Odd Signature" },
  { "title": "Kon Hu", "artist": "Unknown Artist" },
  { "title": "Warriyo", "artist": "Mortals" },
  { "title": "Your Eyes", "artist": "Barney Sku" },
  { "title": "Forever Young", "artist": "Alphaville" },
  { "title": "In The End", "artist": "Tommee Profitt, Fleurie, Mellen Gi" },
  { "title": "blue", "artist": "yung kai" },
  { "title": "Iraaday", "artist": "Abdul Hannan, Rovalio" },
  { "title": "in and out", "artist": "Unknown Artist" },
  { "title": "Alone", "artist": "Alan Walker" },
  { "title": "Matushka Ultrafunk", "artist": "Unknown Artist" },
  { "title": "d6f1df04", "artist": "Unknown Artist" },
  { "title": "Round and Round", "artist": "Mingle Game Song" }
]

let currentSongIndex = 0; // Track the current song index
const audioPlayer = document.getElementById("audioPlayer"); // Audio element
const playButton = document.querySelector(".p-p"); // Play/Pause button
const prevButton = document.querySelector(".pre"); // Previous button
const nextButton = document.querySelector(".nex"); // Next button
const titleElement = document.querySelector(".music-title"); // Song title element
const artistElement = document.querySelector(".music-artist"); // Artist name element

// Function to load the current song (without autoplay)
function loadSong(index) {
  const song = songs[index];
  audioPlayer.src = `assets/music/${song}`; // Set the song source

  // Update song title and artist (use custom details if available, else use default)
  if (songDetails[index]) {
    titleElement.textContent = songDetails[index].title;
    artistElement.textContent = songDetails[index].artist;
  } else {
    titleElement.textContent = `Song ${index + 1}`; // Default title
    artistElement.textContent = "Unknown Artist"; // Default artist
  }

  // Set the play button to "play" icon initially
  playButton.src = "assets/ico/Play.svg";
}

// Function to toggle play/pause
function togglePlay() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.src = "assets/ico/Pause.svg"; // Change to pause icon
  } else {
    audioPlayer.pause();
    playButton.src = "assets/ico/Play.svg"; // Change to play icon
  }
}

// Function to play the next song
function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop to the first song after the last
  loadSong(currentSongIndex);
  if (!audioPlayer.paused) {
    audioPlayer.play(); // Continue playing if the audio was playing
  }
}

// Function to play the previous song
function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Loop to the last song before the first
  loadSong(currentSongIndex);
  if (!audioPlayer.paused) {
    audioPlayer.play(); // Continue playing if the audio was playing
  }
}

// Event Listeners
playButton.addEventListener("click", togglePlay);
prevButton.addEventListener("click", prevSong);
nextButton.addEventListener("click", nextSong);

// Load the first song when the page loads (without autoplay)
loadSong(currentSongIndex);