const WeatherEmbedType = require('./weatherEmbedType');
const HelpEmbed = require('./helpembed');
const CurrentWeatherEmbed = require('./currentWeatherEmbed');
const SettingsWeatherEmbed = require('./settingsWeatherEmbed');
const InvalidEmbed = require('./InvalidEmbed');

class EmbedWeather {
	static async execute(request,embed){
		switch(request.embedParams.embedType){
			case WeatherEmbedType.Current:
				await CurrentWeatherEmbed.execute(request,embed);
				break;
			case WeatherEmbedType.Help:
				await HelpEmbed.execute(request,embed);
				break;
			case WeatherEmbedType.Settings:
				await SettingsWeatherEmbed.execute(request,embed);
        break;
			case WeatherEmbedType.Invalid:
				await InvalidEmbed.execute(request,embed);
				break;
			default:
				await InvalidEmbed.execute(request,embed);
		}
	}
}

module.exports = EmbedWeather;