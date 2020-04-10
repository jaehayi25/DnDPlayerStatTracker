module.exports = {
	name: 'remove',
    aliases: ['rm'],
	description: 'removes player with given name',
    argsName: true,
	async execute(message, commandArgs, Tags) {
		//get tagName to remove tag
        const tagName = commandArgs;
        const rowCount = await Tags.destroy({ where: { name: tagName } });
        if (!rowCount) return message.channel.send('That player did not exist.');

        return message.channel.send(`Player ${tagName} deleted.`);
	},
};