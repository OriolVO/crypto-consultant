import { readMarkdown } from '../utils/readMarkdown.js'

const startMessage = await readMarkdown('../templates/start.md')

export const startHandler = (ctx) => {
  ctx.reply(
    startMessage,
    { parse_mode: 'Markdown' }
  )
}
