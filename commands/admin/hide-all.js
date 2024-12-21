module.exports = {
  name: 'hide-all',  // اسم الأمر
  description: 'Hide all channels in the server.',  // وصف الأمر
  execute: async (client, message, args) => {
    const guild = message.guild;
    const channels = guild.channels.cache;
    channels.forEach(channel => {
      channel.permissionOverwrites.edit(guild.id, { VIEW_CHANNEL: false });
    });
    message.channel.send('All channels are now hidden.');
  }
};
