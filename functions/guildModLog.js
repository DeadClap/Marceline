module.exports = (client, sender, affected, msg, type, message) => {
  var embed = new client.methods.Embed()
  var modlog = msg.guild.channels.get(client.settingGateway.get(msg.guild.id).modLog)

  if (type === "warn") {
    embed.setAuthor('Warning')
  } else if (type === "ban") {
    embed.setAuthor('Ban')
  } else if (type === "kick") {
    embed.setAuthor('Kick')
  } else {
    embed.setAuthor('DEFAULT / ERROR')
    .setDescription('You should never see this, please reqport it to the developers if you do.')
  }



  embed.addField('Offender', affected.tag,true)
  .setThumbnail(affected.displayAvatarURL())
  .addField('Reason', message)
  .setFooter(`Actin Moderator: ${sender.tag}`, sender.displayAvatarURL())

  modlog.send({embed})
};
