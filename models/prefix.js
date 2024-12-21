const mongoose = require('mongoose');

// إنشاء Schema لتخزين البادئة (Prefix)
const prefixSchema = new mongoose.Schema({
  guildId: { 
    type: String, 
    required: true, 
    unique: true  // تأكد من أن كل سيرفر له بادئة واحدة فقط
  },
  prefix: { 
    type: String, 
    required: true, 
    default: '!'  // البادئة الافتراضية ستكون "!"
  }
});

// إنشاء الـ Model باستخدام الـ Schema الذي تم إنشاؤه
const Prefix = mongoose.model('Prefix', prefixSchema);

// تصدير الـ Model لاستخدامه في الملفات الأخرى
module.exports = Prefix;
