module.exports = {
	name: 'addPlayer',
    aliases: ['add', 'ap', 'addplayer'],
    description: 'Creates a player given name and description',
    argsName: true,
	async execute(message, commandArgs, Tags) {
		const splitArgs = commandArgs.split(' ');
		const tagName = splitArgs.shift();
		const tagDescription = splitArgs.join(' ');
        try {
            const tag = await Tags.create({
                name: tagName,
                description: tagDescription,
                username: message.author.username,
            });
            return message.channel.send(`Player ${tag.name} added.`);
        }
        catch (e) {
            if (e.name === 'SequelizeUniqueConstraintError') {
                return message.channel.send('That player already exists.');
            }
            return message.channel.send('Something went wrong with adding a tag.');
        }
	},
};