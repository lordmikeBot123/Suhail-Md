const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  = process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website= process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_51_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgNjksXG4gICAgICAgIDc3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg3LFxuICAgICAgICA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4MixcbiAgICAgICAgNjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ1LFxuICAgICAgICA1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDg3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTA3LFxuICAgICAgICA4NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDYyLFxuICAgICAgICA1LFxuICAgICAgICA2MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDU1LFxuICAgICAgICA2NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICA4MixcbiAgICAgICAgOTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDU4LFxuICAgICAgICA4NixcbiAgICAgICAgMTA3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDczLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgOTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDYyLFxuICAgICAgICAyNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUyLFxuICAgICAgICA2OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDcsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg3LFxuICAgICAgICA1NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1LFxuICAgICAgICA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEzLFxuICAgICAgICAzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDM5LFxuICAgICAgICAxODksXG4gICAgICAgIDQ3LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSlBtZGVwYmV0S3hGUU9BSWQ1QW1tZHN5NVpqRTRqaFFEZ2oxUmxOcGx6VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidWhEWnNGVEhST1N2dDZKV2tlS2xRUVwiLFxuICBcInBob25lSWRcIjogXCI2OTFkYjE4MC1mNGZlLTQ3YTMtYWNjZS01ZGEyNTkzOWU0ZmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTUsXG4gICAgICAxOTUsXG4gICAgICAyMTEsXG4gICAgICA5LFxuICAgICAgMTIzLFxuICAgICAgMjcsXG4gICAgICA3OCxcbiAgICAgIDcwLFxuICAgICAgMTU5LFxuICAgICAgMTYyLFxuICAgICAgMTA0LFxuICAgICAgMTI5LFxuICAgICAgMTIyLFxuICAgICAgNjcsXG4gICAgICA5MixcbiAgICAgIDI1LFxuICAgICAgMyxcbiAgICAgIDIyMixcbiAgICAgIDI3LFxuICAgICAgMTkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNixcbiAgICAgIDc1LFxuICAgICAgNjIsXG4gICAgICAxOTksXG4gICAgICAxNTIsXG4gICAgICAxMDMsXG4gICAgICAyNCxcbiAgICAgIDEyMSxcbiAgICAgIDIwMyxcbiAgICAgIDIwMyxcbiAgICAgIDE1LFxuICAgICAgMjQwLFxuICAgICAgMTQyLFxuICAgICAgMTg4LFxuICAgICAgMjM3LFxuICAgICAgMTExLFxuICAgICAgMTk3LFxuICAgICAgNzIsXG4gICAgICA0MCxcbiAgICAgIDQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkMxQ1FWR1dFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDUwOTQ4MDgyOjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1MjQ0MTczNTI3NDYyNzo1NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPRy9rOTBCRU8yUW43VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInc5MDV4UHFUNklIdm5CUTdKZ053VFp5NzZBR2c0YmM4QS9Zcmc4Z2dOeWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicVQra1ZGQnJoaERUdHBhYUFQWFZ3NnBMUjBqME8xb09LZmN4aityQVNjMGlEV0h6RDIwN1pZbkpGalF1Vi9YSG9sMzZ6UEhkTllCVWZJUjhYazcxRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY0c1UVhiSVBMejdaaDRMZ2s5eldPQnFuRE1rRTFVOTgwTzd4VlhxS2s5ajVsQ0xZY25tMWhJanAvQldlK2Y4TGMwNHhxc2UxNjhkdHp4NmMwNzZBQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA1MDk0ODA4Mjo1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjcxODU2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT3JzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPcnMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwSzg3dmdDZ3dzZnJFV09OS3ZQd0hsWXdSeFlZNFJmYndmWGROVEpmd2FzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2Mzc5MDA0OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMjcxODYzNTIxXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
