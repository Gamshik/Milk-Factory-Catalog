import Image from 'next/image';
import { TranslatedText } from '../../../components/translated-text';

import styles from './styles.module.scss';

// New Icons
import QualityIcon from '@/../public/icons/svg/quality.svg';
import TraditionIcon from '@/../public/icons/svg/tradition.svg';
import LeafIcon from '@/../public/icons/svg/leaf.svg';

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* --- Page Header Section --- */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.title}>
            <TranslatedText namespace="AboutPage" tKey="title" />
          </h1>
          <p className={styles.subtitle}>
            <TranslatedText namespace="AboutPage" tKey="subtitle" />
          </p>
        </div>
      </section>

      {/* --- History Timeline Section --- */}
      <section className={styles.history}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            <TranslatedText namespace="AboutPage" tKey="historyTitle" />
          </h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>1944</div>
              <div className={styles.timelineContent}>
                <p>
                  <TranslatedText namespace="AboutPage" tKey="history1944" />
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>1995</div>
              <div className={styles.timelineContent}>
                <p>
                  <TranslatedText namespace="AboutPage" tKey="history1995" />
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2004</div>
              <div className={styles.timelineContent}>
                <p>
                  <TranslatedText namespace="AboutPage" tKey="history2004" />
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2017</div>
              <div className={styles.timelineContent}>
                <p>
                  <TranslatedText namespace="AboutPage" tKey="history2017" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Mission & Values Section --- */}
      <section className={styles.mission}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            <TranslatedText namespace="AboutPage" tKey="missionTitle" />
          </h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <Image
                src={LeafIcon}
                alt="Natural Ingredients"
                width={56}
                height={56}
                className={styles.valueIcon}
              />
              <h3 className={styles.valueTitle}>
                <TranslatedText namespace="AboutPage" tKey="value1Title" />
              </h3>
              <p className={styles.valueText}>
                <TranslatedText namespace="AboutPage" tKey="value1Text" />
              </p>
            </div>
            <div className={styles.valueCard}>
              <Image
                src={QualityIcon}
                alt="Quality Control"
                width={56}
                height={56}
                className={styles.valueIcon}
              />
              <h3 className={styles.valueTitle}>
                <TranslatedText namespace="AboutPage" tKey="value2Title" />
              </h3>
              <p className={styles.valueText}>
                <TranslatedText namespace="AboutPage" tKey="value2Text" />
              </p>
            </div>
            <div className={styles.valueCard}>
              <Image
                src={TraditionIcon}
                alt="Cherished Traditions"
                width={56}
                height={56}
                className={styles.valueIcon}
              />
              <h3 className={styles.valueTitle}>
                <TranslatedText namespace="AboutPage" tKey="value3Title" />
              </h3>
              <p className={styles.valueText}>
                <TranslatedText namespace="AboutPage" tKey="value3Text" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
