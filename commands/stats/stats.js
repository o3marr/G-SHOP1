const Stats = require('../../models/Stats'); // استيراد الموديل

module.exports = {
    name: 'stats', // اسم الأمر
    description: 'عرض إحصائيات المستخدم', // وصف الأمر
    async execute(interaction) {
        // البحث عن المستخدم في قاعدة البيانات
        let userStats = await Stats.findOne({ userId: interaction.user.id });

        if (!userStats) {
            // إذا لم يتم العثور على إحصائيات للمستخدم، إنشاء إحصائيات جديدة
            userStats = new Stats({ userId: interaction.user.id });
            await userStats.save();
        }

        // الرد على المستخدم بالإحصائيات
        await interaction.reply({
            content: `${interaction.user.tag} أرسلت ${userStats.messagesSent} رسائل في البوت.`,
            ephemeral: true
        });
    }
};
