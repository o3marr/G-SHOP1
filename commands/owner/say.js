module.exports = {
  name: 'say',  // اسم الأمر
  description: 'Make the bot send a message to a specified channel.',  // وصف الأمر
  execute: async (client, message, args) => {
    // تحديد القناة المستهدفة
    let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
    const msg = args.slice(1).join(' ');

    // إذا لم يتم تحديد القناة
    if (!channel) {
      return message.reply('Please mention a valid channel or provide the channel ID.');
    }

    // إرسال الرسالة للقناة المستهدفة
    if (channel) {
      let image = message.attachments.first();
      if (image) {
        // إذا كانت هناك صورة مرفقة
        channel.send({ content: `${msg}`, files: [image.url] })
          .then(() => message.delete())
          .catch((error) => console.error('Error sending message: ', error));
      } else {
        // إذا لم تكن هناك صورة
        channel.send(msg)
          .then(() => message.delete())
          .catch((error) => console.error('Error sending message: ', error));
      }
    }
  }
};
