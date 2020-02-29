	module.exports = {
	name: 'disconnect',
	description: 'sends a user disconnected message',
	execute(message, args) {
		// grab the "first" mentioned user from the message
	    // this will return a `User` object, just like `message.author`
		var argsAsString = args.join(' ')

	    message.channel.send(`${message.author} has been disconnected.`);
    }
};