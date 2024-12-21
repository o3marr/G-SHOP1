const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'banner', // تحديد اسم الأمر
  description: 'عرض أو تغيير صورة البانر الخاصة بالسيرفر', // وصف الأمر

  async execute(interaction) {
    try {
      // الحصول على صورة البانر للسيرفر
      const guild = interaction.guild;
      const bannerURL = guild.bannerURL({ dynamic: true, size: 1024 }); // الحصول على البانر بجودة عالية

      if (!bannerURL) {
        return interaction.reply({
          content: '❌ لا يوجد بانر مُحدد لهذا السيرفر!',
          ephemeral: true,
        });
      }

      // إرسال البانر في Embed
      const embed = new MessageEmbed()
        .setTitle(`${guild.name} Banner`)
        .setDescription(`إليك صورة البانر الخاصة بالسيرفر: ${guild.name}`)
        .setImage(bannerURL)
        .setColor('#FF00FF');

      return interaction.reply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      return interaction.reply('❌ حدث خطأ أثناء محاولة عرض البانر.');
    }
  },
};
