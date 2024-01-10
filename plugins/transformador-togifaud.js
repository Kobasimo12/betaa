var handler = async (m, {conn, usedPrefix, command}) => {

if (!m.quoted) throw `*⚠️ REPLY TO A VIDEO YOU WANT TO CONVERT TO GIF WITH AUDIO*`
const q = m.quoted || m
const mime = (q.msg || q).mimetype || ''
if (!/(mp4)/.test(mime)) throw `*⚠️ MIMICRY ${mime} NOT SUPPORTED*`
m.reply('*🚀 C H A R G I N G*')
const media = await q.download()
conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: '*🚀🚀*'}, {quoted: m})

}
handler.help = ['togifaud']
handler.tags = ['transformer']
handler.command = ['togifaud']

handler.limit = true
 
export default handler

