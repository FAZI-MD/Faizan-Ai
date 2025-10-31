const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0dqSVZEUElXRTI1Q21OdTNYQk54N3VhYlRQZVFFNi9JdkRlY0NlalBtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2R5QmQ4OTk4MGhXOVVRb25iQ0FqZnBWaTN3ME1xQkgyN2UvM2ZCWDQyST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySDB4Y3g4VHEzUEU1MGpuYmQvL0wyeWIxbDdCa3hZM1hsQzhqSno4S21RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4YStKd1YrZjlCaGhsdzdZdFgzOEw0UCt0ZnVTZUpkeDEwZ0xOZlI3b3hFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJHeGNVdGFwTlhsTHIrSWwrMnZRV2hTN0JDbndnR3Fmcmk1eXFOdmZwRTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlcwSFpSRTdxNnpmVjNkdU5TM1h4aGVEc1JZOUhQY1hoUHhJSEV1TjYyWFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0RXUERHNG5xSDBKMzBNcUM0ZmMyTFI4NXByRUdYVEFSZDhJY1VzQXhFST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0RjaG9zeGZXWGpvOHNHUWh2M2Q3ZUMwUTB3RTJrRGUrT0Y1WXN6WjN6cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndENEFqRlJxMGZ5NzlHUm5jMXFwZ0hXby9HOHFOQVpIcVo2YW5YMVRLV3Z3VFBaQmpqVjhyN0dyTmptSmJCekt3bFlIcTVVMGlMZWgvT2hQczlkV2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA4LCJhZHZTZWNyZXRLZXkiOiJ2R09pMG40cUZ4dVZJUi9RY2pLTTZCNUNqeFdDL056RUQ2eTZzL1FQZ3lrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzM0MDkyODcxMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzZEN0VGOEQzRTYyRkI4OEVGQjkxQUVDMzk1REY4OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxOTM2NzE2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzNDA5Mjg3MTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMyMzk0RUZCNzQzQzRDMDI5MzU4Njg5QjNENUFENEQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MTkzNjcxNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiRUxBSU5BTUQiLCJtZSI6eyJpZCI6IjkyMzM0MDkyODcxMDoyNkBzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijk2Mzc1Mzc1MTUxMjY5OjI2QGxpZCIsIm5hbWUiOiJmIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMT1FtYzBDRUxtS2xNZ0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJkTllidGxBN2VCUHpTVDdzUHk3M0VsemlKaDArdGJHa2ErbExmWTF4SXhnPSIsImFjY291bnRTaWduYXR1cmUiOiJJcitRd2JKa210dTFuMTdEdHlMKzk4Y3pwcTNmamUxNUIwSEhOYWhGUmFTUUliZG5rSXppeTQ2WDJ6MkpkMmZNOHlIMFIvTmpmU0ZWdnhqNG14clFDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaDltaGs3YVNzcGNrOUtteXlCK2hpdW5vVmNPd3FrN1huRTgvQkpIUU5iL0kycUk1RFBLRStsWEQrOEhhK0tpV01KdERybUszZ0RXTExOKzNjdnYzZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzNDA5Mjg3MTA6MjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWFRXRzdaUU8zZ1Q4MGsrN0Q4dTl4SmM0aVlkUHJXeHBHdnBTMzJOY1NNWSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYxOTM2NzEyLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRlRJIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY FAIZAN-AI 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.ibb.co/9mdHyGDL/shaban-md.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "FAIZAN-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "FAIZAN-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923266105873",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*FAIZAN-AI*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ FAIZAN-AI ❣️*",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "https://i.ibb.co/9mdHyGDL/shaban-md.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923266105873",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
