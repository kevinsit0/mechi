import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `ππππΌ ππππππππππΏπ`
  
let vn = './media/Te-amo.mp3'
conn.sendFile(m.chat, vn, 'Te-amo.mp3', null, m, true, {
type: 'audioMessage',
ptt: true 
})
}
handler.customPrefix = /te amo|teamo/i
handler.command = new RegExp
handler.fail = null
handler.group = true
export default handler
