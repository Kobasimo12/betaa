import fetch from 'node-fetch'
import axios from 'axios'
import translate from '@vitalets/google-translate-api'
import { Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({ organization: global.openai_org_id, apiKey: global.openai_key });
const openaiii = new OpenAIApi(configuration);
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return    
if (!text) return conn.reply(m.chat, `*🎌 Enter a request*\n\nExample, !ia Steps to create a page`, m, fake, )

try {

conn.sendPresenceUpdate('composing', m.chat)
let syms = `You are a wizard and your name is CuriosityBot-MD, your owner's name is Azami`


let res = await gpt.ChatGpt(text, syms)
await m.reply(res.text)
} catch {
try {   
let ia2 = await fetch(`https://aemt.me/openai?text=${text}`)
let resu2 = await ia2.json()
m.reply(resu2.result.trim())    
} catch {        
try {    
let tioress = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${lolkeysapi}&text=${text}`)
let hasill = await tioress.json()
m.reply(`${hasill.result}`.trim())   
} catch {    
}}}

}
handler.help = ['ai']
handler.tags = ['ai']
handler.command = ['openai', 'chatgpt', 'ai', 'robot']

export default handler
