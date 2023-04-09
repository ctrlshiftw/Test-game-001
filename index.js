const Discord = require("discord.js");
const client = new Discord.Client({ disableMentions: 'everyone' });
const Eco = require("quick.eco");
const keepAlive = require('./server.js')
keepAlive();
client.eco = new Eco.Manager(); 
client.db = Eco.db; 
client.config = require("./botConfig");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.shop = {
  "木頭" : {
    cost: 150
  },
  "石頭" : {
    cost: 300
  },
  "隨機禮物" : {
    cost: 1000
  },
  "生命藥水" : {
    cost: 2000
  },
  "生命藥水L" : {
    cost: 3000
  },
  "藍寶石" : {
    cost: 3000
  },
  "紅寶石" : {
    cost: 3000
  },
  "綠寶石" : {
    cost: 3000
  },
  "GENM的鷄鷄" : {
    cost: 6900
  },
};
const fs = require("fs");

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        const event = require(`./events/${f}`);
        let eventName = f.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        let command = require(`./commands/${f}`);
        client.commands.set(command.help.name, command);
        command.help.aliases.forEach(alias => {
            client.aliases.set(alias, command.help.name);
        });
    });
});

module.exports = {
    EconomyManager: require('./src/Eco'),
    version: require ('./package.json').version,
    Util: require('./src/Util')
}

client.login(process.env.token);
