module.exports = {
    name: "ping",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message) => {

      message.delete()
      
        message.channel.send(`**API response time: ${Math.round(client.ping)}ms**`);
    }
}
