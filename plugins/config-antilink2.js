let linkRegex = /https:/i

export async function before(m, { isAdmin, isBotAdmin,text }) {

if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
if (chat.antiLink2 && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
const linkThisGroup2 = `https://www.youtube.com/`
const linkThisGroup3 = `https://youtu.be/`
if (m.text.includes(linkThisGroup)) return !0
if (m.text.includes(linkThisGroup2)) return !0
if (m.text.includes(linkThisGroup3)) return !0
}
await conn.reply(m.chat, `${error_emoji} *Link detected!*\n\n*${await this.getName(m.sender)} you broke the rules, you will be eliminated*`, m, fake, )
if (!isBotAdmin) return conn.reply(m.chat, `${error_emoji} *I'm not an admin, I can't remove intruders*`, m, fake, )
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantUpdate(m.chat, [m.sender],'remove')
} else if (!bot.restrict) return conn.reply(m.chat, `*This feature is disabled!*`, m, fake, )
}
return !0

}
