module.exports = {
  BOT_TOKEN: process.env.TBTOKEN,
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_USER: process.env.TBDBUSER,
  DB_PWD: process.env.TBDBPWD,
  DB_NAME: process.env.TBDB,
  REDDIT_CLIENT_ID: process.env.REDDITCLIENTID,
  REDDIT_CLIENT_SECRET: process.env.REDDITCLIENTSECRET,
  REDDIT_REFRESH_TOKEN: process.env.REDDITREFRESHTOKEN,
  BANNED_USER_ID: process.env.BANNEDUSERID,
  ADMIN_ID: parseInt(process.env.ADMIN_ID),
  VV_IMG: process.env.VVIMG,
  FB_IMG: process.env.FBIMG,
  BLANK_IMG: process.env.BLANK,
  ARYUUU_API_URL: process.env.ARYUUU_API_URL,
  BMUSUKO_API_URL: process.env.BMUSUKO_API_URL
}