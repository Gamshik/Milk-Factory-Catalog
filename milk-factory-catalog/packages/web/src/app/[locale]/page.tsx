'use client';

import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { TranslatedText } from '../../components/translated-text';

// Old Icons
import CowIcon from '@/../public/icons/svg/cow.svg';
import LeafIcon from '@/../public/icons/svg/leaf.svg';
import HeartIcon from '@/../public/icons/svg/heart.svg';

// New Icons
import MilkCartonIcon from '@/../public/icons/svg/milk-carton.svg';
import YogurtIcon from '@/../public/icons/svg/yogurt.svg';
import CheeseIcon from '@/../public/icons/svg/cheese.svg';
import FarmIcon from '@/../public/icons/svg/farm.svg';

import styles from './styles.module.scss';
import { useIsMobile } from '@/hooks/use-is-mobile';

export default function HomePage() {
  const isMobile = useIsMobile();

  return (
    <div className={styles.home}>
      {/* --- Hero Section --- */}
      <section className={styles.hero}>
        <div className={`${styles.heroContent} container`}>
          <h1 className={styles.heroTitle}>
            <TranslatedText namespace="HomePage" tKey="heroTitle" />
          </h1>
          <p className={styles.heroSubtitle}>
            <TranslatedText namespace="HomePage" tKey="heroSubtitle" />
          </p>
          <Link href="/products" className={styles.heroButton}>
            <TranslatedText namespace="HomePage" tKey="heroButton" />
          </Link>
        </div>
      </section>

      {/* --- Product Categories Section --- */}
      <section className={styles.categories}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            <TranslatedText namespace="ProductCategories" tKey="title" />
          </h2>
          <div className={styles.categoryGrid}>
            <Link href="/products" className={styles.categoryCard}>
              {/* 👇 Added width and height props */}
              <Image
                src={MilkCartonIcon}
                alt="Milk"
                width={60}
                height={60}
                className={styles.categoryIcon}
              />
              <h3 className={styles.categoryTitle}>
                <TranslatedText namespace="ProductCategories" tKey="milk" />
              </h3>
            </Link>
            <Link href="/products" className={styles.categoryCard}>
              {/* 👇 Added width and height props */}
              <Image
                src={YogurtIcon}
                alt="Yogurt"
                width={60}
                height={60}
                className={styles.categoryIcon}
              />
              <h3 className={styles.categoryTitle}>
                <TranslatedText namespace="ProductCategories" tKey="yogurt" />
              </h3>
            </Link>
            <Link href="/products" className={styles.categoryCard}>
              {/* 👇 Added width and height props */}
              <Image
                src={CheeseIcon}
                alt="Cheese"
                width={60}
                height={60}
                className={styles.categoryIcon}
              />
              <h3 className={styles.categoryTitle}>
                <TranslatedText namespace="ProductCategories" tKey="cheese" />
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* --- About Us Section --- */}
      <section className={styles.about}>
        <div className={`${styles.aboutContainer} container`}>
          <div className={styles.aboutTextContent}>
            <h2 className={styles.sectionTitle}>
              <TranslatedText namespace="AboutSection" tKey="title" />
            </h2>
            <p className={styles.aboutText}>
              <TranslatedText namespace="AboutSection" tKey="text" />
            </p>
            <Link href="/about" className={styles.aboutButton}>
              <TranslatedText namespace="AboutSection" tKey="button" />
            </Link>
          </div>
          {!isMobile && (
            <div className={styles.aboutImageContainer}>
              <Image
                src={FarmIcon}
                alt="Our Factory"
                width={200}
                height={200}
                className={styles.aboutImage}
              />
            </div>
          )}
        </div>
      </section>

      {/* --- Original Features Section --- */}
      <section className={styles.features}>
        <div className={`${styles.featuresContainer} container`}>
          <div className={styles.featureCard}>
            <Image
              src={CowIcon}
              alt="Pasture-Raised"
              width={64}
              height={64}
              className={styles.featureIcon}
            />
            <h3 className={styles.featureTitle}>
              <TranslatedText namespace="HomePage" tKey="feature1Title" />
            </h3>
            <p className={styles.featureText}>
              <TranslatedText namespace="HomePage" tKey="feature1Text" />
            </p>
          </div>
          <div className={styles.featureCard}>
            <Image
              src={LeafIcon}
              alt="Eco-Friendly"
              width={64}
              height={64}
              className={styles.featureIcon}
            />
            <h3 className={styles.featureTitle}>
              <TranslatedText namespace="HomePage" tKey="feature2Title" />
            </h3>
            <p className={styles.featureText}>
              <TranslatedText namespace="HomePage" tKey="feature2Text" />
            </p>
          </div>
          <div className={styles.featureCard}>
            <Image
              src={HeartIcon}
              alt="Family Owned"
              width={64}
              height={64}
              className={styles.featureIcon}
            />
            <h3 className={styles.featureTitle}>
              <TranslatedText namespace="HomePage" tKey="feature3Title" />
            </h3>
            <p className={styles.featureText}>
              <TranslatedText namespace="HomePage" tKey="feature3Text" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
