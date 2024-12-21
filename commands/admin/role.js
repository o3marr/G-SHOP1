module.exports = {
  name: 'role',
  description: 'إعطاء أو إزالة دور من عضو',
  execute(message, args) {
    const member = message.mentions.members.first();
    const role = message.guild.roles.cache.find(r => r.name === args[1]);

    if (!member) {
      return message.reply('يجب عليك ذكر العضو الذي تريد تعديل أدواره!');
    }

    if (!role) {
      return message.reply('لم أتمكن من العثور على هذا الدور!');
    }

    if (args[0] === 'add') {
      member.roles.add(role)
        .then(() => message.reply(`تم إضافة دور "${role.name}" لـ ${member.user.tag}.`))
        .catch(err => message.reply('❌ حدث خطأ أثناء إضافة الدور.'));
    } else if (args[0] === 'remove') {
      member.roles.remove(role)
        .then(() => message.reply(`تم إزالة دور "${role.name}" من ${member.user.tag}.`))
        .catch(err => message.reply('❌ حدث خطأ أثناء إزالة الدور.'));
    } else {
      message.reply('يرجى تحديد إما "add" أو "remove" لتعديل الدور.');
    }
  },
};
