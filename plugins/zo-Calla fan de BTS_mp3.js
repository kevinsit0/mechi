import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
db.data.users[m.sender].exp += 10
  
let vn = './media/Calla Fan de BTS.mp3'
conn.sendFile(m.chat, vn, 'Calla Fan de BTS.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Calla Fan de bts/i 
handler.command = new RegExp
export default handler
