import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `ππππΌ ππππππππππΏπ`
  
let vn = './media/Ara.mp3'
conn.sendFile(m.chat, vn, 'Ara.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /ara ara/i
handler.command = new RegExp
handler.fail = null
handler.exp = 10
handler.group = true
export default handler
