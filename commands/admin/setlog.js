module.exports = {
    name: 'setlog',
    description: 'تحديد قناة السجل',
    execute(message, args) {
      if (!message.member.permissions.has('ADMINISTRATOR')) {
        return message.reply('ليس لديك صلاحية لتعيين قناة السجل!');
      }
  
      const channel = message.mentions.channels.first();
      if (!channel) {
        return message.reply('يجب أن تذكر قناة السجل!');
      }
  
      // حفظ القناة في قاعدة البيانات أو ملف config
      // مثال بسيط: 
      message.reply(`تم تعيين قناة السجل إلى ${channel.name}`);
    },
  };
  