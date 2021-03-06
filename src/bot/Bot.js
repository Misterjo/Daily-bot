const CommandListener = include('commands/CommandListener');
const Connection = include('database/Connection');

/**
 * @description This class 
 * is responsible for the handling of all requests
 * from the users.
 */
class Bot {
    /**
     * @author Misterjo, SaschaAlex
     * @param {Object} parameters
     * @return {Bot} 
     */
    constructor(parameters) {
        this.client = parameters.client
        this.config = parameters.config
        this.connection = new Connection();
        this.listenClient();
    }
    /**
     * @listener
     * @author Misterjo, SaschaAlex 
     */
    listenClient() {
        this.client.once('ready', () => {
            console.log('Ready!');
        });
        //Message listener
        this.client.on('message', message => {
            let [prefix, ...command] = message.content;
            if (prefix == this.config.prefix) {
                new CommandListener(message);
            }
        })
    }
}

module.exports = Bot;