exports.execute = async (client, message, args) => {
    let users = [
        "ctrl",
        "CTRL",
        "Ctrl",
        "CtrL"
    ];
    let amount = Math.floor(Math.random() * 30) + 10;
    let beg = client.eco.beg(client.ecoAddUser, amount, { 
canLose: true, 
cooldown: 120000
 });
    if (beg.onCooldown) return message.reply(`你還需要等待${beg.time.seconds}秒.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** 你的從箱子裏面并沒有增加任何東西...`);
    else return message.reply(`** 你從箱子裏面找到了 **${beg.amount}** . 現在你有 ** **${beg.after}**`);
};



exports.help = {
    name: "box",
    aliases: [],
    usage: "box"
}