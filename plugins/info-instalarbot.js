import { generateWAMessageFromContent } from '@whiskeysockets/baileys'
let handler  = async (m, { conn }) => {
let texto = `
╭─────────────┈⊷
│ *INSTALACIÓN DE NEXUS BOT*
╰┬────────────┈⊷
┌┤ *REQUISITOS PARA LAS INSTALACION*
┌┤➳ _Dudas: https://wa.me/+573027866596
┌┤➳ 
┌┤➳ _1 GB de almacenamiento_
┌┤➳ 
┌┤➳ _un whatsapp inmune (secundario)_
┌┤➳ _un número virtual_
┌┤➳ _2 dispositivo o un 1 dispositivo para scanear codigo 8digitos_
╰┬────────────┈⊷
  │ *termux-setup-storage

apt-get update -y && apt-get upgrade -y

pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn

git clone https://github.com/WOTCHITO/Nexus--bot- && cd Nexus--bot- && yarn install && npm install

ls

npm update

npm start

  ╰────────────┈⊷` 
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: `${texto}`.trim(), contextInfo: { externalAdReply: { title: 'Azami ©', body: null, thumbnail: imagen2, sourceUrl: 'https://github.com/Undefined17/CuriosityBot-MD' }, mentionedJid: [m.sender] }}}, aa)
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })  
}
handler.tags = ['main']
handler.command = /^(instalarbot)/i
export default handler
