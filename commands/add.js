	module.exports = {
	name: 'add',
	description: 'adds a user to the secure line',
	execute(message, args) {
		// grab the "first" mentioned user from the message
	    // this will return a `User` object, just like `message.author`
		var argsAsString = args.join(' ')

	    message.channel.send(`${message.author} added ${argsAsString} to the secure line.`);
    }
};