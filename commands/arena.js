const Arena = require("are.na");
const querystring = require('querystring');

module.exports = {
	name: 'arena',
	description: "get arena channel",
	async execute(client, message, args, Discord) {


		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}
		
		// message.channel.send(`Arguments: ${args}`);

		const arena = new Arena();


		arena.block(`${args}`).get()
			.then(block => {
				// message.channel.send(block.content);
				if (block.class === 'Image') {
					const arenaEmbed = new Discord.MessageEmbed()
						.setColor('#EBF857')
						.setAuthor(`${block.user.username}`)
						.setDescription(`${block.user.description}`)
						.setImage(`${block.image.display.url}`)
						.setURL(`https://www.are.na/block/${block.id}`)
						
					message.channel.send(arenaEmbed);
				} else {
					const arenaEmbed = new Discord.MessageEmbed()
						.setColor('#EBF857')
						.setAuthor(`${block.user.username}`)
						.setURL(`https://www.are.na/block/${block.id}`)
						.addFields({
							name: `${block.title}`,
							value: `${block.content}`
						}, )
					message.channel.send(arenaEmbed);
				}
			})
			.catch(console.error);


		// arena
		// 	.channel("arena-influences")
		// 	.get()
		// 	.then(chan => {
		// 		chan.contents.map(item => {
		// 			console.log(item);
		// 			//message.channel.send(item);
		// 		});
		// 	})
		// 	.catch(err => console.log(err));





	}
}


//message.channel.send(item);