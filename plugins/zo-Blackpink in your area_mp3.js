import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `ππππΌ ππππππππππΏπ`
  
let vn = './media/Blackpink in your area.mp3'
conn.sendFile(m.chat, vn, 'Blackpink in your area.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Blackpink in your area|blackpink in your area|in your area|In your area/i 
handler.command = new RegExp
handler.group = true
export default handler
