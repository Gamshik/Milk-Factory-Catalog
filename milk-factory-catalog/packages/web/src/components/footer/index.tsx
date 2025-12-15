import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { TranslatedText } from '../translated-text';

import InstagramIcon from '@/../public/icons/svg/instagram.svg';

import styles from './styles.module.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContent} container`}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.footerLogo}>
            Мозырские Молочные Продукты
          </Link>
          <div className={styles.socials}>
            {/* 👇 Added width and height */}
            <a
              href="https://www.instagram.com/mozyrskie_molochnye/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Image
                src={InstagramIcon}
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.linkColumn}>
            <h4 className={styles.linkTitle}>
              <TranslatedText namespace="Footer" tKey="productsTitle" />
            </h4>
            <Link href="/products" className={styles.linkItem}>
              <TranslatedText namespace="Footer" tKey="linkMilk" />
            </Link>
            <Link href="/products" className={styles.linkItem}>
              <TranslatedText namespace="Footer" tKey="linkYogurt" />
            </Link>
            <Link href="/products" className={styles.linkItem}>
              <TranslatedText namespace="Footer" tKey="linkCheese" />
            </Link>
          </div>
          <div className={styles.linkColumn}>
            <h4 className={styles.linkTitle}>
              <TranslatedText namespace="Footer" tKey="companyTitle" />
            </h4>
            <Link href="/about" className={styles.linkItem}>
              <TranslatedText namespace="Footer" tKey="linkAbout" />
            </Link>
            {/* <Link href="/about/vacancies" className={styles.linkItem}>
              <TranslatedText namespace="Footer" tKey="linkVacancies" />
            </Link> */}
            <Link href="/contacts" className={styles.linkItem}>
              <TranslatedText namespace="Footer" tKey="linkContacts" />
            </Link>
          </div>
        </div>

        <div className={styles.footerContacts}>
          <h4 className={styles.linkTitle}>
            <TranslatedText namespace="Footer" tKey="contactsTitle" />
          </h4>
          <p className={styles.contactItem}>
            <TranslatedText namespace="Footer" tKey="address" />
          </p>
          <p className={styles.contactItem}>+375 (236) 24-25-32</p>
          <p className={styles.contactItem}>info@mmp.by</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          <TranslatedText
            namespace="Footer"
            tKey="copyright"
            values={{ year: currentYear }}
          />
        </p>
      </div>
    </footer>
  );
};
