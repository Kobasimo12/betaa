import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = ['918590508376', 'AjZap :)', true]
global.botNumberCode = '' //Example: 918590508376
global.confirmCode = ''

global.animxscans = ['5214531287294']
global.suittag = ['5214531287294']
global.mods = []
global.prems = []

global.packname = '© xWizard'
global.author = 'Created By AjZap:)'
global.wm = '⏤͟͟͞͞ X  W I Z A R D'
global.wm2 = 'X-Wizard'
global.ajzap = 'AjZal'
global.cb = '𝗡𝗲𝘅𝘂𝘀𝗕𝗼𝘁-𝗠𝗗'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.language = 'English'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '© AjZap'
global.devnum = '918590508376'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
