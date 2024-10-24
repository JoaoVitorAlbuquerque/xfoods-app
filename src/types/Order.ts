export interface Order {
  _id: string;
  table: number;
  status: string;
  size: string;
  read: boolean;
  products: {
    product: {
      _id: string;
      name: string;
    },
    _id: string;
    quantity: number;
    size: string;
  }[];
}
