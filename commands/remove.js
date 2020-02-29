	module.exports = {
		name: 'remove',
		description: 'removes a user from the secure line',
		execute(message, args) {
			// grab the "first" mentioned user from the message
	   		// this will return a `User` object, just like `message.author`
			var argsAsString = args.join(' ')

	    message.channel.send(`${message.author} removed ${argsAsString} from the secure line.`);
    }
};