module.exports = {
    name: 'clear',
    description: "Clear messages!",
    async execute(client, message, args){
        if(!args[0]) return message.reply("please eneter the amount of messages taht you want to clear!");
        if(isNaN(args[0])) return message.reply("please enter a real number!");

        if(args[0] > 100) return message.reply("you can’t delete more than 100 messages!");
        if(args[0] < 1) return message.reply("you must delete at leas one message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}