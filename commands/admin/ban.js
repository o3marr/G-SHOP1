module.exports = {
  name: 'ban',  // اسم الأمر
  description: 'Ban a user',  // وصف الأمر
  execute: async (client, message, args) => {
    // منطق تنفيذ الأمر
    const user = message.mentions.users.first();
    if (!user) {
      return message.reply('Please mention a user to ban.');
    }

    const member = message.guild.members.cache.get(user.id);
    if (member) {
      await member.ban();
      message.channel.send(`${user.tag} has been banned.`);
    } else {
      message.reply('❌ لا يمكن العثور على هذا العضو.');
    }
  }
};
