const { MessageEmbed } = require("discord.js")
exports.execute = async (client, message, args) => {


  const embed = new MessageEmbed()
    .setAuthor(`${message.author.tag}的背包`, message.guild.iconURL)
    .setColor("RANDOM")
    .setThumbnail()
    .setTimestamp();
  const x = client.db.get(`items_${message.author.id}`);
if(!x) { return message.channel.send(`你的背包是空的`); }
const arrayToObject = x.reduce((itemsobj, x) => {
    itemsobj[x.name] = (itemsobj[x.name] || 0) + 1;
    return itemsobj;
}, {});
const result = Object.keys(arrayToObject).map(k => embed.addField(`名字: ${k}`,`數量: **${arrayToObject[k]}**`, false));
  
 
  return message.channel.send(embed);
}
exports.help = {
  name: "inventory",
  aliases: ["inv"],
  usage: `inv`
}

