import { d as defineEventHandler, r as readBody } from '../../nitro/nitro.mjs';
import TelegramBot from 'node-telegram-bot-api';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const token = "7355311575:AAHOM1fXxtBIfQGiiSdDlAbMrdA9kHHnnNA";
const chatId = "-4616619876";
const bot = new TelegramBot(token, { polling: false });
const telegram = defineEventHandler(async (event) => {
  try {
    let body = await readBody(event);
    if (typeof body === "string") {
      body = JSON.parse(body);
    }
    const message = body["message"] || "Default message";
    await bot.sendMessage(chatId, `\u{1F4E2} Notification: ${message}`);
    return { success: true, message: "Notification sent!" };
  } catch (error) {
    console.error("Telegram Bot Error:", error);
    return { success: false, error: error.message };
  }
});

export { telegram as default };
//# sourceMappingURL=telegram.mjs.map
