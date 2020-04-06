module.exports = {
	name: 'updatehp',
    aliases: ['uh', 'updhp'],
	description: 'updates health of player with given name by amount',
    argsName: true,
	async execute(message, commandArgs, Tags) {
		const splitArgs = commandArgs.split(' ');
        const tagName = splitArgs.shift();
        const amt = parseInt(splitArgs[0]);
        //change hp based on tagName and amt
        if (isNaN(amt)) {
            return message.channel.send('that doesn\'t seem to be a valid number.');
        }
        const tag = await Tags.findOne({ where: { name: tagName } });
        if (!tag) return message.channel.send(`Could not find tag: ${tagName}`);
        const affectedRows = await Tags.update({ health_point: Math.min(tag.get('health_point')+amt, tag.get('maxhp') )}, { where: { name: tagName } });
        if (affectedRows > 0) {
            if (amt > 0) {
                if (tag.get('maxhp') < tag.get('health_point')+amt) {
                    return message.channel.send(`Player ${tagName} was restored to maxhp, which is ${tag.get('maxhp')}.`)
                }
                return message.channel.send(`Player ${tagName} healed for ${amt}.`);
            }
            if (amt < 0) {
                if (tag.get('health_point')+amt <= 0) {
                    return message.channel.send(`Player ${tagName} died.`);
                }
                return message.channel.send(`Player ${tagName} damaged for ${amt*-1}.`);
            }
            if (amt == 0) {
                return message.channel.send(`nothing happened.`);
            }
        }
        return message.channel.send(`Could not find a player with name ${tagName}.`);
	},
};