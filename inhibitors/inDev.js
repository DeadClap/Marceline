exports.conf = {
  enabled: true,
  priority: 5
};

exports.run = (client, msg, cmd) => {
  if (!cmd.conf.dev) {
    return false
  }
  if (cmd.conf.dev && client.config.extraCFG.devs.includes(msg.author.id)) {
    return false
  }
   return `${cmd.help.name} is currently under development. Meaning only bot developers can run this command`
};
