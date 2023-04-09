exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 1000) + 500;
    let addMoney = client.eco.weekly(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`你已經拿了你的每周金幣 ${addMoney.time.days} 天, ${addMoney.time.hours} 小時, ${addMoney.time.minutes} 分鐘, ${addMoney.time.seconds} 秒后再來拿`);
    else return message.reply(`你領取了 **${addMoney.amount}**  你現在有 **${addMoney.after}** `);
};

exports.help = {
    name: "weekly",
    aliases: [],
    usage: "weekly"
}
