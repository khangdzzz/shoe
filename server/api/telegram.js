import { defineEventHandler } from 'h3';
import TelegramBot from 'node-telegram-bot-api';

const token = '7355311575:AAHOM1fXxtBIfQGiiSdDlAbMrdA9kHHnnNA';
const chatId = '-4616619876';

const bot = new TelegramBot(token, { polling: false });

export default defineEventHandler(async (event) => {
    try {
        let body = await readBody(event);
        if (typeof body === "string") {
            body = JSON.parse(body); 
        }
        const message = body["message"] || 'Default message';

        await bot.sendMessage(chatId, `📢 Notification: ${message}`);
        return { success: true, message: 'Notification sent!' };
    } catch (error) {
        console.error('Telegram Bot Error:', error);
        return { success: false, error: error.message };
    }
});
