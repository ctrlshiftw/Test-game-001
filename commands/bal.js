const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let userBalance = client.eco.fetchMoney(user.id);
    const embed = new MessageEmbed()
        .setTitle(`金幣`)
        .addField(`玩家`, `<@${userBalance.user}>`)
        .addField(`金幣`, `${userBalance.amount} `)
        .setColor("GOLD")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "gold",
    aliases: ["money", "coins", "money", "g"],
    usage: `gold`
}
