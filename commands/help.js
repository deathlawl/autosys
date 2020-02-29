module.exports = {
	name: 'help',
	description: 'Sends a list of valid commands',
	execute(message, args, prefix) {
		
        message.channel.send(`Command Prefix is: //\nAvalible commands are\nhelp: lists all commands\navatar: pulls avatars of tagged users\nkick: kicks users for rp DOES NOT ACCTUALLY KICK\nmute: similar to kick, sends a message claiming to kick, but it's only for rp\nping: pings the bot\nsupport: sends a supportive message`);

    }
};