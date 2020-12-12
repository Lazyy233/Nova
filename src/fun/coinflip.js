const Discord = require("discord.js");



module.exports = {
    name: "coinflip",
    category: "info",
    description: "flips a coin",
    run: async (client, message, args) => {
      message.delete()
      
        let random = (Math.floor(Math.random() * Math.floor(2)));

        if(random === 0) {
          const embed = new Discord.MessageEmbed()
          .setColor(0x5126c7)
          .setDescription("Heads")
          .setTimestamp()
          message.channel.send(embed);
        }
        else {
          const embed1 = new Discord.MessageEmbed()
          .setColor(0x5126c7)
          .setDescription("Tails")
          .setTimestamp()
          message.channel.send(embed1);
        }
    },
};