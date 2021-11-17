console.log("NodeJS Version: " + process.version)

const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
sharding: true,
shardAmount: 100,
token: process.env.TOKEN, //Discord Bot Token
prefix: ['$getservervar[Prefix]','<@$clientID>'], //Discord Bot Prefix
fetchInvites: true,
intents: "all", //Discord Intents
everyoneMention: `false`,
autoUpdate: true,
})

//Load Commands
const loader = new aoijs.LoadCommands(bot);loader.load(bot.cmd,'./Commands/')

//Status
const status = require("./Status")

bot.status(status)
//Events
bot.onMessage()

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

//Uptime System
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});
//...
//...
const listener = app.listen(process.env.PORT, () => {
  console.log('Listening on Port: ' + '[' + listener.address().port + ']');
});

const Variables = require("./Variables.js")

bot.variables(Variables)
bot.onInteractionCreate()
