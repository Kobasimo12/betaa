let handler = async (m, { conn, isAdmin }) => {  
if (m.fromMe) return
if (isAdmin) throw '*[ 🐼 ] ℍ𝕆𝕃𝔸 ℂℝ𝔼𝔸𝔻𝕆ℝ 𝕌𝕊𝕋𝔼𝔻 𝕐𝔸 𝕋𝕀𝔼ℕ𝔼 𝔸𝔻𝕄𝕀ℕ 𝔼ℕ 𝔼𝕊𝕋𝔼 𝔾ℝ𝕌ℙ𝕆!*'
try {  
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
} catch {
await m.reply('*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙳𝙰𝚁𝙻𝙴 𝙰𝙳𝙼𝙸𝙽*')}}
handler.tags = ['owner']
handler.command = /^autoadmin$/i
handler.rowner = true
handler.group = true
handler.botAdmin = true
export default handler
