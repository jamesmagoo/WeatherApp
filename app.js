// Initialise UI Object
const ui = new UI();

// Initialise Storage
const storage = new Storage();

// Load Storage to pass into Weather Object
const weatherLocation = storage.getLocationData();

console.log(weatherLocation);

// Initialise Weather API Object
const weather = new Weather(weatherLocation.city);

// Change Location Event
// Add Event Listener to Modal Button
  document.getElementById('w-changeBtn').addEventListener('click', () => {
    
    const city = document.getElementById('w-city').value ;
    weather.changeLocation(city);

    // Set location in local storage
    storage.setLocationData(city);
    // Get and display revised location weather
    getWeather();
    // Close Modal
    $('#locModal').modal('hide');
    // Clear field
    document.getElementById('w-city').value = '';
})


// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(error => console.log('Error'))
}

