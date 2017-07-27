const komada = require('komada');
 var eCFG = require('./extraCFG.json')
 var oID = "195223544186142727"
var perms = new komada.PermLevels()
.addLevel(0, false, () => true)
.addLevel(2, false, (client, msg) => {
  var modRole = msg.guild.roles.get(client.settingGateway.get(msg.guild.id).modRole)
  return modRole && msg.member.roles.has(modRole.id)
})
.addLevel(3, false, (client, msg) => {
  var adminRole = msg.guild.roles.get(client.settingGateway.get(msg.guild.id).adminRole)
  return adminRole && msg.member.roles.has(adminRole.id)
})
.addLevel(4, false, (client, msg) => {
  return msg.author.id === msg.guild.ownerID
})
.addLevel(10, false, (client, msg) => {
  return msg.author.id === oID //|| eCFG.aditionalOwners.includes(msg.author.id)
})
.structure

var beta = new komada.Client({
  ownerID: oID,
  prefix: "y.",
  clientOptions: {
    fetchAllMembers: true
  },
  permStructure: perms,
  commandEditing: true,
  cmdLogging: true,
  extraCFG: eCFG
})
beta.login(require('../bot_logins.json').MBeta)
