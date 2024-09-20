export interface Product {
  id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  quantity?: number; //
  size?: string; //
  ingredients: {
      name: string;
      icon: string;
      id: string;
  }[];
}
