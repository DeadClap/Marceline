const komada = require('komada');

var test = new komada.Client({
  ownerID: "195223544186142727",
  prefix: "y.",
  clientOptions: {
    fetchAllMembers: true
  },
  cmdEditing: true,
  cmdLogging: true,
  extraCFG: require('./extraCFG.json')
})
test.login(require('../bot_logins.json').MBeta)
