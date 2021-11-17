module.exports = [{
    name: 'Uptime',
  aliases: ["U", "Timeup", "Utme"],
  usage: 'Uptime',
  description: 'Show bot uptime',
  category: 'Utility',
  example: 'Uptime',
  cooldown: '5s',
    code: `
  $title[1;Uptime!]
  $color[1;$getVar[Color]]
  $description[1;<a:Uptime:910434840669736960> Uptime: \`$uptime\`]
  $footer[1;Cosmos v$getvar[Version]]
  $globalcooldown[$commandinfo[Ping;cooldown];{newEmbed:{timestamp:ms}{author:Cooldown!:$authorAvatar}{color:$getvar[Color]}{description:<a:Timer:910115421854781440> Please wait %time%!}]
  $addButton[1;Refresh;success;RefreshUptime;no;910098242707021905]
`
}, {
name: "RefreshUptime",
type: "interaction",
prototype: "button",
code: `
$djsEval[console.log(d.data.interaction.values)]
$interactionUpdate[;{newEmbed:{title:Uptime!}{color:$getvar[Color]}{description:<a:Uptime:910434840669736960> Uptime: \`$uptime\`}{footer:Cosmos v$getvar[Version]};{actionRow:{button:Refresh:3:RefreshUptime:false:<a:Reload:910098242707021905>}};;;yes]
`
}];
