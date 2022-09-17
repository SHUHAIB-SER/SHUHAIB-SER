const { Function, getBuffer } = require('../lib/')
const { generateWAMessage, proto } = require('@adiwajshing/baileys');
const image = 'https://i.imgur.com/ZgjAVL0.jpeg' //MAIN IMAGE URL HERE
const logo = 'https://i.imgur.com/ZgjAVL0.jpeg'

Function(
	{
		pattern: 'intro ?(.*)',
		fromMe: true,
		desc: 'Shows My Intro',
		type: 'misc',
	},   async (message, match) => {
        const jid = message.jid
        const number = message.client.user.jid
        const thumb = await getBuffer(image)
        const thumbnail = await getBuffer(logo)
        const options = {}
	options.contextInfo = {
		forwardingScore: 999, // change it to 999 for many times forwarded
		isForwarded: false,
	}
        // ADDED /* TO REMOVE LINK PREVIEW TYPE
        options.linkPreview = {
               renderLargerThumbnail: true,
               showAdAttribution: true,
               title: "𝐄𝐋𝐀𝐈𝐍𝐀 𝐌𝐎𝐖𝐋",
               body: "ᴄʟɪᴄᴋ ʜᴇʀᴇ 🦋 !!",
               mediaType: 1,
               thumbnail: thumb,
               sourceUrl: "http://wa.me/1(236)359-5126?text=_៚ʜᴇʟʟᴏ+ᴇʟᴀɪɴᴀ+ᴍᴏᴡʟ+ʙɪɢ+ғᴀɴ+ᴠʀᴏ+🪄_"
             }
        // ADDED */ TO REMOVE LINK PREVIEW TYPE
        options.quoted = {
            key: {
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast"
            },
            message: {
			'contactMessage': {
				'displayName': `${message.pushName}`, //ADD `${message.client.user.name}` TO DISPLAY CLIENT USER NAME.
				'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${message.client.user.name},;;;\nFN:${message.client.user.name},\nitem1.TEL;waid=${number.split('@')[0]}:${number.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
				'jpegThumbnail': thumbnail
			}
            }
        }
        
let messages = await generateWAMessage(message.jid, { text: `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」*
│ *Name      :*𝐄𝐋𝐀𝐈𝐍𝐀 𝐌𝐎𝐖𝐋 
│ *Place       :*ᴋᴇʀᴀʟᴀ ᴍᴀʟᴀᴩᴩᴜʀᴀᴍ
│ *Gender   :*ᴍᴀʟᴇ
│ *Age          :*18 🙂
│ *Phone     :* wa.me/1(236)359-5126


│ *IG ID        :* _shuhaibap
│ *Status     :*_🤍ᴄᴏᴍᴍɪᴛᴛᴇᴅ🤍_
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙`}, {quoted: message.quoted || ''})

await message.client.forwardMessage(message.jid, await proto.WebMessageInfo.fromObject(messages), options)

    }
);
