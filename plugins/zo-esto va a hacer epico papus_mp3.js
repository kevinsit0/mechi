import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `ππππΌ ππππππππππΏπ`
  
let vn = './media/esto va a hacer epico papus.mp3'
conn.sendFile(m.chat, vn, 'esto va a hacer epico papus.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Esto va ser Γ©pico papus|esto va ser Γ©pico papus|Esto va ser|Esto va a hacer|esto va acer|Esto va aser|esto va ser|esto va a hacer/i 
handler.command = new RegExp
handler.group = true
export default handler
