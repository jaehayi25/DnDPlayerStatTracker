const fs = require('fs');
const Discord = require('discord.js');
const Sequelize = require('sequelize');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

//alpha
const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});

//beta
const Tags = sequelize.define('tags', {
	name: {
		type: Sequelize.STRING,
		unique: true,
	},
	description: Sequelize.TEXT,
	username: Sequelize.STRING,
	health_point: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
		allowNull: false,
    },
    maxhp: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
		allowNull: false,
	},
});


client.once('ready', () => {
    Tags.sync();
	console.log('Ready!');
});


client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const input = message.content.slice(prefix.length).split(' ');
    const commandName = input.shift();
    const commandArgs = input.join(' ');

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

    if (command.argsName && !commandArgs.length) {
        return message.channel.send(`You didn't provide any name, ${message.author}!`);
    }

    try {
        command.execute(message, commandArgs, Tags);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

client.login(token);