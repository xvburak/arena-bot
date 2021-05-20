module.exports = {
    name: 'ping',
    description: "this is a ping comment!",
    execute(client, message, args){
        message.channel.send('pong!');
    }
}