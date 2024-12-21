module.exports = {
    name: 'checkrole',  // اسم الأمر
    description: 'Check the roles of a mentioned user.',  // وصف الأمر
    execute: async (client, message, args) => {
      const user = message.mentions.users.first();
      if (!user) {
        return message.reply('Please mention a user to check roles.');
      }
  
      const member = message.guild.members.cache.get(user.id);
      if (member) {
        const roles = member.roles.cache.map(role => role.name).join(', ');
        message.channel.send(`${user.tag} has the following roles: ${roles}`);
      } else {
        message.reply('Could not find that user.');
      }
    }
  };
  