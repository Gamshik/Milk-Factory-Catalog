import { getProductById } from '../../../../services/api';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { TranslatedText } from '../../../../components/translated-text';
import styles from './styles.module.scss';
import { Metadata } from 'next';

type Props = {
  params: { id: string };
};

// This function generates dynamic metadata for the page <head>
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductById(params.id);
  return {
    title: product ? product.name : 'Product Not Found',
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className={`${styles.detailPage} container`}>
      <div className={styles.imageContainer}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={500}
          height={500}
          className={styles.productImage}
        />
      </div>
      <div className={styles.infoContainer}>
        <h1 className={styles.productName}>{product.name}</h1>
        <p className={styles.productDescription}>{product.description}</p>

        <div className={styles.nutrition}>
          <h2 className={styles.nutritionTitle}>
            <TranslatedText namespace="ProductsPage" tKey="nutritionTitle" />
          </h2>
          <ul className={styles.nutritionList}>
            <li>
              <span>
                <TranslatedText namespace="ProductsPage" tKey="proteins" />
              </span>
              <span>{product.proteins}g</span>
            </li>
            <li>
              <span>
                <TranslatedText namespace="ProductsPage" tKey="fats" />
              </span>
              <span>{product.fats}g</span>
            </li>
            <li>
              <span>
                <TranslatedText namespace="ProductsPage" tKey="carbs" />
              </span>
              <span>{product.carbs}g</span>
            </li>
            <li>
              <span>
                <TranslatedText namespace="ProductsPage" tKey="calories" />
              </span>
              <span>{product.calories} kcal</span>
            </li>
          </ul>
          <p className={styles.nutritionDisclaimer}>
            <TranslatedText namespace="ProductsPage" tKey="per100g" />
          </p>
        </div>
      </div>
    </div>
  );
}
