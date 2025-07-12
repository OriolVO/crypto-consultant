import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import { helpHandler } from './handlers/help.js'
import { startHandler } from './handlers/start.js'
import { defaultHandler } from './handlers/default.js'
import { name as infoName, handler as infoHandler } from './handlers/info.js'

import dotenv from 'dotenv'
dotenv.config()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(ctx => {
  startHandler(ctx)
})

bot.help((ctx) => {
  helpHandler(ctx)
})

bot.command(infoName, (ctx) => {
  infoHandler(ctx)
})

// Default behaviour
bot.on(message('text'), (ctx) => {
  defaultHandler(ctx)
})

bot.launch()

// Console shutdowns
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
