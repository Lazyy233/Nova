module.exports = {
    name: "setbotnick", 
    run: (client, message, args) => {

      message.delete()
      
   if(!message.member.hasPermission("MANAGE_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
    }
        var nickname = message.content.split (" ").slice (1).join (" ");
        message.guild.members.get(client.user.id).setNickname(nickname)
    }
}