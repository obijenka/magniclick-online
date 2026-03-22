import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import Logo from "../../shared/Logo/Logo";
import VKIcon from "../../../assets/footer/social/vk.svg";
import InstagramIcon from "../../../assets/footer/social/instagram.svg";
import FacebookIcon from "../../../assets/footer/social/facebook.svg";
import TelegramIcon from "../../../assets/footer/social/telegram.svg";
import WhatsappIcon from "../../../assets/footer/social/whatsapp.svg";
import ViberIcon from "../../../assets/footer/social/viber.svg";
import phoneIcon from "../../../assets/footer/icons/phone.svg";
import emailIcon from "../../../assets/footer/icons/email.svg";
import telegramService from "../../../services/telegramService"

export default function Footer() {
    // Состояние для данных формы
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    agreement: false,
  });

  // Состояние для статуса отправки
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (status.success || status.error) {
      setStatus({ loading: false, success: false, error: "" });
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus({ ...status, error: "Введите имя" });
      return false;
    }
    if (!formData.phone.trim()) {
      setStatus({ ...status, error: "Введите номер телефона" });
      return false;
    }
    if (!formData.email.trim()) {
      setStatus({ ...status, error: "Введите email" });
      return false;
    }
    if (!formData.agreement) {
      setStatus({ ...status, error: "Необходимо согласие на обработку данных" });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ ...status, error: "Введите корректный email" });
      return false;
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setStatus({ ...status, error: "Введите корректный номер телефона" });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    if (!validateForm()) return; 

    setStatus({ loading: true, success: false, error: "" });

    try {
      const result = await telegramService.sendMessage(formData);
      
      if (result.success) {
        setStatus({ loading: false, success: true, error: "" }); 
        
        setFormData({
          name: "",
          phone: "",
          email: "",
          agreement: false,
        });
        
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      } else {
        setStatus({ 
          loading: false, 
          success: false, 
          error: "Ошибка отправки. Попробуйте позже или свяжитесь с нами по телефону." 
        });
      }
    } catch (error) {
      setStatus({ 
        loading: false, 
        success: false, 
        error: "Произошла ошибка. Пожалуйста, попробуйте снова." 
      });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerColumn}>
          <div className={styles.footerLogo}>
            <Logo color="white" />
          </div>

          <ul className={styles.footerNav}>
            <li>
              <Link to="/about">О нас</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/for-who">Для кого</Link>
            </li>
          </ul>
          <div className={styles.footerSocial}>
            <a href="#" aria-label="VK">
              <img src={VKIcon} alt="VK" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>

        <div className={styles.footerColumn}>
          <div className={styles.footerTitle}>Наши контакты</div>
          <div className={styles.footerTitleLine}></div>
          <div className={styles.footerContactInfo}>
            <div className={styles.footerContactInfoItem}>
              <img src={phoneIcon} alt="Phone" className={styles.contactIcon} />
              <a href="tel:+79005678954">+ 7 900 567 89 54</a>
            </div>
            <div className={styles.footerContactInfoItem}>
              <img src={emailIcon} alt="Email" className={styles.contactIcon} />
              <a href="mailto:Magniclick@gmail.ru">Magniclick@gmail.ru</a>
            </div>
          </div>

          <div className={styles.footerSocial}>
            <a href="#" aria-label="VK">
              <img src={TelegramIcon} alt="Telegram" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={WhatsappIcon} alt="WhatsApp" />
            </a>
            <a href="#" aria-label="Viber">
              <img src={ViberIcon} alt="Viber" />
            </a>
          </div>
        </div>

        <div className={styles.footerColumn}>
          <div className={styles.footerTitle}>Контакты для связи</div>
          <div className={styles.footerTitleLine}></div>
          <div className={styles.requiredNote}>
            *. Поля обязательные для заполнения
          </div>

          {/* Сообщение об успехе */}
          {status.success && (
            <div className={styles.successMessage}>
              ✓ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
            </div>
          )}

          {/* Сообщение об ошибке */}
          {status.error && (
            <div className={styles.errorMessage}>
              {status.error}
            </div>
          )}

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Как к вам обращаться?"
              required
              disabled={status.loading}
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Телефон*"
              required
              disabled={status.loading}
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Email*"
              required
              disabled={status.loading}
            />
          </form>
        </div>

        <div className={styles.footerColumn}>
          <div className={styles.agreementBlock}>
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
              className={styles.checkbox}
              required
              disabled={status.loading}
            />

            <p className={styles.privacyNote}>
              Компания Magniclick будет обрабатывать ваши персональные данные в
              соответствии с{" "}
              <Link to="/privacy">Политикой конфиденциальности</Link>
            </p>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            onClick={handleSubmit}
            disabled={!formData.agreement || status.loading}
            
          >
            {status.loading ? "Отправка..." : "Связаться со мной"}
          </button>
        </div>
      </div>
    </footer>
  );
}
