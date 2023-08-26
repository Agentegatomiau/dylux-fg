import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['51940425018', 'Cat', true],
  ['573016579583'], 
  ['573016579583'] 
] //Numeros de owner 

global.mods = ['51940425018'] 
global.prems = ['51940425018', '573016579583', '573016579583']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'TU-APIKEY' //Regístrese en https://api-fgmods.ddns.net/
}

// Sticker WM
global.packname = 'UwU' 
global.author = 'Cat' 
global.fgig = '▢ Canal de Youtube\nhttps://youtube.com/c/UniversoDelAnimeUDA\n' 
global.dygp = 'https://chat.whatsapp.com/H2sKXp2y2OW7XdPOzwkZld'
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/c/UniversoDelAnimeUDA'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '*⌛ _Cargando..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
