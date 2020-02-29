module.exports = {
	name: 'send',
	description: 'generates coordinates if they do not already exist, and saves them',
	execute(message, args) {
       
        //gets the data from the coordinate file
     const {coordinate, location, timeline} = require('./coordinates.json');
     //ensures there is an argument to work with
     if (!args.length) {
        return message.channel.send(`You need to provide a location ${message.author}!`);
    } else if (args[0] = location[0] ) {
        for (i=0; i > location.length; i++) {
            return message.channel.send(`I am reading ${i} entries`);
        }
    }
    }
};