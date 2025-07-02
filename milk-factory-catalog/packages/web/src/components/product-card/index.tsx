import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Product } from '@/types/product.type';
import styles from './styles.module.scss';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/products/${product.id}`} className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={250}
          height={250}
          className={styles.productImage}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productDescription}>{product.description}</p>
      </div>
    </Link>
  );
};
