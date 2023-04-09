module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 500) + 100;
    let addMoney = client.eco.daily(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`你已經拿了你的每日金幣 ${addMoney.time.hours} 小時, ${addMoney.time.minutes} 分鐘, ${addMoney.time.seconds} 秒后再回來拿`);
    else return message.reply(`你領取了 **${addMoney.amount}**  你現在有 **${addMoney.after}**`);
};

module.exports.help = {
    name: "daily",
    aliases: [],
    usage: "daily"
}
