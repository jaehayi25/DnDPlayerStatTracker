module.exports = {
	name: 'maxhp',
    aliases: ['getmaxhp', 'givemaxhp', 'getm', 'mh'],
	description: 'gives maxhp of player with given name',
    argsName: true,
	async execute(message, commandArgs, Tags) {
		const tagName = commandArgs;
        // get maxhp based on tagName
        const tag = await Tags.findOne({ where: { name: tagName } });
        if (tag) {
            return message.channel.send(tag.get('maxhp'));
        }
        return message.channel.send(`Could not find player: ${tagName}`);
	},
};