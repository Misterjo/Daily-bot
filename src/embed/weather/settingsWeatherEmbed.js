const {weather} = include('localization/index');
const unitSet = require('./unitSet');
const createField = require('../createField');
//const database = include('TODO');

class SettingsWeatherEmbed {
	static async execute(request, embed) {
        switch(request.user.lang){
			case "en":
        this.trad_file = weather.en.SettingsWeatherCommand;
				break;
			case "fr":
        this.trad_file = weather.fr.SettingsWeatherCommand;
				break;
			default:
				this.trad_file = weather.en.SettingsWeatherCommand;
		}

        let textToAdd;

        switch (request.settingType){
          case "unit":
            textToAdd = request.user.weather.unit;
            break;
          case "loc":
            textToAdd = request.user.weather.loc;
            break;
          case "lang":
            textToAdd = request.user.lang;
            break;
        }
        textToAdd+=' => '+request.command.head+' '+request.command.rest.join(' ');

        embed.setColor('#0099ff')
        .setTitle(this.trad_file.Title)
        .setDescription(this.trad_file.Description)
        .addFields(createField(request.settingType.toUpperCase() , (
          textToAdd))
        );
    }
}
module.exports = SettingsWeatherEmbed;