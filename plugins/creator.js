import fs from 'fs'
function handler(m, { conn }) {
let text = `
*πΎπ€π£π©πππ©π€* 
*Wa.me/593962681710 (CREADOR)*
*https://instagram.com/asunabot*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'πΌπ¨πͺπ£ππ½π€π© | πΌπ¨πͺπ£π π πππ§ππ©π€',
body: 'ππ«ππππ¨π«π | ππ«πππ­π¨π«',         
previewType: 0, thumbnail: fs.readFileSync("./media/Asuna.jpg"),
sourceUrl: `https://wa.me/593962681710`}}})
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueΓ±o|dueΓ±a|propietaria|dueΓ±o|creadora|creador)$/i
export default handler
