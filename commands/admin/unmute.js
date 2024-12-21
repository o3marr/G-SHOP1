const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "unmute",
  aliases: ["فك الاسكات"],
  description: "لإلغاء الإسكات عن شخص في الدردشة",
  usage: ["!unmute @user"],
  category: "admin",
  botPermission: ["MANAGE_ROLES"],
  authorPermission: ["MANAGE_ROLES"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args) => {

    // التأكد من وجود عضو مذكور
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    // إذا لم يتم ذكر عضو
    if (!args[0]) {
      return message.reply("يجب ذكر شخص لإلغاء الإسكات عنه!");
    }

    // إذا كان العضو غير موجود
    if (!member) {
      return message.reply("لم أتمكن من العثور على هذا العضو!");
    }

    // إذا كان العضو هو المرسل نفسه
    if (member.id === message.author.id) {
      return message.reply("لا يمكنك فك الإسكات عن نفسك!");
    }

    // إذا كان العضو هو البوت
    if (member.id === client.user.id) {
      return message.reply("لا يمكنك فك الإسكات عن البوت!");
    }

    // إذا كان المرسل لا يملك صلاحية أعلى من العضو المذكور
    if (message.member.roles.highest.position <= member.roles.highest.position) {
      return message.reply("لا يمكنك فك الإسكات عن هذا الشخص لأنه لديه نفس الصلاحيات أو أعلى.");
    }

    // البحث عن دور الإسكات
    let muteRole = message.guild.roles.cache.find(role => role.name === "Muted");
    if (!muteRole) {
      return message.reply("لم أتمكن من العثور على دور الإسكات!");
    }

    // إذا لم يكن العضو لديه دور الإسكات
    if (!member.roles.cache.has(muteRole.id)) {
      return message.reply(`${member.user.tag} ليس مُسكَتًا!`);
    }

    // إزالة دور الإسكات
    await member.roles.remove(muteRole);
    message.reply(`${member.user.tag} تم فك الإسكات عنه بنجاح!`);
  }
};
