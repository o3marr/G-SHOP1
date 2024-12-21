module.exports = {
  name: 'listbans',
  description: 'عرض قائمة الأعضاء المحظورين',
  execute(message, args) {
    if (!message.member.permissions.has('BAN_MEMBERS')) {
      return message.reply('ليس لديك صلاحية لعرض قائمة الحظر!');
    }

    message.guild.bans.fetch()
      .then(bans => {
        const banList = bans.map(ban => ban.user.tag).join(', ') || 'لا يوجد أعضاء محظورين!';
        message.reply(`قائمة الأعضاء المحظورين: ${banList}`);
      })
      .catch(err => message.reply('❌ حدث خطأ أثناء محاولة عرض قائمة الحظر.'));
  },
};
