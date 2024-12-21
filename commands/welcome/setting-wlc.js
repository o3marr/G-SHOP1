module.exports = {
  name: 'setting-wlc',
  description: 'عرض إعدادات الترحيب',
  execute(message, args) {
    // افتراضياً، إذا كانت هناك إعدادات معينة مخزنة في قاعدة بيانات أو ملف (مثل قناة الترحيب، صورة الترحيب، الرسالة الترحيبية)
    // يمكن استبدال القيم هنا مع القيم الفعلية التي تم تخزينها.
    
    // مثال على البيانات المخزنة:
    const welcomeChannel = 'general'; // قناة الترحيب
    const welcomeMessage = 'أهلاً وسهلاً بك في السيرفر!'; // رسالة الترحيب
    const welcomeImage = 'https://example.com/welcome-image.jpg'; // صورة الترحيب

    const embed = new MessageEmbed()
      .setColor('GREEN')
      .setTitle('إعدادات الترحيب')
      .setDescription(`
        **القناة المخصصة للترحيب**: ${welcomeChannel}
        **الرسالة الترحيبية**: ${welcomeMessage}
        **صورة الترحيب**: [رابط الصورة](${welcomeImage})
      `);

    message.channel.send({ embeds: [embed] });
  },
};
