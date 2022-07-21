import PhoneNumber from 'awesome-phonenumber'
let handler = async(m, { conn }) => {
    let nomor = owner[0][0]
    let number = nomor + '@s.whatsapp.net'
    let biz = await conn.getBusinessProfile(number)

    let vcard = `
BEGIN:VCARD
VERSION:3.0
N:;Axel;;;
FN:Axel
TEL;type=CELL;type=VOICE;waid=${nomor}:${PhoneNumber('+' + nomor).getNumber('international')}
X-WA-BIZ-NAME:Axel
X-WA-BIZ-DESCRIPTION:${biz.description.replace(/\n/g, '\\n')}
END:VCARD
    `.trim()
    let kont = await conn.sendMessage(m.chat, { contacts: { displayName: 'Axel', contacts: [{vcard}]}}, { quoted: m})
    conn.reply(m.chat, kont)
}
handler.help = ['owner', 'creador']
handler.tags = ['info']

handler.command = /^(owner|creador)$/i

export default handler
