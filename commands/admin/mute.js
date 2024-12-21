module.exports = {
       name: 'mute',
       description: 'لكتم عضو في السيرفر',
       execute(client, message, args) {
         if (!message.member.permissions.has('MUTE_MEMBERS')) {
           return message.reply('❌ ليس لديك صلاحية كتم الأعضاء!');
         }
     
         const user = message.mentions.members.first();
         if (!user) {
           return message.reply('❌ يجب عليك تحديد العضو!');
         }
     
         user.voice.setMute(true)
           .then(() => message.reply(`${user.user.tag} تم كتمه!`))
           .catch(err => message.reply('❌ فشل في كتم العضو!'));
       },
     };
     