var Botkit = require('botkit');

var controller = Botkit.slackbot({
  debug: false
  //include "log: false" to disable logging
  //or a "logLevel" integer from 0 to 7 to adjust logging verbosity
});

// connect the bot to a stream of messages
controller.spawn({
  token: 'xoxb-118722363286-7a7kHBaC55LEeTkHv6jrbSDD',
}).startRTM()

// give the bot something to listen for.
controller.hears('hello',['direct_message','direct_mention','mention'],function(bot,message) {

  bot.reply(message,'Hello yourself.');

});

controller.hears('create (.*)',['direct_message','direct_mention','mention'], (bot,message) => {
  console.log(message.match[1])
  bot.reply(message, `heard ${message.match[1]}`)
});