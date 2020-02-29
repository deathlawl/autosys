	module.exports = {
	name: 'connect',
	description: 'sends a user connected message',
	execute(message, args) {

	    // this will convert the args array into the srting with spaces between arguments
		var argsAsString = args.join(' ')

	    message.channel.send(`${argsAsString} has connected.`);
    }
};