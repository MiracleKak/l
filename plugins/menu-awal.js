import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, ` Hai${ucapan()}Klik All Menu Untuk Melihat Semua Fitur Atau Klik List Menu Untuk Melanjutkan_\n`,wm + '\n\n' + botdate, giflogo, [['𝘼𝙇𝙇 𝙈𝙀𝙉𝙐','.? all'],['𝙇𝙄𝙎𝙏 𝙈𝙀𝙉𝙐','.siuuu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'Total Cintaku Padamu',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat dinihari 🌆"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌇"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = /^(menu|help|co)$/i
export default handler