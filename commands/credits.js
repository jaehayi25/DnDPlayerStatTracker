module.exports = {
    name: 'credits',
    aliases: ['author', 'c', 'programmer'],
	description: 'made in COVID-19',
	argsName: false,
	execute(message, commandArgs, Tags) {
		message.channel.send('Made by Jaeha Yi - April 6, 2020. \nUpon request of Gavin Patino.');
	},
};