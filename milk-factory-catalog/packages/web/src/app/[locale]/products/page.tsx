import { getProducts } from '../../../services/api';
import { ProductCard } from '../../../components/product-card';
import { TranslatedText } from '../../../components/translated-text';
import styles from './styles.module.scss';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className={styles.productsPage}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.title}>
            <TranslatedText namespace="ProductsPage" tKey="title" />
          </h1>
          <p className={styles.subtitle}>
            <TranslatedText namespace="ProductsPage" tKey="subtitle" />
          </p>
        </div>
      </section>

      <div className={`${styles.contentWrapper} container`}>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
