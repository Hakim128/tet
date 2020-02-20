const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("660500815894806555")
setInterval(function() {
channel.send(`انا حكيم اسطورة الاساطير`);
}, 30)
})

client.login(process.env.BOT_TOKEN);