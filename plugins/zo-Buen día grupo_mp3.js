import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `ππππΌ ππππππππππΏπ`
  
let vn = './media/Buen dΓ­a grupo.mp3'
conn.sendFile(m.chat, vn, 'Buen dΓ­a grupo.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Buen dΓ­a grupo|Buen dia grupo|π/i 
handler.command = new RegExp
handler.group = true
export default handler
