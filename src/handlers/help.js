import { readMarkdown } from '../utils/readMarkdown.js'

const helpMessage = await readMarkdown('../templates/help.md')

export const helpHandler = (ctx) => {
  ctx.reply(
    helpMessage,
    { parse_mode: 'Markdown' }
  )
}
