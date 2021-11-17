module.exports = [{
	name: 'Evaluate',
  aliases: ["Eval", "Evaluation", "Ev"],
  usage: 'Evaluate [function]',
  description: 'Evaluate a function',
  category: 'Developer',
  example: 'Evaluate $uptime',
  cooldown: '1s',
	code: `
  $eval[$message]
  $globalcooldown[$commandinfo[Evaluate;cooldown];{newEmbed:{timestamp:ms}{author:Cooldown!:$authorAvatar}{color:$getvar[Color]}{description:<a:Timer:910115421854781440> Please wait %time%!}]
`
}];
