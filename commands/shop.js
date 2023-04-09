const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let items = Object.keys(client.shop);
  let content = "";
  
  for (var i in items) {
    content += `${items[i]} - ${client.shop[items[i]].cost}\n`
  }
  
  let embed = new MessageEmbed()
  .setTitle("商店")
  .setDescription(content)
  .setColor("BLURPLE")
  .setFooter("歡迎光臨")
  return message.channel.send(embed);
};

exports.help = {
  name: "shop",
  aliases: [],
  usage: `shop`
};
