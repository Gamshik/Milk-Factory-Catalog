'use client';

import { useState } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { TranslatedText } from '../translated-text';
import styles from './styles.module.scss';

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
    setIsOpen(false);
  };

  return (
    <div className={styles.languageSwitcher}>
      <button
        className={styles.currentLangButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {locale.toUpperCase()}
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          <button
            className={styles.langOption}
            onClick={() => handleLanguageChange('en')}
          >
            <TranslatedText namespace="LanguageSwitcher" tKey="en" />
          </button>
          <button
            className={styles.langOption}
            onClick={() => handleLanguageChange('ru')}
          >
            <TranslatedText namespace="LanguageSwitcher" tKey="ru" />
          </button>
          <button
            className={styles.langOption}
            onClick={() => handleLanguageChange('be')}
          >
            <TranslatedText namespace="LanguageSwitcher" tKey="be" />
          </button>
        </div>
      )}
    </div>
  );
};
