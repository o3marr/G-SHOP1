module.exports = {
  name: 'kick',  // اسم الأمر
  description: 'Kick a user from the server.',  // وصف الأمر
  execute: async (client, message, args) => {
    const user = message.mentions.users.first();
    if (!user) {
      return message.reply('Please mention a user to kick.');
    }

    const member = message.guild.members.cache.get(user.id);
    if (member) {
      await member.kick();
      message.channel.send(`${user.tag} has been kicked.`);
    } else {
      message.reply('Could not find that user.');
    }
  }
};
