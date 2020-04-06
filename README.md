# DnD_health_tracker
A discord bot for dnd that keeps track of player health! 

Functionality:
- !addPlayer {name} {description}: creates a player with name, description, hp = 0, and maxhp = 0
- !remove {name}: remove player with given name
- !description {name}: gives description of player with given name
- !updateDescription {name} {description}: updates description of player with given name
- !hp {name}: gives health of player with given name
- !updatehp {name} {amount}: updates health of player with given name by amount 
- !maxhp {name}: gives maxhp of player with given name
- !updatemaxhp {name} {amount}: updates maxhp of player with given name by amount

Other useful functions:
- !ping: pong. 
- !server: gives server name and total members
- !user-info: gives username and id for the author of command
- !args-info {command} {arguments}: gives command and arguments after the command

The tutorial that I used to learn JavaScript and DiscordBots can be found here:
https://discordjs.guide/#before-you-begin
