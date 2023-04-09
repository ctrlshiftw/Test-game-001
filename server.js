const express = require('express')
const server = express();



server.all('/', (req, res)=>{
    res.send(`Test game is online`)
})
function keepAlive(){
    server.listen(2000, ()=>{console.log("Test game is online")});
}
module.exports = keepAlive;