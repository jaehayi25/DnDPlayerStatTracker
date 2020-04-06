const { prefix } = require('../config.json');
module.exports = {
	name: 'help',
    aliases: ['commands'],
	description: 'shows commands',
	argsName: false,
	execute(message, commandArgs, Tags) {
        const data = [];
        const { commands } = message.client;

        if (!commandArgs.length) {
            data.push('Here\'s a list of all my commands:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);

            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('I\'ve sent you a DM with all my commands!');
                })
                .catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
                });
        }

        const splitArgs = commandArgs.split(' ');
        const tagName = splitArgs.shift();
        
        const command = commands.get(tagName) || commands.find(c => c.aliases && c.aliases.includes(tagName));

        if (!command) {
            return message.reply('that\'s not a valid command!');
        }

        data.push(`**Name:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);

        message.channel.send(data, { split: true });
	},
};