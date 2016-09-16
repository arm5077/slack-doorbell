#slack-doorbell

The software connects an Amazon IoT "doorbell" to a Slack channel and "rings" (posts a message) every time someone pushes the button.

Installation
---

1. Log into Slack. Add the [incoming webhook integration.](https://svalbard.slack.com/apps/new/A0F7XDUAZ-incoming-webhooks) and point it toward your desired Slack channel (`#doorbell`, in my case). Make sure to copy the webhook URL.
2. Download or clone this repo.
3. In `index.js`, replace the URL in `request.post` with your webhook URL.
4. Compress `index.js`, `node_modules` and `package.json` into a zipped file.
5. Log into Amazon Web Services and jump over to "AWS IoT." Click the link that says "Connect AWS IoT Button."
6. Enter your button's serial number and click "Next."
7. Give your function a distinctive name. Make sure "Runtime" is set to "Node.js 4.3." (Any later version of node should be fine.)
8. Below under "Lambda function code," switch the "Code entry type" dropdown to "Upload a zip file." Click "Upload" and select your zipped file.
9. Click "Next." That oughta do it.