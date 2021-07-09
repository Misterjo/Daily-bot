const {Weather} = require("../../weather/weather");

class Current {

    static execute(message) {
        
        let weather = new Weather(message);
        let data = weather.fetchWeatherApi("weather")
            .then((body) => {
           message.channel.send(weather.embededCurrent(body));
        });
    }

}
module.exports = {
    Current: Current
};