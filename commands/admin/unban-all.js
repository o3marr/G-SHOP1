const { MessageEmbed } = require("discord.js");
const { prefix } = require("../../config.js");

module.exports = {
  name: "unban-all",
  aliases: ["unban all"],
  description: "فك الحظر عن الجميع في السيرفر.",
  usage: ["!unban all"],
  category: "admin",
  botPermission: ["BAN_MEMBERS"],
  authorPermission: ["BAN_MEMBERS"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args) => {
    try {
      // جلب قائمة الأعضاء المحظورين
      const bans = await message.guild.bans.fetch();

      // إذا لم يكن هناك أي أعضاء محظورين
      if (!bans.size) {
        return message.channel.send("🙄 **هذا السيرفر لا يحتوي على أي أعضاء محظورين.**");
      }

      // فك الحظر عن كل عضو محظور
      bans.forEach(async (ban) => {
        try {
          await message.guild.members.unban(ban.user.id);
          console.log(`تم فك الحظر عن ${ban.user.tag}`);
        } catch (err) {
          console.error(`خطأ أثناء فك الحظر عن ${ban.user.tag}:`, err);
        }
      });

      // إرسال رسالة نجاح بعد فك الحظر
      const successMessage = await message.channel.send("✅ **جاري فك الحظر عن الجميع...**");
      setTimeout(() => {
        successMessage.edit(`✅ **تم فك الحظر عن ${bans.size} عضو(أعضاء).**`);
      }, 4000);
    } catch (error) {
      console.error(error);
      message.channel.send("❌ **حدث خطأ أثناء محاولة فك الحظر.**");
    }
  },
};
