module.exports = {
	name: 'help',
	description: 'Sends a list of valid commands',
	execute(message, args, prefix) {
		
        message.channel.send(`Command Prefix is: //\nAvalible commands:\nHelp: Lists all commands.\nPing: Pings the bot.\nAvatar: Pulls the avatars of tagged users.\nkick: Kicks a user for RP purposes. DOES NOT ACTUALLY KICK. \nMute: Mutes a user for RP purposes. DOES NOT ACTUALLY MUTE. \nSupport: Sends a supportive message for all your support needs. \nConnect: Sends a user connected message. \nDisconnect: Sends a user disconnected message. \nAdd: Adds a user to the secure line IRP. \nRemove: Removes a user from the secure line IRP.`);

    }
};
