const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "rooms",
  description: "عرض الأعضاء في الرومات الصوتية.",
  aliases: ["voice"],
  usage: `{prefix}rooms`,
  examples: `{prefix}rooms`,
  type: "admin",
  botPermission: ["MOVE_MEMBERS"],
  authorPermission: ["MOVE_MEMBERS"],
  ownerOnly: false,
  run: async (client, message, args) => {
    try {
      // جلب الأعضاء والبوتات في الرومات الصوتية
      const voiceChannels = message.guild.channels.cache.filter((ch) => ch.type === "GUILD_VOICE");
      const bots = [];
      const users = [];

      voiceChannels.forEach((channel) => {
        channel.members.forEach((member) => {
          if (member.user.bot) {
            bots.push(member.user.tag);
          } else {
            users.push(member.user.tag);
          }
        });
      });

      // إنشاء الرسالة
      let messageContent = "";

      if (users.length > 0) {
        messageContent += `👤 **الأعضاء في الرومات الصوتية:**\n${users.join(", ")}\n\n`;
      }

      if (bots.length > 0) {
        messageContent += `🤖 **البوتات في الرومات الصوتية:**\n${bots.join(", ")}\n\n`;
      }

      // إذا لم يكن هناك أعضاء أو بوتات في الرومات الصوتية
      if (!messageContent) {
        return message.channel.send("❌ **لا يوجد أي عضو أو بوت في الرومات الصوتية.**");
      }

      // إرسال الرسالة باستخدام Embed
      const embed = new MessageEmbed()
        .setTitle("🎙️ الأعضاء في الرومات الصوتية")
        .setDescription(messageContent)
        .setThumbnail(message.guild.iconURL({ dynamic: true, size: 2048 }))
        .setColor("AQUA");

      message.channel.send({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      message.channel.send("❌ **حدث خطأ أثناء محاولة عرض الأعضاء في الرومات الصوتية.**");
    }
  },
};
