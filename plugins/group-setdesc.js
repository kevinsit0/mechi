let handler = async (m, { conn, args }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './media/Asuna.jpg' 
await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
  
//m.reply('*β La descripciΓ³n del grupo se modifico correctamente*')
conn.sendButton(m.chat, `ππ ππΌ πΎπΌππ½ππΌπΏπ ππΌ πΏπππΎππππΎπππ πΏππ πππππ.`, `πΏπππΎππππΎπππ | ${watermark}`, pp, [['πΎπͺππ£π©ππ¨ πππππππ‘ππ¨ | πΌπππ€πͺπ£π©π¨ β', `.cuentasgb`], ['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', `/menu`]], m)
}
handler.help = ['Setdesc <text>']
handler.tags = ['group','admin']
handler.command = /^setdesk|setdesc|newdesc$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
