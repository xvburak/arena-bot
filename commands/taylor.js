const fetch = require('node-fetch');


module.exports = {
    name: 'taylor',
    description: "shares random meme",
    async execute(client, message, args){
        
        const { url } = await fetch('https://api.taylor.rest/image').then(response => response.json());
		message.channel.send( url );
    }
}