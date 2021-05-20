const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.login('TOKEN');










// // finds commands in folder /commands; better to store commands in single files and acces them like this
// const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
// for(const file of commandFiles){
//     const command = require(`./commands/${file}`);

//     client.commands.set(command.name, command);
// }


// client.once('ready', () => {
//     console.log('A2D is online!');
// });


// client.on('message', message => {
//     // check if user messsage starts with prefix  OR bot is author of the message
//     if(!message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();

//     if(command === 'ping'){
//         client.commands.get('ping').execute(message, args);
//     } else if(command === 'arena') {
//         client.commands.get('ping').execute(message, args);

//     }
// });



