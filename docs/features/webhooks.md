# Webhooks — Pro

Webhooks deliver alerts to your own Discord, Telegram, Slack or HTTP destination. This is a **Pro feature arranged and priced separately**, especially for community owners and custom tools.

You need an active subscription and Pro enabled on your account. Standard subscription and trial access do not unlock webhook delivery. Contact Coin-Sniffer through Whop to agree the service and pricing.

## Add a destination

Once Pro is enabled:

1. Open **Settings → Webhooks**.
2. Select **Add Webhook**.
3. Enter a **Name**, choose the **Type**, and supply the **Webhook URL**.
4. Optionally enable **Watchlist alerts only**.
5. Choose **Momentum**, **Dojo**, or both under **Alert categories**.
6. Select **Save**, ensure the destination is enabled, then select **Test**.
7. Check that the test message arrived at the intended destination.

The page shows your webhook limit. You can edit, disable or delete a saved destination.

## Destination types

| Type | What to enter |
| --- | --- |
| Discord | An incoming webhook URL for a channel you control. |
| Telegram | A bot message URL containing your bot token and destination chat ID. |
| Slack | An incoming webhook URL for your Slack destination. |
| HTTP (Generic) | Your receiving endpoint URL. |

For Telegram, the current form uses one **Webhook URL** field, not separate token and chat-ID fields. Its format is:

```text
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/sendMessage?chat_id=<YOUR_CHAT_ID>
```

Use credentials for a bot you control and a chat where it has permission to send messages. Contact support through Whop if you need help configuring the destination. Generic HTTP integrations may need separate setup; agree the expected message format before relying on delivery.

Treat webhook URLs and bot tokens as credentials. Do not post them in public channels or include them in screenshots sent for support.

![The New Webhook form with fields for name and type, a webhook URL box showing a Discord placeholder, a Watchlist alerts only checkbox, and Alert categories checkboxes for Momentum and Dojo with a note that nothing selected means the webhook receives every alert.](/img/app/settings-webhooks.png)

*The destination form. Leaving both categories unticked delivers everything, rather than nothing.*

## Choose what gets delivered

- **Momentum** includes the shorter-term market alert families.
- **Dojo** includes zone publication, zone/entry events, and a plan's closing events: target reached, stop taken and invalidated.
- **No category selected means all categories**, not disabled delivery.
- **Watchlist alerts only** additionally restricts the destination to your saved coins.

Your enabled built-in alert types also affect delivery. Use separate destinations for separate audiences if needed. These destination filters do not change the market scanner or the setup history.

## Troubleshooting

If the Webhooks tab is locked, confirm the subscription and separately arranged Pro access. Older webhook configurations may need to be added again after Pro is enabled.

If tests fail, check the full destination URL, permissions and bot/channel settings. If tests arrive but market alerts do not, check that the webhook is enabled, its categories and watchlist scope, and your alert-type selections.

Delivery depends on the destination and service availability. A successful test does not guarantee uninterrupted delivery or a particular latency.
