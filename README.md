# Crypto Consultant

A Telegram bot capable of giving real-time information about any cryptocurrency.

---

## Prerequisites

* **Node.js**: v22.17.0 (latest stable)
* **npm**: Node package manager
* **Telegram Bot API**: via [Telegraf](https://www.npmjs.com/package/telegraf)

## Installation & Configuration

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd crypto-consultant
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Environment Variables**
   Create a `.env` file in the project root with the following entries:

   ```dotenv
   BOT_TOKEN=your_telegram_bot_token
   COINGECKO_API_KEY=your_coingecko_api_key
   ```

> Without these variables set, the bot will not start or fetch data.

## Usage

Start the bot:

```bash
npm start
```

Once running, you can interact with it on Telegram:

* `/start` — Display a welcome message and instructions.
* `/help`  — List all available commands.
* `/info [coin_id]` — Fetch real-time info for the specified cryptocurrency (e.g., `/info bitcoin`).

## Commands Overview

| Command           | Description                                                    |
| ----------------- | -------------------------------------------------------------- |
| `/start`          | Show the welcome message and basic instructions.               |
| `/help`           | Display the help menu with all available commands.             |
| `/info [coin_id]` | Get price, market cap, volume, and more for the given coin ID. |

## Project Structure

```
project-root/
├── src/
│   ├── app.js              # Bot bootstrap and Telegraf setup
│   ├── handlers/           # Command handlers (start.js, help.js, info.js)
│   ├── services/           # API & business logic (cryptoService.js)
│   ├── templates/          # Markdown templates (start.md, help.md)
│   └── utils/              # Utility modules (readMarkdown.js)
├── .env                    # Environment variables (not committed)
├── package.json            # Dependencies & scripts
└── README.md               # This file
```

## Development

* No tests are available at this time.
* Development dependencies are listed in `package.json`.
* Feel free to lint/format as you see fit.

## Contributing

This is a test project; commit reviews are not enforced. However, you are welcome to fork, copy, and adapt the code for your own use.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
