module.exports = {
	name: 'support',
	description: 'sends a supportive message',
	execute(message, args) {
        
        let support = ['It always seems impossible until it’s done.', 'Be that person who decided to go for it.', " No one is you and that is your super power.", "Give yourself some credit for all you’ve done so far.",
    'Stop doubting yourself. Work hard and it will happen.', 'If you stumble, make it part of the dance.', 'You are so brave for even trying.', 'The only time you run out of chances is when you stop taking them.',
    'Wake up anticipating something great is going to happen today!', 'Don’t worry, we just need to take things one step at a time','If porkchops were perfect, we would’t have hotdogs'];

        var item = support[Math.floor(Math.random() * support.length)];

        message.channel.send(`${item}`);
	    
        
    }
};