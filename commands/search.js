exports.execute = async (client, message, args) => {
    let users = [
        "G8",
        "Pussy",
        "Penis",
        "Dick"
    ];
    let amount = Math.floor(Math.random() * 200) + 50;
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: true, cooldown: 300000, customName: "search" });
    if (beg.onCooldown) return message.reply(`${beg.time.minutes} 分鐘 ${beg.time.seconds} 秒後再回來`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** 你并沒有拿到任何錢`);
    else return message.reply(`你拿到了 **${beg.amount}** 你現在有 **${beg.after}**`);
};

exports.help = {
    name: "search",
    aliases: [],
    usage: "search"
}
