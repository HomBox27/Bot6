const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("522418981781504002")
setInterval(function() {
channel.send(`kontexx kontexx kontexx kontexx kontexx`);
}, 30)
})

client.login(process.env.BOT_TOKEN);