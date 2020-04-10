module.exports = {
	name: 'ping',
	description: 'Ping!',
	argsName: false,
	execute(message, commandArgs, Tags) {
		message.channel.send('Pong.');
	},
};