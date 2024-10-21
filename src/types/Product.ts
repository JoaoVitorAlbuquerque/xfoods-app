export interface Product {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  quantity?: number; //
  size?: string; //
  ingredients: {
    _id: string;
    icon: string;
    name: string;
  }[];
}
