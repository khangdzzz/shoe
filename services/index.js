import TelegramBot from 'node-telegram-bot-api';

const token = '7355311575:AAHOM1fXxtBIfQGiiSdDlAbMrdA9kHHnnNA';
const chatId = '6135391164';

const bot = new TelegramBot(token, { polling: false });
export const sendNotification = async (message) => {
    try {
        await bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
        console.log('Notification sent successfully!');
    } catch (error) {
        console.error('Failed to send notification:', error);
    }
};
