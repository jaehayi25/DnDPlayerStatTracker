module.exports = {
	name: 'hp',
    aliases: ['gethp', 'givehp', 'geth'],
	description: 'gives health of player with given name',
    argsName: true,
	async execute(message, commandArgs, Tags) {
		const tagName = commandArgs;
        // get hp based on tagName
        const tag = await Tags.findOne({ where: { name: tagName } });
        if (tag) {
            return message.channel.send(tag.get('health_point'));
        }
        return message.channel.send(`Could not find player: ${tagName}`);
	},
};