module.exports = {
	name: 'updateDescription',
    aliases: ['ud', 'updatedescription'],
	description: 'updates description of player with given name',
    argsName: true,
	async execute(message, commandArgs, Tags) {
		const splitArgs = commandArgs.split(' ');
        const tagName = splitArgs.shift();
        const tagDescription = splitArgs.join(' ');

        // update description based on tagName
        const affectedRows = await Tags.update({ description: tagDescription }, { where: { name: tagName } });
        if (affectedRows > 0) {
            return message.channel.send(`Player ${tagName}\'s description was edited.`);
        }
        return message.channel.send(`Could not find a player with name ${tagName}.`);
	},
};