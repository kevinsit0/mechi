import util from 'util'
import path from 'path'
let handler = async (m, { conn }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `ππππΌ ππππππππππΏπ`
  
let vn = './media/a.mp3'
conn.sendFile(m.chat, vn, 'a.mp3', null, m, true, { 
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Βͺ|a|A/
handler.command = /^(a|Βͺ|A?$)/
handler.group = true 
export default handler
