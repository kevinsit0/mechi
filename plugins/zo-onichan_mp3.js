import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `ππππΌ ππππππππππΏπ`
  
let vn = './media/Onichan.mp3'
conn.sendFile(m.chat, vn, 'Onichan.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /oni-chan|onichan|o-onichan/i
handler.command = new RegExp
handler.fail = null
handler.group = true
export default handler
