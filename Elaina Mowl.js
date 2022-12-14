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
               title: "đđđđđđ đđđđ",
               body: "á´ĘÉŞá´á´ Ęá´Ęá´ đŚ !!",
               mediaType: 1,
               thumbnail: thumb,
               sourceUrl: "http://wa.me/1(236)359-5126?text=_áĘá´ĘĘá´+á´Ęá´ÉŞÉ´á´+á´á´á´ĄĘ+ĘÉŞÉ˘+Ňá´É´+á´ Ęá´+đŞ_"
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
        
let messages = await generateWAMessage(message.jid, { text: `0ŰŞŰŞŕ˝´ŕ˝ťęŚ˝ęŚźĚˇâ¸âšâ˘âââââââââââââââĄá­
â       *ă đ đŹ đđĄđ§đĽđ˘ ă*
â *Name      :*đđđđđđ đđđđ 
â *Place       :*á´á´Ęá´Ęá´ á´á´Ęá´á´Šá´Šá´Ęá´á´
â *Gender   :*á´á´Ęá´
â *Age          :*18 đ
â *Phone     :* wa.me/1(236)359-5126


â *IG ID        :* _shuhaibap
â *Status     :*_đ¤á´á´á´á´ÉŞá´á´á´á´đ¤_
â°âââââęŞś ŰŞŰŞŕ˝´ŕ˝ťęŚ˝ęŚźĚˇâ¸ â â â â ęŞś ŰŞŰŞŕ˝´ŕ˝ťęŚ˝ęŚźĚˇâ¸`}, {quoted: message.quoted || ''})

await message.client.forwardMessage(message.jid, await proto.WebMessageInfo.fromObject(messages), options)

    }
);
