	module.exports = {
	name: 'connect',
	description: 'sends a user connected message',
	execute(message, args) {
		// grab the "first" mentioned user from the message
	    // this will return a `User` object, just like `message.author`
		var argsAsString = args.join(' ')

	    message.channel.send(`${message.author} has connected.`);
    }
};