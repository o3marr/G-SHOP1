module.exports = {
  name: 'role-all',
  description: 'إعطاء دور لجميع الأعضاء',
  execute(message, args) {
    const role = message.guild.roles.cache.find(r => r.name === args[0]);
    if (!role) {
      return message.reply('لم أتمكن من العثور على هذا الدور!');
    }

    message.guild.members.cache.forEach(member => {
      member.roles.add(role)
        .catch(err => console.error(`لم أتمكن من إضافة الدور لـ ${member.user.tag}: ${err}`));
    });

    message.reply(`تم إضافة الدور "${role.name}" لجميع الأعضاء.`);
  },
};
