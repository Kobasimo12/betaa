import fetch from 'node-fetch'
  
var handler = async (m, { conn, text }) => {
 
if (!text) return conn.reply(m.chat, `*🎌 Enter the name of some anime*\n\nExample, !animeinfo miku`, m, fake, )
let res = await fetch('https://api.jikan.moe/v4/manga?q=' + text)
if (!res.ok) return conn.reply(m.chat, `*🚩 A failure occurred*`, m, fake, )

let json = await res.json()
let { chapters, title_japanese, url, type, score, members, background, status, volumes, synopsis, favorites } = json.data[0]
let author = json.data[0].authors[0].name
let animeingfo = `📚 Title: ${title_japanese}
📑 Chapter: ${chapters}
✉️ Stream: ${type}
🗂 Status: ${status}
🗃Volumes: ${volumes}
🌟 Favorite: ${favorites}
   Score: ${score}
👥 Members: ${members}
⛓️ Url: ${url}
👨‍🔬 Author: ${author}
📝 Background: ${background}
💬 Synopsis: ${synopsis}
 `
conn.sendFile(m.chat, json.data[0].images.jpg.image_url, 'anjime.jpg', `\t\t\t\t\t*メー ANIME INFO ーメ*\n` + animeingfo , fkontak, m)

}
handler.help = ['animeinfo']
handler.tags = ['anime']
handler.command = /^(animeinfo)$/i
 
export default handler
