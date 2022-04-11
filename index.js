// version 1.0.0, Includes first 101 cars, I will add the rest in a future version
const { Client, MessageEmbed } = require('discord.js');
const config = require('./config')
const commands = require('./help');
const keepAlive = require("./server")



let bot = new Client({
  fetchAllMembers: true, 
  presence: {
    status: 'online',
    activity: {
      name: `DRIFTING SIM 420`,
      type: 'PLAYING'
    }
  }
});

bot.setMaxListeners(0);

bot.on('ready', () => console.log(`Logged in as ${bot.user.tag}.`));

bot.on('guildCreate', guild => {
  guild.systemChannel.send(`% help for commands lel`)
});

bot.on('message', async message => {
  if (message.content.startsWith(config.prefix)) {
    let args = message.content.slice(config.prefix.length).split(' ');
    let command = args.shift().toLowerCase();
    
    

    switch (command) {

      case 'ping':
        let msg = await message.reply('Pinging...');
        await msg.edit(`PONG! Message round-trip took ${Date.now() - msg.createdTimestamp}ms.`)
        break;

      case 'help':
        let embed =  new MessageEmbed()
          .setTitle('HELP MENU')
          .setColor('BLACK')
          .setFooter(`Requested by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL())
          .setThumbnail(bot.user.displayAvatarURL());
        if (!args[0])
          embed
            .setDescription(Object.keys(commands).map(command => `\`${command.padEnd(Object.keys(commands).reduce((a, b) => b.length > a.length ? b : a, '').length)}\` :: ${commands[command].description}`).join('\n'));
        else {
          if (Object.keys(commands).includes(args[0].toLowerCase()) || Object.keys(commands).map(c => commands[c].aliases || []).flat().includes(args[0].toLowerCase())) {
            let command = Object.keys(commands).includes(args[0].toLowerCase())? args[0].toLowerCase() : Object.keys(commands).find(c => commands[c].aliases && commands[c].aliases.includes(args[0].toLowerCase()));
            embed
              .setTitle(`COMMAND - ${command}`)

            if (commands[command].aliases)
              embed.addField('Command aliases', `\`${commands[command].aliases.join('`, `')}\``);
            embed
              .addField('DESCRIPTION', commands[command].description)
              .addField('FORMAT', `\`\`\`${config.prefix}${commands[command].format}\`\`\``);
          } else {
            embed
              .setColor('RED')
              .setDescription('This command does not exist. Please use the help command without specifying any commands to list them all.');
          }
        }
        message.channel.send(embed);
        break;
    }
  }
});

//roleplay 

bot.on("message", msg => {
  if (msg.content === "%car") {
    const car = cars[Math.floor(Math.random() * cars.length)]
    msg.channel.send({ files: [car]})
  }
})

