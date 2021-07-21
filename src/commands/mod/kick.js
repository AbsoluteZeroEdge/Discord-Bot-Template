module.exports = {
	name: 'avatar',
	aliases: ['icon', 'pfp'],
	execute(message, args) {
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to kick them!');
        }

        // Grab the "first" mentioned user from the message
		// This will return a `User` object, just like `message.author`
		const taggedUser = message.mentions.members.first();

        try {
            taggedUser.kick().then(async () => {
                message.channel.send(`kicked ${taggedUser}!`)
            })
        }
        catch (error) {
            return message.reply(`I can't kick ${taggedUser}!\n`, error)
        }
    }
}