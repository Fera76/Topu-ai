//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/04e09c20e70de180ee319.jpg";
global.devs = "255673750170";
global.sudo = process.env.SUDO || "255673750170";
global.owner = process.env.OWNER_NUMBER || "255673750170";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID = eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkdSZm9JUXJidDJtVjJxNm1Ka0xTZGlYY054RDQ3b3JzSDdDMm5KbU9YWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVEdJdm5aaWswMVV5MlovSlR3bWRFeG1TbDEzSTNaaFpSOGlhN2RTdHBYYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSXd5KzdueDR6Q0dYWDhvdW5tWEdicmJON2VzZy9COWpwc1NKdmEvekVJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2RSs4WVJpakZIS2VMTzN2czFERmRheTgrYlg5QmdOMTlYODZNem0zVms0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFIdlhMazBJT3NhWUZmeHQwZFdwUGt0QXVCWlIrR0pKK21RSFlNcjZPME09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1IWnRzUFB2VG0xUnVrQ0srSFNWSjZSWVcrb0FMSEZuUkFIY0o2emx6bjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFBBeG9tSzdTTGtGZXMxMzMrVHcwOThJU2VMVmhxeW9MOFpadmYvc1FXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVl1dU8xdUhwMjhqTUx0R2hqWW9IbGRIamRWR0N6RDR5NEc2ZFV5L0wxaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXTmt2a1Jndi9vZjNnMXA1U0VnR1FOYVZQV1ByWGphQ2J6bVJNcGlYWktoRFpvb09kV3lsamhNWkJ5YU5raGdNUXkzdkNpUWhPdEdQV3JDaURheGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUxLCJhZHZTZWNyZXRLZXkiOiJ3c2VFdWp4ZGNHQmVudmEvbkNPa3UvaFhqYy92dHJ4anpWQzUzdDBHRWR3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjQ0NzQyNTE3Mjk4OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxQjVGQTgyOTY0NkM2OTRFMEMyMzkyRjI0NzEyRUFDQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE3NTgwMzQxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI0NDc0MjUxNzI5ODhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDYzMDkzOURFQkJBMzlDRUY0RUZCMjM2ODMxQkEzMUUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNzU4MDM0MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiX3ZXMnA0STFUS205a0JaSXJWX19tdyIsInBob25lSWQiOiIyNTM0OWY4MC0zYzBlLTQ2ZTItYjMzNC00NTk0ZjlmMjRiZDQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMVpJRXhtdUg0NGcwTUdPNllXU2NuaWE5WGhnPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJpWktUQmI3SGVpSDlzQ3F1S1o2ZDhoaUpwTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI1UFhSRDVRVyIsIm1lIjp7ImlkIjoiNDQ3NDI1MTcyOTg4OjIyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkZlcmEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tqLzREa1FwdVNBc3dZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InV1RUtncSsxYWF2b3hFUzdjVU5lTy9oUnpvNlc0QjNNQWJhS0pXVktaemc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkJuT09zT00yODl3NU9jMTdHck5VSzJVY2c2KzRLWHBEcGNRY3Q4NmNPeHRPNkd0ekpoSXRmU3YyYVZVTWJ4V0htcE12MmpQcnUzUkw1bXZIekJtb0NRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYeG40U21MY3V3WDRMSnZ4SlU0VTFQbS9FWFg0bkFlNkZSdlY4YmJFSDdxQTB0MjRVNEx0aHZ0Y2l4dGRYVXc4d240a2xiRjYzZUJPN21OYXkzajFoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjQ0NzQyNTE3Mjk4ODoyMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJicmhDb0t2dFdtcjZNUkV1M0ZEWGp2NFVjNk9sdUFkekFHMmlpVmxTbWM0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE3NTgwMzM4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVPWiJ9
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝖂𝖔𝖜 𝖙𝖔𝖕𝖚 𝖒𝖉 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖆 𝖓𝖊𝖜 𝖋𝖎𝖑𝖊",
  author: process.env.PACK_AUTHER || "TOPU",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TOP-Md",
  ownername: process.env.OWNER_NAME || "TOPU",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
