import { getCryptoPrice } from '../services/cryptoService.js'

export const name = 'info'

export async function handler (ctx) {
  const parts = ctx.update.message.text.split(' ')
  if (parts.length > 2) {
    return ctx.reply('❗️ Too many parameters. Usage: /info [coin_id]')
  }
  if (parts.length === 1) {
    return ctx.reply('❗️ Please send me a cryptocurrency name, e.g. /info bitcoin')
  }

  const coinId = parts[1].toLowerCase()
  try {
    const data = await getCryptoPrice(coinId)

    const name = data.name
    const symbol = data.symbol
    const price = data.market_data.current_price.usd
    const marketCap = data.market_data.market_cap.usd
    const volume = data.market_data.total_volume.usd
    const ath = data.market_data.ath.usd
    const athDate = data.market_data.ath_date
    const rank = data.market_cap_rank
    let description = data.description.en
    const link = data.links.homepage[0]

    // Formatting description
    if (description.length > 75) description = description.substring(0, 75) + '...'

    ctx.reply(`
      *📈 Cryptocurrency: ${name}* (SYMBOL: ${symbol})
      *💵 Price*: ${price}
      *💰 Market Cap*: ${marketCap}
      *💸 Volume*: ${volume}
      *🌞 ATH*: ${ath}
      *📅 ATH Date*: ${athDate}
      *🏆 Rank*: ${rank}
      *📖 Description*: ${description}
      *🔗 Link*: ${link}
    `)
  } catch (err) {
    console.error('info handler error:', err)
    return ctx.reply(`❌ Could not fetch data for "${coinId}".`)
  }
}
