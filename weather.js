class Weather {
    constructor(city){
        this.apiKey = '5fae8ddc0782735f12b0a6f4ce92e807';
        this.city = city ;
    }

    // Methods to interact with OpenWeather API
    // Get Weather 
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`) ;
        const responseData = await response.json() ;
        console.log(responseData.main.humidity);
        return responseData  ;
    }

    // Change Weather Location

    changeLocation(city){
        this.city = city;
    }
}