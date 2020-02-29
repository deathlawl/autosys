	module.exports = {
	name: 'disconnect',
	description: 'sends a user disconnected message',
	execute(message, args) {
	    // this will convert the args array into a string with spaces between arguments
		var argsAsString = args.join(' ')

	    message.channel.send(`${message.author} has been disconnected.`);
    }
};