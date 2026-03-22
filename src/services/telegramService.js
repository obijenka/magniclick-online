import axios from 'axios';
import { TELEGRAM_CONFIG } from '../config/telegram';

class TelegramService {
  constructor() {
    this.botToken = TELEGRAM_CONFIG.botToken;
    this.chatId = TELEGRAM_CONFIG.chatId;
    this.apiUrl = TELEGRAM_CONFIG.apiUrl;

    this.client = axios.create({
      baseURL: `${this.apiUrl}${this.botToken}`,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Отправка сообщения в Telegram
   * @param {Object} formData - данные из формы
   * @returns {Promise<Object>} - результат отправки
   */
  async sendMessage(formData) {
    const message = this.formatMessage(formData);
    
    try {
      const response = await this.client.post('/sendMessage', {
        chat_id: this.chatId,
        text: message,
        parse_mode: 'HTML',
        disable_web_page_preview: true
      });

      console.log(response.data);

      console.log('✅ Сообщение успешно отправлено в Telegram');
      return { 
        success: true, 
        data: response.data 
      };
      
    } catch (error) {
      console.error('❌ Ошибка отправки в Telegram:', error);
      
      if (error.response) {
        console.log('Статус ошибки:', error.response.status);
        console.log('Данные ошибки:', error.response.data);
        return { 
          success: false, 
          error: error.response.data.description || 'Ошибка сервера Telegram'
        };
      } else if (error.request) {
        console.log('Нет ответа от сервера');
        return { 
          success: false, 
          error: 'Нет ответа от сервера Telegram. Проверьте подключение к интернету.'
        };
      } else {
        console.log('Ошибка запроса:', error.message);
        return { 
          success: false, 
          error: error.message 
        };
      }
    }
  }

  /**
   * Форматирование сообщения для Telegram
   * @param {Object} formData - данные из формы
   * @returns {string} - отформатированное сообщение
   */
  formatMessage(formData) {
    const date = new Date().toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });

    const emojis = {
      name: '👤',
      phone: '📞',
      email: '📧',
      agreement: '✅',
      date: '🕐',
      new: '🔔',
      site: '🌐'
    };

    return `
${emojis.new} <b>НОВАЯ ЗАЯВКА С САЙТА</b> ${emojis.new}

${emojis.name} <b>Имя:</b> ${formData.name || 'Не указано'}
${emojis.phone} <b>Телефон:</b> <code>${formData.phone}</code>
${emojis.email} <b>Email:</b> <code>${formData.email}</code>
${emojis.agreement} <b>Согласие на обработку:</b> ${formData.agreement ? 'Да' : 'Нет'}

${emojis.date} <b>Дата:</b> ${date}
${emojis.site} <b>Откуда:</b> magniclick.ru
    `;
  }
}

const telegramService = new TelegramService();
export default telegramService;

