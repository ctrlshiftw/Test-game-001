module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 1500) + 1000;
    let work = client.eco.work(client.ecoAddUser, amount);
    if (work.onCooldown) return message.reply(`你現在累了 ${work.time.minutes} 分鐘 ${work.time.seconds} 秒後再回來`);
    else return message.reply(`你做了 **${work.workedAs}** 賺了 **${work.amount}** 現在你有 **${work.after}**`);
};

module.exports.help = {
    name: "work",
    aliases: [],
    usage: "work"
}

