module.exports = {
	name: 'mute',
	description: 'mutes a user, but not really, only in rp',
	execute(message, args) {
		// grab the "first" mentioned user from the message
	    // this will return a `User` object, just like `message.author`
		var argsAsString = args.join(' ')

	    message.channel.send(`${argsAsString} has been muted`);
    }
};