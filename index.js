const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');
const config = require('./config'); // استيراد البريفكس من config.js

// إنشاء البوت
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// تحميل الأوامر
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');

// دالة لتحميل الأوامر من المجلدات الفرعية
const loadCommands = (dir) => {
  const commandFiles = fs.readdirSync(dir).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const filePath = path.join(dir, file);
    const command = require(filePath);
    if (command.name && (typeof command.execute === 'function' || typeof command.run === 'function')) {
      client.commands.set(command.name, command);
    } else {
      console.warn(`⚠️ لا يحتوي الملف ${file} على خاصية 'name' أو دالة 'execute' أو 'run'.`);
    }
  }

  // تحميل الأوامر من المجلدات الفرعية
  const subDirs = fs.readdirSync(dir).filter(subDir => fs.statSync(path.join(dir, subDir)).isDirectory());
  for (const subDir of subDirs) {
    loadCommands(path.join(dir, subDir));
  }
};

// تحميل الأوامر من المجلد الرئيسي والمجلدات الفرعية
loadCommands(commandsPath);

// عند تشغيل البوت
client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

// الاتصال بـ MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ متصل بـ MongoDB'))
  .catch((err) => console.error('❌ خطأ في الاتصال بـ MongoDB:', err));

// حدث التفاعل مع الأوامر
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(config.prefix)) {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);
    if (!command) return;

    try {
      // استخدام الدالة المتاحة (execute أو run)
      if (command.execute) {
        await command.execute(client, message, args); // تنفيذ الأمر باستخدام execute
      } else if (command.run) {
        await command.run(client, message, args); // تنفيذ الأمر باستخدام run
      }
    } catch (error) {
      console.error(error);
      message.reply('❌ حدث خطأ أثناء تنفيذ الأمر.');
    }
  }
});

// تسجيل الدخول باستخدام التوكن من ملف .env
client.login(process.env.TOKEN);
