import { createHash } from 'crypto'
let handler = async function (m, { text, usedPrefix }) {
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let user = global.db.data.users[m.sender]
if (user.registered === true) throw `ðð¼ ðððð¼ð ðððððððð¼ð¿ð(ð¼)!!\nðð ðððððð ð¼ðððð¼ð ðð ðððððððð ððð ðððð ð¾ððð¼ðð¿ð\n*${usedPrefix}unreg numero de serie*\n\nðð ðð ððð¾ðððð¿ð¼ ðð ðððððð ð¿ð ððððð ððð ðððð ð¾ððð¼ðð¿ð\n*${usedPrefix}myns*`
let name = conn.getName(m.sender)
//let age = Math.floor(Math.random() * 40)
let age = `${pickRandom(['10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'])}`
age = parseInt(age)
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex')
global.db.data.users[m.sender].exp += 350
let caption = `â­âââ[ *ððððððð¾ð¼ð* ]âââââ¬£
â *NOMBRE* 
â ${name}
ââââââââââââââââââ
â *EDAD* 
â *${age} aÃ±os*
ââââââââââââââââââ
â *BONO* 
â *$350 XP*
â°âââââââââââââââââââ¬£`
//let author = global.author
await conn.sendButton(m.chat, caption, `ðð ðððððð ð¿ð ððððð ðð ððððððð¼ ðð ð¾ð¼ðð ððð ðððððð¼ ð½ðððð¼ð ðð ðððððððð\nððððððð\n${usedPrefix}unreg numero de serie\n${watermark}`, [['ð¼ðð¤ð§ð ðð¨ð©ð¤ð® ððð§ððððððð¤(ð)!! â', '/perfil']], m)
await m.reply(`${sn}`) 

}
handler.help = ['verify']
handler.tags = ['xp']
handler.command = /^(verify|register|verificar|registrar|verificado|verificada)$/i
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
