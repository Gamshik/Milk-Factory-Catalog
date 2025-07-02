export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  proteins: number;
  carbs: number;
  fats: number;
  calories: number;
  createdAt: string; // Typically a string in JSON
  updatedAt: string; // Typically a string in JSON
}
