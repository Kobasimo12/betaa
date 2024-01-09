import fetch from 'node-fetch'

var handler = async (m, {conn, text, usedPrefix, command}) => {

if (!text) return conn.reply(m.chat, `*🎌 Enter text to create an image*\n\nExample, !dall2 crying kittens`, m, fake, )

conn.reply(m.chat, '⏰ Wait a moment', m, fake, )

try {

let res1 = await fetch(`https://vihangayt.me/tools/imagine?q=${text}`)
let json1 = await res1.json();
await conn.sendMessage(m.chat, {image: {url: json1.data}}, {quoted: m})
} catch {
console.log('🚩 Error in dall-e 2 api number 1.')
try {
let res2 = await conn.getFile(`https://vihangayt.me/tools/midjourney?q=${text}`)
await conn.sendMessage(m.chat, {image: {url: res2.data}}, {quoted: m})
} catch {
console.log('🚩 Error in dall-e 2 api number 2.');
try {
let res3 = await fetch(`https://vihangayt.me/tools/lexicaart?q=${text}`)
let json3 = await res3.json()
await conn.sendMessage(m.chat, {image: {url: json3.data[0].images[0].url}}, {quoted: m})
} catch {
console.log('🚩 Error in api number 3 of dall-e 2.')
try {
const tiores4 = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`)
await conn.sendMessage(m.chat, {image: {url: tiores4.data}}, {quoted: m})
} catch {
console.log('🚩 Error, no api works.')
return conn.reply(m.chat, `*🚩 A failure occurred*`, m, fake, )
}}}}

}
handler.help = ['dall2']
handler.tags = ['ai']
handler.command = /^(dall2)/i

export default handler
