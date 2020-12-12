const Discord = require("discord.js");
const ms = require("ms");


module.exports = {
    name: "mute",
    category: "info",
    description: "mutes a user for x amt of time",
    run: (client, message, args) => {
  message.delete()

    if(!message.member.hasPermission(['ADMINISTRATOR'])) return;
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if(member.hasPermission(['ADMINISTRATOR']) && !message.member.hasPermission('ADMINISTRATOR')) return;
    message.delete()

        let mutedRole = message.guild.roles.cache.get('585359359178047488');
        let verifiedRole = message.guild.roles.cache.get('611103287910989826');
        if(mutedRole) {
            member.roles.add(mutedRole);
            member.roles.remove(verifiedRole);
            message.channel.send("User was Successfully muted.");
        }
}

}

