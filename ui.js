class UI {
    constructor(){
        // Instantiate UI Elements
        this.city = document.getElementById('w-location');
        this.description = document.getElementById('w-desc');
        this.humidity = document.getElementById('w-humidity');
        this.temp = document.getElementById('w-temp');
        this.wind = document.getElementById('w-wind');
        this.feelslike = document.getElementById('w-feels-like');

    }

    // UI Methods
    paint(weather){

        this.city.textContent = weather.name ;
        this.description.textContent = weather.weather[0].description ;
        this.humidity.textContent = `Humidity: ${weather.main.humidity} % `;
        this.temp.textContent = `Temperature: ${weather.main.temp_max} \xB0 `;
        this.wind.textContent = `Windspeed: ${weather.wind.speed} m/s `;
        this.feelslike.textContent = `Feels Like: ${weather.wind.speed} \xB0 `;

    }
}
