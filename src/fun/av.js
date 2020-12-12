const Discord = require("discord.js");


module.exports = {
    name: "av",
    category: "info",
    description: "sends an embed with the author's pfp",
    run: (client, message, args) => {
      message.delete()
      
        let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });
    if (message.mentions.users.size > 0) {
      const embed = new Discord.MessageEmbed()
        .setColor(0xFFB6C1)
        .setTitle(`Avatar for ${message.mentions.users.first().username}:`)
        .setImage(`${avatar}`);
        message.channel.send({embed});
    } else {
      const embed = new Discord.MessageEmbed()
      .setColor(0xFFB6C1)
      .setTitle(`Avatar for ${message.author.username}:`)
      .setImage(`${avatar + "?size=2048"}`);
      message.channel.send({embed});
    }

    }
};