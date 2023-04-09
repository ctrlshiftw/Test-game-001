module.exports = (client) => {
    console.log(`${client.user.tag} is online!`);
    client.user.setUsername("Test 001")
  client.user.setActivity("test");
};