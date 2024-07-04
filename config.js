const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_36_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkxLFxuICAgICAgICA4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExLFxuICAgICAgICAzOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDUwLFxuICAgICAgICA4NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgODQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDYzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc0LFxuICAgICAgICA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDY4LFxuICAgICAgICA5MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjksXG4gICAgICAgIDc2LFxuICAgICAgICA1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDgxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NixcbiAgICAgICAgOTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDcwLFxuICAgICAgICAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NixcbiAgICAgICAgMjE0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTYsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0cDhyeHR5MTlCRDE4c092TngvQ3Znc3lpYk5tTlQxc2ZhNHh0em1qVVVRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhNU9sQURGMlF2ZTg0VlR3WllhdjN3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjA1Njg3ZTA1LWQxMGMtNDY0Yy1hNTJkLThhZWIyODk1ZDM3NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzcsXG4gICAgICAxMixcbiAgICAgIDI0NyxcbiAgICAgIDEsXG4gICAgICAwLFxuICAgICAgMjQ0LFxuICAgICAgMTAxLFxuICAgICAgMTg3LFxuICAgICAgODIsXG4gICAgICA2MSxcbiAgICAgIDI0NCxcbiAgICAgIDIyMSxcbiAgICAgIDY3LFxuICAgICAgMTEzLFxuICAgICAgNTcsXG4gICAgICA3MyxcbiAgICAgIDMzLFxuICAgICAgMTg0LFxuICAgICAgMTczLFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg4LFxuICAgICAgMjQ0LFxuICAgICAgMTI3LFxuICAgICAgMzksXG4gICAgICAxMDUsXG4gICAgICA0NSxcbiAgICAgIDQzLFxuICAgICAgMTg0LFxuICAgICAgOTYsXG4gICAgICA2NixcbiAgICAgIDE2MyxcbiAgICAgIDIzMixcbiAgICAgIDE2NixcbiAgICAgIDIsXG4gICAgICAxNTgsXG4gICAgICA0NyxcbiAgICAgIDU0LFxuICAgICAgMjM2LFxuICAgICAgMjAyLFxuICAgICAgNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS0c0VFM1WVdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMTQwNDg4Mjk6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA3MTQ5MjkyNTg2OTQ6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJM3gvbUlRdjhxYXRBWVlBeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInBjRElxL0JvdWJRcjJ6Nzc0VXd1NklMMkNyRG5TVVJoTG9VWHJqVFdOM2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaGRZNUhreEI4c3J4TVdBOTQ0L0lkNGRxQVQ4dzFEVUQwUXIxVnErY2Y5MnI1WEdpRjVJZjArM293Uks5NnRJaitPbitXa0ZKbWdzM3BESkVpWnFYQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY25uZWFtaE5IK1BHcE1zUEtGZlM2bVNQMkxPbXpyZFZKRERUaCtXQTM1c0Q0RlFaTDQzL0UzR3lVSk1GdlpHNk5POS9yejV0KzZVNHFCTDMrZUE0Q3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODExNDA0ODgyOTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTAwMTYyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRWgyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFaDIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzaGdvZTdFM3JCMkk2TTVmamZoNmdibExOWEF6L2R4L0VzMGkvd2tkVVdRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNzU5OTc1NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3MjcxNTQwODE3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
