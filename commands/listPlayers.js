module.exports = {
	name: 'listPlayers',
    aliases: ['list', 'lp', 'players', 'listplayers'],
	description: 'lists all the players in database',
	argsName: false,
	async execute(message, commandArgs, Tags) {
		const tagList = await Tags.findAll({ attributes: ['name'] });
        const tagString = tagList.map(t => t.name).join(', ') || 'No players set.';
        return message.channel.send(`List of players: ${tagString}`);
	},
};