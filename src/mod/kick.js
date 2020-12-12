const Discord = require("discord.js");

module.exports = {
    name: "kick",
    category: "info",
    description: "kicks the user from the guild",
    run: (client, message, args) => {

      message.delete()
      
   if(!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
    }

            const user1 = message.mentions.users.first();

            if (user1) {
                const member = message.guild.member(user1);

                if (member) {
                    member.kick().then(() => {
                      const Embed = new Discord.MessageEmbed()
                          .setColor(0x5126c7)
                          .setDescription(`Successfully kicked ${user1}`);
                          message.channel.send(Embed);
                    }).catch(err => {
                      const Embed1 = new Discord.MessageEmbed()
                          .setColor(0x5126c7)
                          .setDescription(`I was unable to kick the member`);
                          message.channel.send(Embed1);
                        console.log(err);
                    });
                } else {
                    message.reply("That user is not in this server")
                }
            } else {
                message.reply('Please specify a user');

            }
    }
}
