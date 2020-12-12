module.exports = {
    name: "clear",
    category: "info",
    description: "clears the channel",
    run: (client, message, args) => {

      message.delete()

      
   if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
    }




        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.channel.send("That's not a number!").then(m => m.delete(5000));
        }


        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        }else{
            deleteAmount = parseInt(args[0])
        }
        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`Chat has been cleared :)`)).then(m => m.delete(5000))
}}