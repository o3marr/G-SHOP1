const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "tax", // يجب أن يحتوي الملف على خاصية 'name'
  aliases: ["ضريبة", "taxcalc"], // يمكن إضافة أسماء مستعارة
  description: "حساب الضريبة الخاصة بـ ProBot مع دعم الحروف k/m/b",
  usage: ["!tax <amount>"], // استخدام الأمر
  category: "general", // فئة الأمر
  botPermission: ["SEND_MESSAGES"], // أذونات البوت
  authorPermission: ["SEND_MESSAGES"], // أذونات المستخدم
  cooldowns: [5], // التبريد بين الأوامر
  ownerOnly: false, // إذا كان خاصًا بالمالك فقط
  execute: async (client, message, args) => { // استخدام execute بدلاً من run
    try {
      // التحقق من إدخال المبلغ
      if (!args[0]) {
        return message.channel.send("❌ **الرجاء إدخال المبلغ بشكل صحيح.** \n`!tax <amount>`");
      }

      // تحويل الحروف الاختصارية (k, m, b) إلى أرقام
      const parseAmount = (input) => {
        const value = input.toLowerCase();
        if (value.endsWith("k")) return parseFloat(value) * 1000; // 1k = 1000
        if (value.endsWith("m")) return parseFloat(value) * 1000000; // 1m = 1,000,000
        if (value.endsWith("b")) return parseFloat(value) * 1000000000; // 1b = 1,000,000,000
        return parseFloat(value); // إذا لم تكن هناك اختصارات
      };

      const amount = parseAmount(args[0]); // تحويل المبلغ
      if (isNaN(amount) || amount <= 0) {
        return message.channel.send("❌ **الرجاء إدخال مبلغ صحيح.** \nمثال: `!tax 1k` أو `!tax 1000`");
      }

      const taxRate = 20 / 19; // معدل الضريبة في ProBot
      const totalAmount = Math.ceil(amount * taxRate); // المبلغ الإجمالي مع الضريبة
      const taxAmount = totalAmount - amount; // قيمة الضريبة نفسها

      // إنشاء رسالة Embed
      const embed = new EmbedBuilder()
        .setTitle("🧾 **حساب الضريبة - ProBot**")
        .setColor("#00FF00") // اللون الاخضر
        .addFields(
          { name: "💰 **المبلغ الأساسي:**", value: `${amount} ` },
          { name: "🔢 **الضريبة:**", value: `${taxAmount} ` },
          { name: "✅ **المبلغ المطلوب إرساله:**", value: `${totalAmount} ` }
        )
        .setFooter({ text: `طلب بواسطة: ${message.author.tag}`, iconURL: message.author.displayAvatarURL() })
        .setTimestamp();

      // إرسال الرسالة
      await message.reply({ embeds: [embed] });
    } catch (err) {
      console.error(err);
      message.channel.send("❌ **حدث خطأ أثناء حساب الضريبة.**");
    }
  },
};
