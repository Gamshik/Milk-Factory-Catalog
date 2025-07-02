import { TranslatedText } from '../../../components/translated-text';
import { ContactMap } from '../../../components/contact-map';
import styles from './styles.module.scss';

export default function ContactsPage() {
  return (
    <div className={styles.contactsPage}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.title}>
            <TranslatedText namespace="ContactsPage" tKey="title" />
          </h1>
          <p className={styles.subtitle}>
            <TranslatedText namespace="ContactsPage" tKey="subtitle" />
          </p>
        </div>
      </section>

      <div className={`${styles.contentWrapper} container`}>
        <div className={styles.details}>
          <div className={styles.detailBlock}>
            <h3 className={styles.detailTitle}>
              <TranslatedText namespace="ContactsPage" tKey="addressTitle" />
            </h3>
            <p>
              <TranslatedText namespace="Footer" tKey="address" />
            </p>
          </div>

          <div className={styles.detailBlock}>
            <h3 className={styles.detailTitle}>
              <TranslatedText namespace="ContactsPage" tKey="hoursTitle" />
            </h3>
            <p>
              <TranslatedText namespace="ContactsPage" tKey="hoursDays" />:{' '}
              <br />{' '}
              <TranslatedText namespace="ContactsPage" tKey="hoursTime" />
            </p>
            <p>
              <TranslatedText namespace="ContactsPage" tKey="lunch" />
            </p>
          </div>

          <div className={styles.detailBlock}>
            <h3 className={styles.detailTitle}>
              <TranslatedText namespace="Footer" tKey="contactsTitle" />
            </h3>
            <p>
              <b>
                <TranslatedText namespace="ContactsPage" tKey="reception" />:
              </b>{' '}
              +375 (236) 25-54-49
            </p>
            <p>
              <b>
                <TranslatedText namespace="ContactsPage" tKey="salesDept" />:
              </b>{' '}
              +375 (236) 24-91-13
            </p>
            <p>
              <b>
                <TranslatedText namespace="ContactsPage" tKey="marketingDept" />
                :
              </b>{' '}
              +375 (236) 20-27-26
            </p>
            <p>
              <b>Email:</b> info@mmp.by
            </p>
          </div>
        </div>
        <div className={styles.mapContainer}>
          <ContactMap />
        </div>
      </div>
    </div>
  );
}
