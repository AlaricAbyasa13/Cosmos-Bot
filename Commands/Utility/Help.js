module.exports = [{
	name: 'Help',
  aliases: ["H", "Cmd", "Command"],
  usage: 'Help [command]',
  description: 'See my commands list',
  example: 'Help ping',
  cooldown: '5s',
	code: `
$globalcooldown[$commandinfo[Help;cooldown];{newEmbed:{footer:Cosmos v$getvar[Version]}{author:Cooldown!:$authorAvatar}{color:$getvar[Color]}{description:<a:Timer:910115421854781440> Please wait %time%!}]
$color[1;$getvar[Color]]
$title[1;Cosmos Commands List]
$description[1;**CLICK THE SELECT MENU FOR COMMANDS**
$customemoji[Lamp;908336280654458900]You can also do \`$getservervar[Prefix]Help [command]\`]
$addfield[1;Latest Update - 15/11/2021;
$customemoji[Orange;908336280654458900] \`Added Invite Link Button On Help Command\`
$customemoji[Orange;908336280654458900] \`Added Support Link Button On Help Command\`
$customemoji[Orange;908336280654458900] \`Cosmos v$getvar[Version] Released!\`;no]
$addfield[1;Information;$customemoji[Gear;908336280654458900] **Prefix:** \`$getservervar[Prefix]\`;no]
$footer[1;Cosmos v$getvar[Version]]
$thumbnail[1;$userAvatar[$clientID]]
$addButton[2;Invite Me;link;https://discord.com/api/oauth2/authorize?client_id=$clientid&permissions=8&scope=applications.commands%20bot;no;🔗]
$addButton[2;Support;link;https://discord.gg/mwn6B5Twtk;no;🔨]
$addSelectMenu[1;help_$authorID;📚 Select a category!;1;1;false;Utility:Commands for information:0:false:908353451090665512;Fun:Commands that make you happy:1:false:908981882077720596;Economy:Play economy commands:2:false:908983193582047232;Moderation:Commands to moderate server:3:false:908533879315513345;Other:Other usefull commands:4:false:909670332724547644]
`
}, {
 type : 'interaction',
 prototype : 'selectMenu',
 code : `
$djsEval[console.log(d.data.interaction.values)]
$interactionUpdate[;{newEmbed:{footer:Cosmos v$getvar[Version]}{author:Utility Commands:$authorAvatar}{description:\`Help, Ping, About\`}{color:$getvar[Color]}};{actionRow:{selectMenu:help_$authorID:📚 Select a category!:1:1:false:{selectMenuOptions:Utility:0:Commands for information:false:<a:Gears:908353451090665512>}{selectMenuOptions:Fun:1:Commands that make you happy:false:<a:Game:908981882077720596>}{selectMenuOptions:Economy:2:Play economy commands:false:<a:Money:908983193582047232>}{selectMenuOptions:Moderation:3:Commands to moderate server:false:<a:Hammer:908533879315513345>}{selectMenuOptions:Other:4:Other usefull commands:false:<:Loading:909670332724547644>}}}   ;]
    $onlyIf[$interactionData[customId]==help_$interactionData[author.id];]
    $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
    "content" : " ",
    "embeds" : "{newEmbed:{title:Error}{description:Only author can use select menu!}{color:#ff0000}}",
    "ephemeral" : true,
    "options" : {
        "interaction" : true
    }
}]
$onlyIf[$interactionData[values[0]]==0;]
`
}, {
 type : 'interaction',
 prototype : 'selectMenu',
 code : `
$djsEval[console.log(d.data.interaction.values)]
$interactionUpdate[;{newEmbed:{footer:Cosmos v$getvar[Version]}{author:Fun Commands:$authorAvatar}{description:\`Nothing in here!\`}{color:$getvar[Color]}}; {actionRow:{selectMenu:help_$authorID:📚 Select a category!:1:1:false:{selectMenuOptions:Utility:0:Commands for information:false:<a:Gears:908353451090665512>}{selectMenuOptions:Fun:1:Commands that make you happy:false:<a:Game:908981882077720596>}{selectMenuOptions:Economy:2:Play economy commands:false:<a:Money:908983193582047232>}{selectMenuOptions:Moderation:3:Commands to moderate server:false:<a:Hammer:908533879315513345>}{selectMenuOptions:Other:4:Other usefull commands:false:<:Loading:909670332724547644>}}};]
    $onlyIf[$interactionData[customId]==help_$interactionData[author.id];]
    $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
    "content" : " ",
    "embeds" : "{newEmbed:{title:Error}{description:Only author can use select menu!}{color:#ff0000}}",
    "ephemeral" : true,
    "options" : {
        "interaction" : true
    }
}]
$onlyIf[$interactionData[values[0]]==1;]
`
}, {
 type : 'interaction',
 prototype : 'selectMenu',
 code : `
$djsEval[console.log(d.data.interaction.values)]
$interactionUpdate[;{newEmbed:{footer:Cosmos v$getvar[Version]}{author:Economy Commands:$authorAvatar}{description:\`Nothing in here!\`}{color:$getvar[Color]}};{actionRow:{selectMenu:help_$authorID:📚 Select a category!:1:1:false:{selectMenuOptions:Utility:0:Commands for information:false:<a:Gears:908353451090665512>}{selectMenuOptions:Fun:1:Commands that make you happy:false:<a:Game:908981882077720596>}{selectMenuOptions:Economy:2:Play economy commands:false:<a:Money:908983193582047232>}{selectMenuOptions:Moderation:3:Commands to moderate server:false:<a:Hammer:908533879315513345>}{selectMenuOptions:Other:4:Other usefull commands:false:<:Loading:909670332724547644>}}} ;]
    $onlyIf[$interactionData[customId]==help_$interactionData[author.id];]
    $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
    "content" : " ",
    "embeds" : "{newEmbed:{title:Error}{description:Only author can use select menu!}{color:#ff0000}}",
    "ephemeral" : true,
    "options" : {
        "interaction" : true
    }
}]
$onlyIf[$interactionData[values[0]]==2;]
`
}, {
 type : 'interaction',
 prototype : 'selectMenu',
 code : `
$djsEval[console.log(d.data.interaction.values)]
$interactionUpdate[;{newEmbed:{footer:Cosmos v$getvar[Version]}{author:Moderation Commands:$authorAvatar}{description:\`Nothing in here!\`}{color:$getvar[Color]}}; {actionRow:{selectMenu:help_$authorID:📚 Select a category!:1:1:false:{selectMenuOptions:Utility:0:Commands for information:false:<a:Gears:908353451090665512>}{selectMenuOptions:Fun:1:Commands that make you happy:false:<a:Game:908981882077720596>}{selectMenuOptions:Economy:2:Play economy commands:false:<a:Money:908983193582047232>}{selectMenuOptions:Moderation:3:Commands to moderate server:false:<a:Hammer:908533879315513345>}{selectMenuOptions:Other:4:Other usefull commands:false:<:Loading:909670332724547644>}}};]
    $onlyIf[$interactionData[customId]==help_$interactionData[author.id];]
    $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
    "content" : " ",
    "embeds" : "{newEmbed:{title:Error}{description:Only author can use select menu!}{color:#ff0000}}",
    "ephemeral" : true,
    "options" : {
        "interaction" : true
    }
}]
$onlyIf[$interactionData[values[0]]==3;]
`
}, {
 type : 'interaction',
 prototype : 'selectMenu',
 code : `
$djsEval[console.log(d.data.interaction.values)]
$interactionUpdate[;{newEmbed:{footer:Cosmos v$getvar[Version]}{author:Other Commands:$authorAvatar}{description:\`Nothing in here!\`}{color:$getvar[Color]}}; {actionRow:{selectMenu:help_$authorID:📚 Select a category!:1:1:false:{selectMenuOptions:Utility:0:Commands for information:false:<a:Gears:908353451090665512>}{selectMenuOptions:Fun:1:Commands that make you happy:false:<a:Game:908981882077720596>}{selectMenuOptions:Economy:2:Play economy commands:false:<a:Money:908983193582047232>}{selectMenuOptions:Moderation:3:Commands to moderate server:false:<a:Hammer:908533879315513345>}{selectMenuOptions:Other:4:Other usefull commands:false:<:Loading:909670332724547644>}}};]
    $onlyIf[$interactionData[customId]==help_$interactionData[author.id];]
    $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
    "content" : " ",
    "embeds" : "{newEmbed:{title:Error}{description:Only author can use select menu!}{color:#ff0000}}",
    "ephemeral" : true,
    "options" : {
        "interaction" : true
    }
}]
$onlyIf[$interactionData[values[0]]==4;]
`
}]