const cars = [
  "https://awesomecars.neocities.org/images/car%20(1).mp4",
  "https://awesomecars.neocities.org/images/car%20(2).mp4",
  "https://awesomecars.neocities.org/images/car%20(3).mp4",
  "https://awesomecars.neocities.org/images/car%20(4).mp4",
  "https://awesomecars.neocities.org/images/car%20(5).mp4",
  "https://awesomecars.neocities.org/images/car%20(6).mp4",
  "https://awesomecars.neocities.org/images/car%20(7).mp4",
  "https://awesomecars.neocities.org/images/car%20(8).mp4",
  "https://awesomecars.neocities.org/images/car%20(9).mp4",
  "https://awesomecars.neocities.org/images/car%20(10).mp4",
  "https://awesomecars.neocities.org/images/car%20(11).mp4",
  "https://awesomecars.neocities.org/images/car%20(12).mp4",
  "https://awesomecars.neocities.org/images/car%20(13).mp4",
  "https://awesomecars.neocities.org/images/car%20(14).mp4",
  "https://awesomecars.neocities.org/images/car%20(15).mp4",
  "https://awesomecars.neocities.org/images/car%20(16).mp4",
  "https://awesomecars.neocities.org/images/car%20(17).mp4",
  "https://awesomecars.neocities.org/images/car%20(18).mp4",
  "https://awesomecars.neocities.org/images/car%20(19).mp4",
  "https://awesomecars.neocities.org/images/car%20(20).mp4",
  "https://awesomecars.neocities.org/images/car%20(21).mp4",
  "https://awesomecars.neocities.org/images/car%20(22).mp4",
  "https://awesomecars.neocities.org/images/car%20(23).mp4",
  "https://awesomecars.neocities.org/images/car%20(24).mp4",
  "https://awesomecars.neocities.org/images/car%20(25).mp4",
  "https://awesomecars.neocities.org/images/car%20(26).mp4",
  "https://awesomecars.neocities.org/images/car%20(27).mp4",
  "https://awesomecars.neocities.org/images/car%20(28).mp4",
  "https://awesomecars.neocities.org/images/car%20(29).mp4",
  "https://awesomecars.neocities.org/images/car%20(30).mp4",
  "https://awesomecars.neocities.org/images/car%20(31).mp4",
  "https://awesomecars.neocities.org/images/car%20(32).mp4",
  "https://awesomecars.neocities.org/images/car%20(33).mp4",
  "https://awesomecars.neocities.org/images/car%20(34).mp4",
  "https://awesomecars.neocities.org/images/car%20(35).mp4",
  "https://awesomecars.neocities.org/images/car%20(36).mp4",
  "https://awesomecars.neocities.org/images/car%20(37).mp4",
  "https://awesomecars.neocities.org/images/car%20(38).mp4",
  "https://awesomecars.neocities.org/images/car%20(39).mp4",
  "https://awesomecars.neocities.org/images/car%20(40).mp4",
  "https://awesomecars.neocities.org/images/car%20(41).mp4",
  "https://awesomecars.neocities.org/images/car%20(42).mp4",
  "https://awesomecars.neocities.org/images/car%20(43).mp4",
  "https://awesomecars.neocities.org/images/car%20(44).mp4",
  "https://awesomecars.neocities.org/images/car%20(45).mp4",
  "https://awesomecars.neocities.org/images/car%20(46).mp4",
  "https://awesomecars.neocities.org/images/car%20(47).mp4",
  "https://awesomecars.neocities.org/images/car%20(48).mp4",
  "https://awesomecars.neocities.org/images/car%20(49).mp4",
  "https://awesomecars.neocities.org/images/car%20(50).mp4",
  "https://awesomecars.neocities.org/images/car%20(51).mp4",
  "https://awesomecars.neocities.org/images/car%20(52).mp4",
  "https://awesomecars.neocities.org/images/car%20(53).mp4",
  "https://awesomecars.neocities.org/images/car%20(54).mp4",
  "https://awesomecars.neocities.org/images/car%20(55).mp4",
  "https://awesomecars.neocities.org/images/car%20(56).mp4",
  "https://awesomecars.neocities.org/images/car%20(57).mp4",
  "https://awesomecars.neocities.org/images/car%20(58).mp4",
  "https://awesomecars.neocities.org/images/car%20(59).mp4",
  "https://awesomecars.neocities.org/images/car%20(60).mp4",
  "https://awesomecars.neocities.org/images/car%20(61).mp4",
  "https://awesomecars.neocities.org/images/car%20(62).mp4",
  "https://awesomecars.neocities.org/images/car%20(63).mp4",
  "https://awesomecars.neocities.org/images/car%20(64).mp4",
  "https://awesomecars.neocities.org/images/car%20(65).mp4",
  "https://awesomecars.neocities.org/images/car%20(66).mp4",
  "https://awesomecars.neocities.org/images/car%20(67).mp4",
  "https://awesomecars.neocities.org/images/car%20(68).mp4",
  "https://awesomecars.neocities.org/images/car%20(69).mp4",
  "https://awesomecars.neocities.org/images/car%20(70).mp4",
  "https://awesomecars.neocities.org/images/car%20(71).mp4",
  "https://awesomecars.neocities.org/images/car%20(72).mp4",
  "https://awesomecars.neocities.org/images/car%20(73).mp4",
  "https://awesomecars.neocities.org/images/car%20(74).mp4",
  "https://awesomecars.neocities.org/images/car%20(75).mp4",
  "https://awesomecars.neocities.org/images/car%20(76).mp4",
  "https://awesomecars.neocities.org/images/car%20(77).mp4",
  "https://awesomecars.neocities.org/images/car%20(78).mp4",
  "https://awesomecars.neocities.org/images/car%20(79).mp4",
  "https://awesomecars.neocities.org/images/car%20(80).mp4",
  "https://awesomecars.neocities.org/images/car%20(81).mp4",
  "https://awesomecars.neocities.org/images/car%20(82).mp4",
  "https://awesomecars.neocities.org/images/car%20(83).mp4",
  "https://awesomecars.neocities.org/images/car%20(84).mp4",
  "https://awesomecars.neocities.org/images/car%20(85).mp4",
  "https://awesomecars.neocities.org/images/car%20(86).mp4",
  "https://awesomecars.neocities.org/images/car%20(87).mp4",
  "https://awesomecars.neocities.org/images/car%20(88).mp4",
  "https://awesomecars.neocities.org/images/car%20(89).mp4",
  "https://awesomecars.neocities.org/images/car%20(90).mp4",
  "https://awesomecars.neocities.org/images/car%20(91).mp4",
  "https://awesomecars.neocities.org/images/car%20(92).mp4",
  "https://awesomecars.neocities.org/images/car%20(93).mp4",
  "https://awesomecars.neocities.org/images/car%20(94).mp4",
  "https://awesomecars.neocities.org/images/car%20(95).mp4",
  "https://awesomecars.neocities.org/images/car%20(96).mp4",
  "https://awesomecars.neocities.org/images/car%20(97).mp4",
  "https://awesomecars.neocities.org/images/car%20(98).mp4",
  "https://awesomecars.neocities.org/images/car%20(99).mp4",
  "https://awesomecars.neocities.org/images/car%20(100).mp4",
  "https://awesomecars.neocities.org/images/car%20(101).mp4"
]



keepAlive()
bot.login(config.token);
