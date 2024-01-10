import { toPTT } from '../lib/converter.js'

var handler = async (m, { conn, usedPrefix, command }) => {

let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `*⚠️ RESPOND TO THE VIDEO OR AUDIO YOU WANT TO CONVERT TO VOICE NOTE*`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw '*⚠️ AN ERROR OCCURRED, TRY AGAIN*'
if (!media && !/audio/.test(mime)) throw '*⚠️ AN ERROR OCCURRED, TRY AGAIN*'
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw '*⚠️ AN ERROR OCCURRED, TRY AGAIN*'
if (!audio.data && !/video/.test(mime)) throw '*⚠️ AN ERROR OCCURRED, TRY AGAIN*'
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' })

}
handler.help = ['tovn']
handler.tags = ['transformer']
handler.command = /^to(vn|(ptt)?)$/i

handler.limit = true

export default handler

