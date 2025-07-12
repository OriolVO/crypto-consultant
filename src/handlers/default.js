import { readMarkdown } from '../utils/readMarkdown.js'

const defaultMessage = await readMarkdown('../templates/default.md')

export const defaultHandler = (ctx) => {
  ctx.reply(
    defaultMessage,
    { parse_mode: 'Markdown' }
  )
}
