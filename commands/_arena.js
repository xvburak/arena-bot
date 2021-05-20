const Arena = require("are.na");


module.exports = {
	name: 'arena',
	description: "get arena channel",
	async execute(client, message, args, Discord) {


		const arena = new Arena();
		arena.block(5502854).get()
			.then(block => {
				// message.channel.send(block.content);
				if (block.class === 'Image') {
					const arenaEmbed = new Discord.MessageEmbed()
						.setColor('#EBF857')
						.setAuthor(`${block.user.username}`)
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