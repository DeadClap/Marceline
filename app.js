const komada = require('komada');
 var eCFG = require('./extraCFG.json')
 var oID = "195223544186142727"
// var perms = new komada.PermLevels()
// .addLevel(0, false, () => true)
// .addLevel(2, false, (client,msg) => {
//   var modRole = msg.guild.roles.get(client.settingGateway.get(msg.guild.id).modRole)
//   if (modRole && msg.member.roles.has(modRole)) return true
// })
// .addLevel(3, false, (client,msg) => {
//   var adminRole = msg.guild.roles.get(client.settingGateway.get(msg.guild.id).adminRole)
//   if (adminRole && msg.member.roles.has(adminRole)) return true
// })
// .addLevel(4, false, (client,msg) => {
//   if (msg.author.id === msg.guild.ownerID) return true
// })
// .addLevel(10, false, (client,msg) => {
//   if (msg.author.id === oID || eCFG.aditionalOwners.includes(msg.author.id)) return true
// })
// .structure

var test = new komada.Client({
  ownerID: oID,
  prefix: "y.",
  clientOptions: {
    fetchAllMembers: true
  },
  // permStructure: perms,
  commandEditing: true,
  cmdLogging: true,
  extraCFG: eCFG
})
test.login(require('../bot_logins.json').MBeta)
