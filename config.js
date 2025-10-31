const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "FAIZAN_AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUxxY001cTZrQjVJVzVBbDAyTm5FRk9YSkwwc0NmRzE4dGJuTGlDUG8wVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSk5kdlQzWWRzd2s3S3Jock83K3IxYlk0SlFhNEEzTzZYWFdDUGZvYXdoQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSnZRRGxXcFQvSmMyQWl5QzJocTFOYnQ5bjUrSlR3YS9DL3dBc2taclVFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvU3FTSlEzY0FsQ2F3WlpJbUhxdkZFSmVwZzdDM1pKRkU0K1BQZm0yamhVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1MbWZmMERocHRrUFlVTXl0UEY3MGNtYS9YQWtXZFVKSkhpOTc5WWVWRkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklyWWNMcFJxMTNmZmtCZWlSQW9hS1BIS2tIcEROSldGZWpyaXBtSUVKV289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0hjeTdWcHJub2Vyd1VLYkMzWEZldDNNems3WHVJSjYwSFFPYXVYNklHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSThNR2pNR2FTRUp6SWpUQnA5dHZjbDBWY0RtcFQ1RU9vMmJBQ05PWHhEcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVaWUZucE1DbzF6cmVvUW1oWUJjb0Z5NDQ0L1BpbUhnbW1HdzJhcGJzRmVQTEo5dVBkUTFUT0QveWxEL0tHaFBlNnI1TUQ2cVd5blhqK1k1ZEN1cmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiJXQTZHQ3pWU0hlSzBFSmlDMm9xOGs5c1h4WlF2TVNQNlo4ZFhQcG9vckNBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzM0MDkyODcxMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0U0NjE0M0Q0MjJFRDI2QjA4NUUxQkQ2MzczNEI1NyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxOTM4Mjc3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJFTEFJTkFNRCIsIm1lIjp7ImlkIjoiOTIzMzQwOTI4NzEwOjI3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiOTYzNzUzNzUxNTEyNjk6MjdAbGlkIiwibmFtZSI6ImYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xPUW1jMENFTk9XbE1nR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImROWWJ0bEE3ZUJQelNUN3NQeTczRWx6aUpoMCt0YkdrYStsTGZZMXhJeGc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVrNnNTN1cyeG1wdWJlWFVHeEg1MHZ2ajY4OTZhNlJuV2NxcmM3b2F1YkxDYzFBd3Y3RDBpQUtzbUM1RWI1bzdPeEdZbFVVM3ZNUDQyNmlzL01lL0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRSUJyNWFaRENId1drOUhvYmZLUStaeTRoZnAvUjZHNWpWbElpNVJ6MVAzZlZsWGhYZDk5blEvU0xSUnVpbTFxbjF4eUdzWmxmNU16a0xka0xIZThoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzM0MDkyODcxMDoyN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYVFdHN1pRTzNnVDgways3RDh1OXhKYzRpWWRQcld4cEd2cFMzMk5jU01ZIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjE5MzgyNzMsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGVEkifQ==",
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
