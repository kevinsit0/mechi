import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `ππππΌ ππππππππππΏπ`
  
let vn = './media/dylan1.mp3'
conn.sendFile(m.chat, vn, 'dylan1.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /anadieleimporta|a nadie le importa/i
handler.command = new RegExp

handler.fail = null
handler.exp = 100
handler.group = true
export default handler
