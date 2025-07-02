'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { TranslatedText } from '../translated-text';
import { LanguageSwitcher } from '../language-switcher';
import styles from './styles.module.scss';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.mainHeader}>
      <div className={`${styles.headerContainer} container`}>
        <Link
          href="/"
          className={styles.logo}
          onClick={() => setIsMenuOpen(false)}
        >
          Мозырские Молочные Продукты
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <Link href="/about" className={styles.navLink}>
            <TranslatedText namespace="Navigation" tKey="about" />
          </Link>
          <Link href="/products" className={styles.navLink}>
            <TranslatedText namespace="Navigation" tKey="products" />
          </Link>
          <Link href="/where-to-buy" className={styles.navLink}>
            <TranslatedText namespace="Navigation" tKey="whereToBuy" />
          </Link>
          <Link href="/contacts" className={styles.navLink}>
            <TranslatedText namespace="Navigation" tKey="contacts" />
          </Link>
        </nav>

        <div className={styles.headerControls}>
          <LanguageSwitcher /> {/* 👈 Add language switcher here */}
          {/* Burger Button - only visible on mobile */}
          <button
            className={styles.burgerButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div
              className={`${styles.burgerIcon} ${
                isMenuOpen ? styles.open : ''
              }`}
            >
              <div
                className={`${styles.burgerBar} ${
                  isMenuOpen ? styles.open : ''
                }`}
              />
              <div
                className={`${styles.burgerBar} ${
                  isMenuOpen ? styles.open : ''
                }`}
              />
              <div
                className={`${styles.burgerBar} ${
                  isMenuOpen ? styles.open : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
          <Link
            href="/about"
            className={styles.mobileNavLink}
            onClick={toggleMenu}
          >
            <TranslatedText namespace="Navigation" tKey="about" />
          </Link>
          <Link
            href="/products"
            className={styles.mobileNavLink}
            onClick={toggleMenu}
          >
            <TranslatedText namespace="Navigation" tKey="products" />
          </Link>
          <Link
            href="/where-to-buy"
            className={styles.mobileNavLink}
            onClick={toggleMenu}
          >
            <TranslatedText namespace="Navigation" tKey="whereToBuy" />
          </Link>
          <Link
            href="/contacts"
            className={styles.mobileNavLink}
            onClick={toggleMenu}
          >
            <TranslatedText namespace="Navigation" tKey="contacts" />
          </Link>
        </div>
      </div>
    </header>
  );
};
