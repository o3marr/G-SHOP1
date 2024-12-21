module.exports = {
    name: 'role-info',
    description: 'عرض معلومات الدور',
    execute(message, args) {
      const role = message.guild.roles.cache.find(r => r.name === args[0]);
      if (!role) {
        return message.reply('لم أتمكن من العثور على هذا الدور!');
      }
  
      message.reply(`معلومات عن الدور "${role.name}":\n\nID: ${role.id}\nعدد الأعضاء الذين يحملون هذا الدور: ${role.members.size}\nاللون: ${role.color}`);
    },
  };
  