module.exports = {
	name: 'roll',
    aliases: ['roll', 'r', 'rolld', 'rd'],
	description: 'outputs a random number from 1 to any number n',
	argsName: false,
	execute(message, commandArgs, Tags) {
        const splitArgs = commandArgs.split(' ');
        const high = parseInt(splitArgs.shift());
        const num = Math.floor(Math.random()*high)+1;
		message.channel.send(`${num}`);
	},
};