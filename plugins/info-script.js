import util from 'util'
import fetch from 'node-fetch'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/AUD-20220708-WA0325.mp3'
conn.sendFile(m.chat, vn, 'Gaboleh-gitu.mp3', null, fkontak, true, {
type: 'audioMessage', 
ptt: true , contextInfo: { showAdAttribution: true,
         externalAdReply: { 
             title: 'Nyari Apa Banh SC?',  
             body: 'Engga ada banh mwehehe ><', 
             description: '', 
             mediaType: 2, 
           thumbnail: await (await fetch('https://telegra.ph/file/a9a6907db67ca1a0c0877.jpg')).buffer(), 
          mediaUrl: `https://youtu.be/35w7z9QFLwY` 
         } 
      } 
   })
}
handler.command = handler.help = ['sc']
handler.tags = ['info']

export default handler
