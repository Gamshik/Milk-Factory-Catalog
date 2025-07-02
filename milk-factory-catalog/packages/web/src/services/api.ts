import { Product } from '@/types/product.type';
import { Store } from '@/types/store.type';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const getStores = async (): Promise<Store[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/stores`);
    if (!response.ok) {
      throw new Error('Failed to fetch stores');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return []; // Return an empty array on error
  }
};

// 👇 Add this function to get all products
export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

// 👇 Add this function to get a single product
export const getProductById = async (id: string): Promise<Product | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch product with id: ${id}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
