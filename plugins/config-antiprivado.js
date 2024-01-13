export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {

if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
if (m.text.includes('STONE') || m.text.includes('PAPER') || m.text.includes('SCISSOR') || m.text.includes('state') || m.text.includes('verify') || m.text.includes('creator') || m.text.includes('temporalbot') || m.text.includes('groups') || m. text.includes('installbot') || m.text.includes('terms') || m.text.includes('bots') || m.text.includes('deletebot') || m.text. includes('delete session') || m.text.includes('serbot') || m.text.includes('verify') || m.text.includes('register') || m.text.includes( 'register') || m.text.includes('reg') || m.text.includes('reg1') || m.text.includes('name') || m.text.includes('name ') || m.text.includes('name2') || m.text.includes('name2') || m.text.includes('age') || m.text.includes('age') || m.text.includes('age2') || m.text.includes('age2') || m.text.includes('gender') || m.text.includes('gender') || m.text.includes('gender') || m.text.includes('identity') || m.text.includes('hobby') || m.text.includes('hobby') || m. text.includes('identify') || m.text.includes('finish') || m.text.includes('pas2') || m.text.includes('pas3') || m.text.includes('pas4') || m.text.includes('pas5') || m.text.includes('recordC') || m.text.includes('deletesession') || m.text.includes('recordR') || m.text.includes('jadibot')) return !0

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[this.user.jid] || {}

if (bot.antiPrivate && !isOwner && !isROwner) {
await m.reply(`🎌 *Hello* @${who.replace(/@.+/, '')}, *you cannot use this bot in private chat*\n\nJoin the official Group to use the bot \n${nn}`, false, { mentions: [who] })
await conn.groupParticipantUpdate(m.chat, [m.sender], 'banchat')

return !1
}}
