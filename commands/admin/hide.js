module.exports = {
  name: 'hide',  // اسم الأمر
  description: 'Hide a specific channel in the server.',  // وصف الأمر
  execute: async (client, message, args) => {
    const channel = message.mentions.channels.first();
    if (!channel) {
      return message.reply('Please mention a channel to hide.');
    }

    channel.permissionOverwrites.edit(message.guild.id, { VIEW_CHANNEL: false });
    message.channel.send(`${channel.name} has been hidden.`);
  }
};
