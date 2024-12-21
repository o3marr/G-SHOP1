module.exports = {
  name: 'help',
  description: 'عرض قائمة المساعدة',
  execute(message, args) {
    const prefix = '!'; // يمكنك تعديل البادئة حسب الحاجة

    const helpMessage = `
**قائمة الأوامر:**

> **أوامر الإدارة:**
\`${prefix}ban\` - حظر العضو من السيرفر.  
\`${prefix}unban\` - فك حظر العضو من السيرفر.  
\`${prefix}unban-all\` - فك حظر جميع الأعضاء من السيرفر.  
\`${prefix}kick\` - طرد العضو من السيرفر.  
\`${prefix}lock\` - إغلاق الشات.  
\`${prefix}unlock\` - فتح الشات.  
\`${prefix}role\` - إعطاء أو إزالة رتبة لعضو.  
\`${prefix}clear\` - مسح رسائل الشات.  
\`${prefix}listbans\` - إظهار جميع الأعضاء المحظورين.  
\`${prefix}hide\` - إخفاء الشات.  
\`${prefix}show\` - إظهار الشات.  
\`${prefix}mute\` - إسكات العضو في الشات.  
\`${prefix}unmute\` - فك إسكات العضو في الشات.  
\`${prefix}timeout\` - إعطاء العضو "تايم أوت".  
\`${prefix}hide-all\` - إخفاء جميع الرومات.  
\`${prefix}vkick\` - طرد عضو من الروم الصوتي.  
\`${prefix}role-all\` - إعطاء رول للجميع.  
\`${prefix}setnick\` - تغيير اسم أحد الأعضاء في السيرفر.  
\`${prefix}move\` - سحب الأعضاء إلى الروم.  
\`${prefix}show-all\` - إظهار جميع الرومات.  
\`${prefix}rooms\` - إظهار الأعضاء في الرومات الصوتية.  
\`${prefix}vmute\` - إعطاء ميوت صوتي.  
\`${prefix}vunmute\` - فك الميوت الصوتي.  
\`${prefix}check\` - إظهار الأعضاء الحاصلين على رتبة معينة.  
\`${prefix}role-info\` - عرض معلومات الرتبة.  

> **أوامر صاحب البوت:**
\`${prefix}setavatar\` - تغيير صورة البوت.  
\`${prefix}setprefix\` - تغيير بادئة البوت (Prefix).  
\`${prefix}setname\` - تغيير اسم البوت.  
\`${prefix}setgame\` - تغيير حالة البوت.  
\`${prefix}embed\` - إرسال رسالة على شكل Embed.  
\`${prefix}say\` - إرسال رسالة في شات معين.  
\`${prefix}image\` - إرسال صورة في الشات.  

> **أوامر الحماية:**
\`${prefix}anti-bot\` - تفعيل/إلغاء حماية البوتات.  
\`${prefix}anti-link\` - تفعيل/إلغاء حماية الروابط.  
\`${prefix}anti-word\` - تفعيل/إلغاء حماية الألفاظ السيئة.  
\`${prefix}show-bot\` - عرض قائمة بوتات السيرفر.  

> **أوامر الترحيب:**
\`${prefix}channel-wlc\` - تحديد شات الترحيب.  
\`${prefix}image-wlc\` - تحديد صورة الترحيب.  
\`${prefix}message-wlc\` - تحديد رسالة الترحيب.  
\`${prefix}toggle-wlc\` - تشغيل/إيقاف الترحيب.  
\`${prefix}setting wlc\` - عرض إعدادات الترحيب.  
\`${prefix}test\` - تجربة إعدادات الترحيب.   
...
`;

    message.author.send(helpMessage) // إرسال الرسالة للمستخدم
    .then(() => message.react('✅'))  
    .then(() => message.reply('✅ تم إرسال قائمة الأوامر إلى الخاصة بك'))  // إضافة رد فعل بعد إرسال الرسالة
      .catch(() => message.reply('❌ لا أستطيع إرسال الرسالة الخاصة.'));
  },
};
