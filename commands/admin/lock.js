const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "lock", // اسم الأمر
  aliases: ["قفل", "l"], // أسماء الأوامر الاحتياطية
  description: "قفل القناة", // وصف الأمر
  usage: ["!lock"], // كيفية استخدام الأمر
  category: "admin", // تصنيف الأمر
  botPermission: ["MANAGE_CHANNELS"], // صلاحيات البوت المطلوبة
  authorPermission: ["MANAGE_CHANNELS"], // صلاحيات المستخدم المطلوبة
  cooldowns: [], // الوقت بين الأوامر
  ownerOnly: false, // هل الأمر مخصص للمالك فقط
  run: async (client, message, args, config) => {
    try {
      // التأكد من أن المستخدم لديه صلاحيات لتغيير الأذونات في القناة
      if (!message.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) {
        return message.reply("أنت لا تمتلك الصلاحيات اللازمة لإغلاق القناة.");
      }

      // الحصول على القناة الحالية
      const channel = message.channel;

      // تغيير الأذونات لقفل القناة بحيث لا يستطيع الأعضاء إرسال الرسائل
      await channel.permissionOverwrites.edit(message.guild.id, {
        SEND_MESSAGES: false, // منع إرسال الرسائل
      });

      // إرسال رد يشير إلى أن القناة تم قفلها
      const embed = new EmbedBuilder()
        .setColor("#FF0000")
        .setTitle("قفل القناة")
        .setDescription(`تم قفل القناة ${channel.name} بنجاح.`);

      message.reply({ embeds: [embed] });
    } catch (error) {
      console.error("خطأ في قفل القناة:", error);
      message.reply("حدث خطأ أثناء محاولة قفل القناة.");
    }
  },
};
