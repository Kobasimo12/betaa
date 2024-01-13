let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const group = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(group)) return conn.reply(m.chat, `🎌 *Hey!! the AntiLink is active but you are admin, saved!*`, m, fake , )
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}
await conn.reply(m.chat, `${error_emoji} *Link detected!*\n\n*${await this.getName(m.sender)} you sent a prohibited link for which you will be eliminated*`, m, fake, )
if (!isBotAdmin) return conn.reply(m.chat, `${error_emoji} *I'm not an admin, I can't remove intruders*`, m, fake, )
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return conn.reply(m.chat, `*This feature is disabled!*`, m, fake, )
}
return !0

}
