import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../../constants/navigation";
import Logo from "../../../components/shared/Logo/Logo";
import searchIcon from "../../../assets/header/search.svg";
import cartIcon from "../../../assets/header/cart.svg";
import closeIcon from "../../../assets/header/close.svg";
import menuIcon from "../../../assets/header/menu.svg";
import styles from "./Header.module.scss";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <Logo />
      
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.to} className={styles.navItem}>
              <Link to={item.to} className={styles.navLink}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.navActions}>
          <button type="button" className={styles.searchButton} aria-label="Поиск">
            <img src={searchIcon} alt="Поиск" className={styles.icon} />
          </button>
          <button type="button" className={styles.cartButton} aria-label="Корзина">
            <img src={cartIcon} alt="Корзина" className={styles.icon} />
          </button>
        </div>

          <button 
            type="button"
            className={styles.burgerButton} 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <img
              src={isMenuOpen ? closeIcon : menuIcon}
              alt={isMenuOpen ? "Закрыть" : "Меню"}
              className={styles.icon}
            />
          </button>
      </nav>

      <div 
        className={`${styles.overlay} ${isMenuOpen ? styles.open : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.mobileMenuHeader}>
          <Logo color="white" />
          <button 
            type="button"
            className={styles.icon} 
            onClick={closeMenu}
            aria-label="Закрыть меню"
          >
            <img src={closeIcon} alt="Закрыть" className={styles.mobileCloseIcon} />
          </button>
        </div>

        <nav className={styles.mobileMenuNav}>
          <ul className={styles.mobileMenuList}>
            {navItems.map((item) => (
              <li key={item.to} className={styles.mobileMenuItem}>
                <Link
                  to={item.to}
                  className={styles.mobileMenuLink}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
