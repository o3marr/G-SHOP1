const Discord = require("discord.js")
const ms = require('ms')
const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "timeout",
  aliases: [""],
  description: "timeout a member",
  usage: ["!timeout @user"],
  category: "admin",
  botPermission: ["MODERATE_MEMBERS"],
  authorPermission: ["MODERATE_MEMBERS"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {
    
        var _0xcf98=["\x66\x69\x72\x73\x74","\x6D\x65\x6D\x62\x65\x72\x73","\x6D\x65\x6E\x74\x69\x6F\x6E\x73","\x67\x65\x74","\x63\x61\x63\x68\x65","\x67\x75\x69\x6C\x64","\x69\x20\x63\x6F\x75\x6C\x64\x6E\x27\x74\x20\x72\x65\x70\x6C\x79\x20\x74\x6F\x20\x74\x68\x65\x20\x6D\x65\x73\x73\x61\x67\x65\x3A\x20","\x6D\x65\x73\x73\x61\x67\x65","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x2A\x2A\x50\x6C\x65\x61\x73\x65\x20\x6D\x65\x6E\x74\x69\x6F\x6E\x20\x6D\x65\x6D\x62\x65\x72\x20\x6F\x72\x20\x69\x64\x2A\x2A","\x72\x65\x70\x6C\x79","\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x2A\x2A\x49\x20\x63\x61\x6E\x27\x74\x20\x66\x69\x6E\x64\x20\x74\x68\x69\x73\x20\x6D\x65\x6D\x62\x65\x72\x2A\x2A","\x69\x64","\x61\x75\x74\x68\x6F\x72","\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x2A\x2A\x59\x6F\x75\x20\x63\x61\x6E\x27\x74\x20\x75\x73\x65\x20\x74\x68\x69\x73\x20\x6F\x6E\x20\x79\x6F\x75\x72\x20\x73\x65\x6C\x66\x2A\x2A","\x70\x6F\x73\x69\x74\x69\x6F\x6E","\x68\x69\x67\x68\x65\x73\x74","\x72\x6F\x6C\x65\x73","\x6D\x65\x6D\x62\x65\x72","\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x2A\x2A\x59\x6F\x75\x20\x63\x61\x6E\x27\x74\x20\x74\x69\x6D\x65\x6F\x75\x74\x20","\x75\x73\x65\x72\x6E\x61\x6D\x65","\x75\x73\x65\x72","\x20\x68\x61\x76\x65\x20\x68\x69\x67\x68\x65\x72\x20\x72\x6F\x6C\x65\x20\x74\x68\x61\x6E\x20\x79\x6F\x75\x2A\x2A","\x3A\x78\x3A\x20\x2A\x2A\x50\x6C\x65\x61\x73\x65\x20\x70\x72\x6F\x76\x69\x64\x65\x20\x61\x20\x76\x61\x6C\x69\x64\x20\x74\x69\x6D\x65\x2E\x2A\x2A","\x73","\x65\x6E\x64\x73\x57\x69\x74\x68","\x6D","\x68","\x64","\x77","\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x2A\x2A\x20\x54\x68\x65\x20\x74\x69\x6D\x65\x20\x6D\x75\x73\x74\x20\x65\x6E\x64\x73\x20\x77\x69\x74\x68\x20\x5C\x60\x73\x20\x2F\x20\x6D\x20\x2F\x20\x68\x20\x2F\x20\x64\x20\x2F\x20\x77\x5C\x60\x20\x2A\x2A","\x3A\x77\x68\x69\x74\x65\x5F\x63\x68\x65\x63\x6B\x5F\x6D\x61\x72\x6B\x3A\x20\x2A\x2A\x44\x6F\x6E\x65\x20\x74\x69\x6D\x65\x6F\x75\x74\x20","\x20\x66\x6F\x72\x20","\x2A\x2A","\x74\x68\x65\x6E","\x64\x6F\x6E\x65\x20\x62\x79\x3A\x20","\x6E\x69\x63\x6B\x6E\x61\x6D\x65","\x20\x2C\x20","","\x74\x69\x6D\x65\x6F\x75\x74"];let member=message[_0xcf98[2]][_0xcf98[1]][_0xcf98[0]]()|| message[_0xcf98[5]][_0xcf98[1]][_0xcf98[4]][_0xcf98[3]](args[0]);if(!args[0]){return message[_0xcf98[11]]({content:`${_0xcf98[10]}`})[_0xcf98[9]]((_0x738ex2)=>{console[_0xcf98[8]](`${_0xcf98[6]}`+ _0x738ex2[_0xcf98[7]])})};if(!member){return message[_0xcf98[11]]({content:`${_0xcf98[12]}`})[_0xcf98[9]]((_0x738ex2)=>{console[_0xcf98[8]](`${_0xcf98[6]}`+ _0x738ex2[_0xcf98[7]])})};if(member[_0xcf98[13]]=== message[_0xcf98[14]][_0xcf98[13]]){return message[_0xcf98[11]]({content:`${_0xcf98[15]}`})[_0xcf98[9]]((_0x738ex2)=>{console[_0xcf98[8]](`${_0xcf98[6]}`+ _0x738ex2[_0xcf98[7]])})};if(message[_0xcf98[19]][_0xcf98[18]][_0xcf98[17]][_0xcf98[16]]< member[_0xcf98[18]][_0xcf98[17]][_0xcf98[16]]){return message[_0xcf98[11]]({content:`${_0xcf98[20]}${member[_0xcf98[22]][_0xcf98[21]]}${_0xcf98[23]}`})[_0xcf98[9]]((_0x738ex2)=>{console[_0xcf98[8]](`${_0xcf98[6]}`+ _0x738ex2[_0xcf98[7]])})};if(!args[1]){return message[_0xcf98[11]]({content:`${_0xcf98[24]}`})};if(!args[1][_0xcf98[26]](_0xcf98[25])){if(!args[1][_0xcf98[26]](_0xcf98[27])){if(!args[1][_0xcf98[26]](_0xcf98[28])){if(!args[1][_0xcf98[26]](_0xcf98[29])){if(!args[1][_0xcf98[26]](_0xcf98[30])){return message[_0xcf98[11]]({content:`${_0xcf98[31]}`})}}}}};member[_0xcf98[40]](ms(args[1]),`${_0xcf98[36]}${message[_0xcf98[19]][_0xcf98[37]]}${_0xcf98[38]}${message[_0xcf98[14]][_0xcf98[13]]}${_0xcf98[39]}`)[_0xcf98[35]](()=>{message[_0xcf98[11]]({content:`${_0xcf98[32]}${member[_0xcf98[22]][_0xcf98[21]]}${_0xcf98[33]}${args[1]}${_0xcf98[34]}`})})
  }
}