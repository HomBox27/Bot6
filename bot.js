const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("527093908371669004")
setInterval(function() {
channel.send(`yes bb im im gang`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
