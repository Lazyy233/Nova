const Discord = require("discord.js");

const helplist = "`.helplist`"

module.exports = {
    name: "help",
    run: (client, message) => {

      message.delete()

        const embed0 = new Discord.MessageEmbed()
            .setTitle("Prefix: `*`")
            .setAuthor(`Star's Help Command`)
            .setColor(0x5126c7)
            .setFooter("Made by Lazyy")
            .addField("**Information Commands**", "ℹ️", false)
            .addField("**Fun Commands**", "🎉", false)
            .addField("**Moderation Commands**", "📈", false)
            .addField("**NSFW Commands**", "🔞", false)
            .addField("**Owner Commands**", "🚀", false)
        
        message.channel.send(embed0).then(m => {
            m.react("ℹ️")
            m.react("🎉")
            m.react("📈")
            m.react("🔞")
            m.react("🚀")

            const filter = (reaction, user) => reaction.emoji.name === "ℹ️" && user.id === message.author.id;
            const collector = m.createReactionCollector(filter, { max: 9, time: 5 * 60 * 1000 });

            collector.on('collect', () => {

                const embed = new Discord.MessageEmbed()
                    .setColor(0x5126c7)
                    .setAuthor("🎙️ Informational Commands\n\n ")
                    .addField("Currency Converter", "`*currency <init currency> <amount> <final currency>`")
                    .addField("Delay Calculator", "`*delaycalc <task number> <proxy count>`")
                    .addField("Fee Calculator", "`*fee <selling price>`")
                    .addField("Invite Count (Top 5)", "`*invites`")
                    .addField("Server Member Count", "`*membercount`")
                    .addField("Ping", "`*ping`")
                    .addField("Server Information", "`*serverinfo`")
                    .addField("Shoe Size Converter", "`*convert <us shoe size 6-13`")
                    .addField("Website Status Checker", "`*status <url>`")
                    .addField("Bot Uptime", "`*uptime`")
                    .addField("Who Is?", "`*whois`")
                m.edit(embed)
            });

            const filter1 = (reaction, user) => reaction.emoji.name === "🎉" && user.id === message.author.id;
            const collector1 = m.createReactionCollector(filter1, { max: 9, time: 5 * 60 * 1000 })

            collector1.on('collect', () => {
                const embed1 = new Discord.MessageEmbed()
                    .setColor(0x5126c7)
                    .setAuthor("🎉 Fun Commands")
                    .addField("8-Ball", "`*8ball <query>`")
                    .addField("Profile Picture Enlarger", "`*av`")
                    .addField("Blackjack", "`*blackjack`")
                    .addField("Math Caluclator", "`*calculate <equation>`")
                    .addField("Cat / Dog Pics", "`*cat / *dog`")
                    .addField("Flip a Coin", "`*coinflip`")
                    .addField("Diceroll", "`*dice`")
                    .addField("Get a Rating", "`*rate <anything>`")
                    .addField("Rock Paper Scissors", "`*rps`")
                m.edit(embed1)
            });
            
            const filter2 = (reaction, user) => reaction.emoji.name === "📈" && user.id === message.author.id;
            const collector2 = m.createReactionCollector(filter2, { max: 9, time: 5 * 60 * 1000 });

            collector2.on('collect', () => {

                const embed2 = new Discord.MessageEmbed()
                    .setColor(0x5126c7)
                    .setAuthor("📈 Moderation Commands")
                    .addField("**Add Role**", "`*addrole <user> <role>`")
                    .addField("**Ban**", "`*ban <user>`")
                    .addField("**Change Bot Nickname**", "`*setbotnick <new nickname>`")
                    .addField("**Clear Chat**", "`*clear <number of messages>`")
                    .addField("**Kick**", "`*kick <user>`")
                    .addField("**Mute**", "`*mute <user> <duration (s,m,h,d)`")
                    .addField("**Remove Role**", "`*removerole <user> <role>`")
                    .addField("Snipe Recently Deleted Message", "`*snipe`")
                    .addField("**Unmute**", "`*unmute <user>`")
                m.edit(embed2)
            });
            const filter3 = (reaction, user) => reaction.emoji.name === "🔞" && user.id === message.author.id;
            const collector3 = m.createReactionCollector(filter3, { max: 9, time: 5 * 60 * 1000 });
            
            collector3.on('collect', () => {

                const embed3 = new Discord.MessageEmbed()
                    .setColor(0x5126c7)
                    .setAuthor("🔞 NSFW Commands")
                    .addField("**4K**", "`*4k`", true)
                    .addField("**Ass**", "`*ass`", true)
                    .addField("**Boobs**", "`*boobs`", true)
                    .addField("**GIF**", "`*nsfwgif`", true)
                    .addField("**Hentai**", "`*hentai`", true)
                    .addField("**Pussy**", "`*pussy`", true)
                    .addField("**Thighs**", "`*thighs`", true)
                m.edit(embed3)
            });

            const filter4 = (reaction, user) => reaction.emoji.name === "🚀" && user.id === message.author.id;
            const collector4 = m.createReactionCollector(filter4, { max: 9, time: 5 * 60 * 1000 })

            collector4.on('collect', () => {
                const embed1 = new Discord.MessageEmbed()
                    .setColor(0x5126c7)
                    .setAuthor("🚀 Owner Commands")
                    .addField("Eval Command", "`*eval <command>`")
                    .addField("Terminate the Bot", "`*shutdown`")
                m.edit(embed1)
            });
        })
    }
};
