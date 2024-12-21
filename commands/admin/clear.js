const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "clear",
    aliases: ["مسح"],
    description: "مسح عدد معين من الرسائل في القناة الحالية.",
    usage: ["!clear 10"],
    category: "admin",
    botPermission: ["MANAGE_MESSAGES"],
    authorPermission: ["MANAGE_MESSAGES"],
    cooldowns: [],
    ownerOnly: false,
    run: async (client, message, args) => {
        // التحقق من صلاحيات المستخدم والبوت
        const userHasPermission = message.member.permissions.has("MANAGE_MESSAGES");
        const botHasPermission = message.guild.me.permissions.has("MANAGE_MESSAGES");

        if (!userHasPermission) {
            return message.reply({ content: ":x: **ليس لديك صلاحية لاستخدام هذا الأمر.**", ephemeral: true });
        }
        if (!botHasPermission) {
            return message.reply({ content: ":x: **ليس لدي صلاحية لإدارة الرسائل. تأكد من إعطائي الصلاحية المناسبة.**", ephemeral: true });
        }

        // التحقق من العدد المدخل
        const amount = parseInt(args[0]) || 100; // القيمة الافتراضية 100
        if (isNaN(amount)) {
            return message.reply({ content: "الرجاء إدخال رقم صحيح." });
        }
        if (amount > 100) {
            return message.reply({ content: ":rolling_eyes: **لا يمكن حذف أكثر من 100 رسالة دفعة واحدة.**" });
        }
        if (amount < 2) {
            return message.reply({ content: ":rolling_eyes: **يجب حذف على الأقل رسالتين.**" });
        }

        // حذف الرسائل
        try {
            const fetchedMessages = await message.channel.messages.fetch({ limit: amount });
            const deletableMessages = fetchedMessages.filter(msg => Date.now() - msg.createdTimestamp <= 14 * 24 * 60 * 60 * 1000);

            await message.channel.bulkDelete(deletableMessages, true);
            const replyMessage = await message.channel.send(`:white_check_mark: **تم حذف ${deletableMessages.size} رسالة بنجاح.**`);

            // حذف رسالة التأكيد بعد فترة قصيرة
            setTimeout(() => replyMessage.delete(), 6000);
        } catch (error) {
            console.error("خطأ أثناء حذف الرسائل:", error);
            message.reply({ content: ":x: **حدث خطأ أثناء محاولة حذف الرسائل.**" });
        }
    }
};
