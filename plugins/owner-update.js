import { execSync } from 'child_process'
import { reload } from '../lib/connection.js'
import fs from 'fs'
let handler = async (m, { conn, text, isROwner }) => {
  if (conn.user.jid == conn.user.jid) {
    let stdout = execSync('git remote set-url origin https://github.com/FadliDarmawan/nutella.git && git pull' + (isROwner && text ? ' ' + text : ''))
    if (isROwner) fs.readdirSync('plugins').map(v => reload('', v))
    m.reply(stdout.toString())
  }
}
handler.help = ['update']
handler.tags = ['host']
handler.command = /^update$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

export default handler