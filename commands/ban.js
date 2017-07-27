exports.run = async (client, msg, [user, ...reason]) => {
  if (reason.length < 5) return msg.channel.send('\`\`\`reason should be longer then 5 words\`\`\`')
  var r = reason.join(' ')


  client.funcs.guildModLog(client, msg.author, user.user,msg, "ban", r)
  return msg.delete().then(msg.channel.send(`${user.user.tag} was banned for:\n${r}`, {reply: msg.author.id}))
 }

 exports.conf = {
 enabled: true,
 runIn: ['text'],
 aliases: [],
 permLevel: 0,
 botPerms: [],
 requiredFuncs: [],
 dev: true
 }

 exports.help = {
 name: "ban",
 description: "Bans the mentioned user.",
 usage: "<user:member> <reason:str> [...]",
 usageDelim: " ",
 category: "Administration"
 }
