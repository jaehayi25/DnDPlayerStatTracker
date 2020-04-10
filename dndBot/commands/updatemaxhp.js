module.exports = {
	name: 'updatemaxhp',
    aliases: ['umhp', 'um', 'umh'],
	description: 'updates maxhp of player with given name by amount',
    argsName: true,
	async execute(message, commandArgs, Tags) {
		const splitArgs = commandArgs.split(' ');
        const tagName = splitArgs.shift();
        const amt = parseInt(splitArgs[0]);
        //change maxhp based on tagName and amt
        if (isNaN(amt)) {
            return message.channel.send('that doesn\'t seem to be a valid number.');
        }
        const tag = await Tags.findOne({ where: { name: tagName } });
        if (!tag) return message.channel.send(`Could not find tag: ${tagName}`);
        const affectedRows = await Tags.update({ maxhp: tag.get('maxhp')+amt }, { where: { name: tagName } });
        if (affectedRows > 0) {
            if (amt > 0) {
                return message.channel.send(`Player ${tagName}\'s maxhp increased by ${amt}.`);
            }
            if (amt < 0) {
                return message.channel.send(`Player ${tagName}\'s maxhp decreased by ${amt*-1}.`);
            }
            if (amt == 0) {
                return message.channel.send(`nothing happened.`);
            }
        }
        return message.channel.send(`Could not find a player with name ${tagName}.`);
	},
};