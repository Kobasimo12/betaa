import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['573027866596', 'Eder 🍧', true],
global.owner = [['51982110760', 'Angel 🍧', true],
['51929972576', 'Jxtxn17', true],
['5217294888993'], ['573155428601'], ['5214531287294'], ['5492266466080'], ['593968585383'], ['51941987051'], ['5492266613038'], ['573106040746']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.animxscans = ['5214531287294']
global.suittag = ['5214531287294']
global.mods = []
global.prems = []

global.packname = '© NexusBot'
global.author = 'Created By Eder'
global.wm = '⏤͟͟͞͞ ＮｅｘｕｓＢｏｔ'
global.wm2 = '𝙉𝙚𝙭𝙪𝙨𝘽𝙤𝙩'
global.azami = 'Eder'
global.cb = '𝗡𝗲𝘅𝘂𝘀𝗕𝗼𝘁-𝗠𝗗'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '© Wotchito ~ Eder'
global.devnum = '+573027866596'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
