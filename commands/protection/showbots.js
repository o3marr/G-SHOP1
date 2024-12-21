module.exports = {
  name: 'show-bot',
  description: 'عرض قائمة بوتات السيرفر',
  execute(message, args) {
    const bots = message.guild.members.cache.filter(member => member.user.bot).map(bot => bot.user.tag).join(', ');
    message.reply(`بوتات السيرفر: ${bots}`);
  },
};
