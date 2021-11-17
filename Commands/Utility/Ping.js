module.exports = [{
    name: 'Ping',
  aliases: ["P", "Pong", "Latelancy"],
  usage: 'Ping',
  description: 'Show bot latelancy speed',
  category: 'Utility',
  example: 'Ping',
  cooldown: '5s',
    code: `
  $title[1;Pong!]
  $color[1;$getVar[Color]]
  $description[1;<a:PingPong:910095956580646922> Pong! \`$ping\`ms]
  $footer[1;Cosmos v$getvar[Version]]
  $globalcooldown[$commandinfo[Ping;cooldown];{newEmbed:{timestamp:ms}{author:Cooldown!:$authorAvatar}{color:$getvar[Color]}{description:<a:Timer:910115421854781440> Please wait %time%!}]
  $addButton[1;Refresh;success;RefreshPing;no;910098242707021905]
`
}, {
name: "RefreshPing",
type: "interaction",
prototype: "button",
code: `
$djsEval[console.log(d.data.interaction.values)]
$interactionUpdate[;{newEmbed:{title:Pong!}{color:$getvar[Color]}{description:<a:PingPong:910095956580646922> Pong! \`$ping\`ms}{footer:Cosmos v$getvar[Version]};{actionRow:{button:Refresh:3:RefreshPing:false:<a:Reload:910098242707021905>}};;;yes]
`
}];
