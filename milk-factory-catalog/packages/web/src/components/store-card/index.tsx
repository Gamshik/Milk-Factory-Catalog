import { Store } from '@/types/store.type';
import styles from './styles.module.scss';

interface StoreCardProps {
  store: Store;
}

export const StoreCard = ({ store }: StoreCardProps) => {
  return (
    <div className={styles.storeCard}>
      <h3 className={styles.storeName}>{store.name}</h3>
      <p className={styles.storeAddress}>{`${store.city}, ${store.address}`}</p>
    </div>
  );
};
