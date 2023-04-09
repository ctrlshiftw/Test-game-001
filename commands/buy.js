const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  if (userBalance.amount < 1) return message.channel.send("你并沒有錢欸..");
  let item = args[0];
  if (!item) return message.channel.send("你想要買什麽");
  let hasItem = client.shop[item];
  if (!hasItem || hasItem == undefined) return message.reply("我們并不買那個東西");
  let isBalanceEnough = (userBalance.amount >= hasItem.cost);
  if (!isBalanceEnough) return message.reply("你沒有足夠的錢，你還需要"+hasItem.cost+" 來買這個物品");
  let buy = client.eco.removeMoney(message.author.id, hasItem.cost);
  
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  
  client.db.push(`items_${message.author.id}`, itemStruct);
  return message.channel.send(`你買了 **${item}** ，你花了 ** ${hasItem.cost}**G`);
};

exports.help = {
  name: "buy",
  aliases: [],
  usage: `buy <item>`
};
