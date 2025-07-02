'use client';

import { useEffect, useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Store } from '@/types/store.type';
import { getStores } from '../../../services/api';
import { StoreCard } from '../../../components/store-card';
import { TranslatedText } from '../../../components/translated-text';
import styles from './styles.module.scss';

export default function WhereToBuyPage() {
  const t = useTranslations('WhereToBuyPage');
  const [allStores, setAllStores] = useState<Store[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Fetch all stores when the component mounts
  useEffect(() => {
    const fetchStores = async () => {
      setIsLoading(true);
      const stores = await getStores();
      setAllStores(stores);
      setIsLoading(false);
    };

    fetchStores();
  }, []);

  // Filter stores based on the search term
  const filteredStores = useMemo(() => {
    if (!searchTerm) {
      return allStores;
    }
    return allStores.filter(
      (store) =>
        store.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, allStores]);

  return (
    <div className={styles.whereToBuyPage}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.title}>
            <TranslatedText namespace="WhereToBuyPage" tKey="title" />
          </h1>
          <p className={styles.subtitle}>
            <TranslatedText namespace="WhereToBuyPage" tKey="subtitle" />
          </p>
        </div>
      </section>

      <div className={`${styles.contentWrapper} container`}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder={t('searchPlaceholder')}
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {isLoading ? (
          <p>Loading stores...</p>
        ) : (
          <div className={styles.storeGrid}>
            {filteredStores.length > 0 ? (
              filteredStores.map((store) => (
                <StoreCard key={store.id} store={store} />
              ))
            ) : (
              <p>No stores found matching your search.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
