import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `ππππΌ ππππππππππΏπ`
  
let vn = './media/Murio.m4a'
conn.sendFile(m.chat, vn, 'Murio.m4a', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /MuriΓ³ el grupo|Murio el grupo|murio el grupo|muriΓ³ el grupo|Grupo muerto|grupo muerto/
handler.command = new RegExp
handler.group = true
export default handler
