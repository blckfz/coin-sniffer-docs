# Webhooks

Receive alert notifications instantly in **Discord** or **Telegram** (or any service that accepts incoming webhooks).

## How webhooks work

When an alert fires on any tracked pair, the backend immediately sends a formatted POST request to your configured webhook URL. This happens within milliseconds of the alert being evaluated — no polling, no delay beyond network latency.

Each alert message includes:
- Alert type (e.g., "Surge 60 Bull")
- Symbol and price at time of alert
- Key metrics (% changes, volume)
- Timestamp

## Setting up a Discord webhook

### Step 1 — Create the webhook in Discord

1. Open your Discord server and go to the channel where you want alerts.
2. Click the **⚙️ Edit Channel** gear icon.
3. Go to **Integrations** → **Webhooks**.
4. Click **New Webhook**.
5. Give it a name (e.g., "Coin Sniffer Alerts").
6. Click **Copy Webhook URL**. It looks like:
   ```
   https://discord.com/api/webhooks/1234567890/xxxxxxxxxxxx
   ```

### Step 2 — Add it to Coin Sniffer

1. In Coin Sniffer, click **Webhooks** in the top toolbar.
2. Paste the URL into the **Discord Webhook URL** field.
3. Click **Test** to send a test message to your channel.
4. Click **Save**.

Alerts will now appear in your Discord channel formatted as embed cards.

## Setting up a Telegram webhook

### Step 1 — Create a Telegram bot

1. Open Telegram and message **@BotFather**.
2. Send `/newbot` and follow the prompts (name your bot, choose a username).
3. BotFather will give you a **bot token**: `7123456789:AAxxxxxxxx...`

### Step 2 — Get your chat ID

1. Start a chat with your new bot (search for it by username and click Start).
2. Send it any message.
3. Open this URL in your browser (replace `YOUR_BOT_TOKEN`):
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
   ```
4. In the JSON response, find `"chat":{"id": ...}` — that number is your **chat ID**.

### Step 3 — Add it to Coin Sniffer

1. In Coin Sniffer, click **Webhooks** in the top toolbar.
2. Enter your **Bot Token** and **Chat ID**.
3. Click **Test** to verify.
4. Click **Save**.

## Multiple webhooks

You can configure multiple webhook URLs — for example, one Discord channel for all screener alerts and a separate channel for watchlist-only alerts. Each webhook can be independently enabled/disabled.

## Troubleshooting

**Test message sent but nothing appeared in Discord**

- Double-check the webhook URL — make sure you copied the full URL including the token at the end.
- Check the channel permissions — the webhook may not have permission to post in that channel type.
- Try deleting the webhook in Discord and creating a new one.

**Alerts appearing in the app but not in webhook**

- Confirm the webhook is enabled (not toggled off) in the Webhooks settings.
- Check if the webhook URL returns any error by clicking **Test**.
- Discord sometimes rate-limits webhooks — if you're receiving many alerts in a short period, some may be queued.

**Telegram: "chat not found" error**

- Make sure you sent at least one message to your bot before fetching the chat ID.
- For group chats, the chat ID is negative (e.g., `-1001234567890`). Add the bot to the group and send a message there first.
