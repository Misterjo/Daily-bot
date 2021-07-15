const WeatherEmbedType = require('./weatherEmbedType');
const HelpEmbed = require('./helpembed');
const CurrentWeatherEmbed = require('./currentWeatherEmbed');

class EmbedWeather {
	static async execute(request,embed){
		switch(request.embedParams.embedType){
			case WeatherEmbedType.Current:
				await CurrentWeatherEmbed.execute(request,embed);
				break;
			case WeatherEmbedType.Help:
				await HelpEmbed.execute(request,embed);
				break;
			default:
				HelpEmbed.execute(request,embed);
		}

	}
}

module.exports = EmbedWeather;