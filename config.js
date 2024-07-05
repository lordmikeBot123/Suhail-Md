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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_37_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDExNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDY2LFxuICAgICAgICA4NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDM5LFxuICAgICAgICAxLFxuICAgICAgICAzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MixcbiAgICAgICAgMTczLFxuICAgICAgICA4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNixcbiAgICAgICAgMTYwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDYxLFxuICAgICAgICAxMDksXG4gICAgICAgIDY3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI2LFxuICAgICAgICAzMixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDYsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM4LFxuICAgICAgICA0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDQyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDc1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzksXG4gICAgICAgIDM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTMzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk4LFxuICAgICAgICA3MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDExNixcbiAgICAgICAgNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDksXG4gICAgICAgIDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDExMixcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODQsXG4gICAgICAgIDQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgODIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDgyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNWYrdmkzNFdQQndzd0ZPcitjWlJIb2ZEQkRqUGd2Y1lHeExjNVJPNHM3ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibVNMRV9zV21RUnlIODRqLU1ZOTdXd1wiLFxuICBcInBob25lSWRcIjogXCIzMjU2Y2I5ZC04MmY3LTQ0YTgtYjIzYy05ZWVkYmViNDU2M2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTMsXG4gICAgICA5MCxcbiAgICAgIDIyMixcbiAgICAgIDIwMixcbiAgICAgIDI0NixcbiAgICAgIDI1LFxuICAgICAgMTg0LFxuICAgICAgMjQ0LFxuICAgICAgMjAyLFxuICAgICAgMjQ1LFxuICAgICAgNTMsXG4gICAgICAxODcsXG4gICAgICAxMjQsXG4gICAgICAxMjksXG4gICAgICAxMjQsXG4gICAgICAxMjQsXG4gICAgICAxODcsXG4gICAgICA3MyxcbiAgICAgIDIxNSxcbiAgICAgIDEzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MCxcbiAgICAgIDk4LFxuICAgICAgMjM5LFxuICAgICAgOTYsXG4gICAgICAxOTEsXG4gICAgICA0MSxcbiAgICAgIDQ5LFxuICAgICAgNDAsXG4gICAgICAxMTksXG4gICAgICA3MCxcbiAgICAgIDIxMyxcbiAgICAgIDE2MCxcbiAgICAgIDIwMCxcbiAgICAgIDksXG4gICAgICA1NCxcbiAgICAgIDE1NixcbiAgICAgIDIxMixcbiAgICAgIDIwMSxcbiAgICAgIDE4OSxcbiAgICAgIDIwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXWFZTMkRXWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODExMjQ4MTI0MDo0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE2MzUwNzY0NzYxMjMyOjQwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xha2hLc0NFS1RQb2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiank4Z1pSZFJMbmRnVVhFbVk3SkJZMUFjZU05blRYS3JreERNeXFvcVJYQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1dEtqd1ZRRjIvb2I4WjEwSDkwcGZUMFBQRHJya1BVN1ExSzdCNitoVlp6cXArWGNYVkFwbDgvV1Qxb3NCdDZiM1ZwT2VESE5YTUJVNjZyQVVtT2pCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3ZWpWOXRCMXk5RlhVcCs2bGJhRHhqQTJyaStsV2twbWNSTUFTaHdpWE9kQVIxaVg4RUFQWnFQSEZzNENwN1FPQ2ZkNnNlalFPL1VFNW1IbkJFMDBqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTEyNDgxMjQwOjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDIxNTQ2NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUF2alwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQXZqLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYTEyYWpDVnoxM2kzNEdqVUNzWXlUMVVDTzUzYkRvRWZaVThtbXE0Z2Ywdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MjcxMTg2NDMsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk2OTY4MTk1NTVcIn0iCn0=" ;


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
 
