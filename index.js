const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to V𝕀ꋊΛꌦ#1010
  const date = new Date();
  const options = {
    timeZone: 'Asia/Calcutta', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1215552367957639198') // make your bot in discord.com/developers and paste the application ID here
    .setType('WATCHING')
    .setURL('https://www.youtube.com/watch') //Must be a youtube video link 
    .setState('AKA ARCTIC_HERE')
    .setName('GHOST INSTAGRAM')
    .setDetails(`GHOST [${formatTime()}]`) //[${formatTime()}] and this for showing time of stream.
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/862664116061995008/1215547667367596042/Screenshot_20240308_104446_CapCut.png?ex=65fd25fb&is=65eab0fb&hm=c08c145573aaf310a450321b32bdaa8d5339351c0bef47fec46925fe5e0bef99&') //You can put links in tenor or discord and etc. 
    .setAssetsLargeText('𝙎𝙀𝙍𝙑𝙀𝙍 𝘿𝙀𝙎𝙄𝙂𝙉𝙀𝙍/ 𝘿𝙀𝙑') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/862664116061995008/1215561285127639050/output-onlinegiftools.gif?ex=65fd32aa&is=65eabdaa&hm=16892305604fae45b9747491dac480760c39acc8aac24ab068577e3ed3e678bf&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('THE GHOST') //Text when you hover the Small image
    .addButton('DM ME!', 'https://discord.com/invite/vP36aHSx')
    .addButton('SUBSCRIBE ME!', 'https://youtu.be/v8fUJcwtBbQ');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `GHOST [${formatTime()}]`; //[${newTime}] set this for time 
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);



// put your token in secrets