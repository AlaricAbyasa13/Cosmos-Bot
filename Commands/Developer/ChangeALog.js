module.exports = [{
	name: 'ChangeALog',
  aliases: ["Cal", "Clog", "Changelog"],
  usage: 'ChangeALog',
  description: 'See bot changealog',
  category: 'Developer',
  example: 'Changealog',
  cooldown: '1s',
	code: `
$globalcooldown[$commandinfo[ChangeALog;cooldown];{newEmbed:{footer:Cosmos v$getvar[Version]}{author:Cooldown!:$authorAvatar}{color:$getvar[Color]}{description:<a:Timer:910115421854781440> Please wait %time%!}]
$title[1;Changealog]
$description[1;v0.0.1]
$addfield[1;Latest Update - 18/11/2021;
$customemoji[Orange;908336280654458900] \`Evaluate command created\`
$customemoji[Orange;908336280654458900] \`ChangeALog command created\`
$customemoji[Orange;908336280654458900] \`Help command created\`
$customemoji[Orange;908336280654458900] \`Ping command created\`
$customemoji[Orange;908336280654458900] \`About command created\`
$customemoji[Orange;908336280654458900] \`Uptime command created\`
$customemoji[Orange;908336280654458900] \`Cosmos v$getvar[Version] Released!\`;no]
$addButton[1;Invite Me;link;https://discord.com/api/oauth2/authorize?client_id=$clientid&permissions=8&scope=applications.commands%20bot;no;🔗]
$addButton[1;Support;link;https://discord.gg/mwn6B5Twtk;no;🔨]
$color[1;$getvar[Color]]
$footer[1;Cosmos v$getvar[Version]]
$thumbnail[1;$userAvatar[$clientID]]
$onlyForIDs[$botownerid;648885368543903754;778115359559385119;706717165583204474;608358453580136499;]
`
}];
