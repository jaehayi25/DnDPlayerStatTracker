# Dungeons and Dragons - Health Tracker
A discord bot for DnD that keeps track of player health

Commands:
- !help: shows all the commands. If you specify a command, it gives a description of the command
- !listPlayers: lists all the players
- !addPlayer {name} {description}: creates a player with name, description, hp = 0, and maxhp = 0
- !remove {name}: remove player with given name
- !description {name}: gives description of player with given name
- !updateDescription {name} {description}: updates description of player with given name
- !hp {name}: gives health of player with given name
- !updatehp {name} {amount}: updates health of player with given name by amount 
- !maxhp {name}: gives maxhp of player with given name
- !updatemaxhp {name} {amount}: updates maxhp of player with given name by amount
- !roll {number}: randomly generates a number between 1 and the given number

Other commands:
- !ping: pong. 

The tutorial that I used to learn JavaScript and DiscordBots can be found here:
https://discordjs.guide/#before-you-begin




# Instructions to Run the Bot on Discord

1. Follow the instructions on Installations & Preperations on this site:
   https://discordjs.guide/preparations/

   Skip the section called "Setting up a linter"

2. Download the files and move `dndbot.js`, `config.json`, and the `commands` folder to a separate folder. 

3. Open `config.json` and make sure to replace "your-token-goes-here" with the token of your discord bot (leave quotations around the token). 

4. Go to the console window, navigate to the folder with all the files, and type `node dndbot.js`

5. Go back to your discord server with the bot and try out any command!
