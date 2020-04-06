module.exports = {
	name: 'description',
    aliases: ['desc', 'd'],
	description: 'gives description of player with given name',
    argsName: true,
	async execute(message, commandArgs, Tags) {
		const tagName = commandArgs;
        // get description based on tagName
        const tag = await Tags.findOne({ where: { name: tagName } });
        if (tag) {
            if (tag.get('description') === '') {
                return message.channel.send('no description');
            }
            return message.channel.send(tag.get('description'));
        }
        return message.channel.send(`Could not find player: ${tagName}`);
	},
};