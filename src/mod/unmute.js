const Discord = require("discord.js");

module.exports = {
    name: "unmute",
    category: "botinfo",
    description: "unmutes a user",
}
run: async (client, message, args) => {

  message.delete()

  
   if(!message.member.hasPermission("MANAGE_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
    }

        if(!message.member.hasPermission(['ADMINISTRATOR'])) return;
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if(member.hasPermission(['ADMINISTRATOR']) && !message.member.hasPermission('ADMINISTRATOR')) return;
  
  


        let mutedRole = message.guild.roles.cache.get('585359359178047488');
        let verifiedRole = message.guild.roles.cache.get('611103287910989826');
        if(mutedRole) {
            member.roles.remove(mutedRole);
            member.roles.add(verifiedRole);
            message.channel.send("User was Successfully Unmuted.");

        }
        }
