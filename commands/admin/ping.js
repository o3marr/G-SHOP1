const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  aliases: ["بنق"],
  description: "عرض سرعة استجابة البوت (Ping)",
  usage: ["!ping"],
  category: "general",
  botPermission: ["SEND_MESSAGES"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [5],
  ownerOnly: false,
  run: async (client, message, args) => {
    try {
      // حساب وقت الاستجابة
      const msg = await message.channel.send("🏓 **Pinging...**");
      const latency = msg.createdTimestamp - message.createdTimestamp; // فرق الوقت
      const apiLatency = Math.round(client.ws.ping); // وقت استجابة Discord API

      // إنشاء الرسالة المدمجة (Embed)
      const embed = new MessageEmbed()
        .setTitle("🏓 **Pong!**")
        .setColor("#FF0000") // اللون الأحمر
        .addField("📶 **Latency:**", `${latency}ms`, true)
        .addField("💻 **API Latency:**", `${apiLatency}ms`, true)
        .setFooter(`طلب بواسطة: ${message.author.tag}`, message.author.displayAvatarURL())
        .setTimestamp();

      // تعديل الرسالة الأولى بالـ Embed
      await msg.edit({ content: " ", embeds: [embed] });
    } catch (err) {
      console.error(err);
      message.channel.send("❌ **حدث خطأ أثناء حساب سرعة الاستجابة.**");
    }
  },
};
