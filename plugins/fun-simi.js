import fetch from 'node-fetch'
let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.simi && !chat.isBanned && !m.isGroup) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let res = await fetch(global.API('rey', '/api/fun/simsimi.net/v2/?', { text: encodeURIComponent(m.text) }, 'apikey'))
        if (!res.ok) return m.reply(eror)
        let json = await res.json()
        if (json.result == 'Aku tidak mengerti apa yang kamu katakan.Tolong ajari aku.') await m.reply('siminya blom diajarin, ajarin di https://simsimi.com/teach')
        else await m.reply(`*Simi:* ${json.result}`)
        return !0
    }
    return true
}
handler.help = ['asuna']
handler.tags = ['fun']
handler.command = ['asuna', 'bot', 'simi', 'simsimi', 'alexa', 'bixby', 'cortana', 'siri', 'okgoogle']
export default handler
