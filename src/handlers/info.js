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

    const name = data.name // done
    const symbol = data.symbol // done
    const price = data.market_data.current_price.usd // done
    const marketCap = data.market_data.market_cap.usd // done
    const volume = data.market_data.total_volume.usd // done
    const ath = data.market_data.ath.usd // done
    const athDate = data.market_data.ath_date // done
    const rank = data.market_cap_rank //
    const description = data.description.en // done
    const link = data.links.homepage[0] // done

    ctx.reply(`
      *📈 Cryptocurrency: ${name}* (TICKER: ${symbol})
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
